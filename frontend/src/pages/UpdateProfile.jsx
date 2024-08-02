import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
    phone: '',
    profilePic: '../assets/images/avatar.png',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
      setMessage('');
    } catch (err) {
      console.error('Error fetching profile data:', err.response?.data || err.message);
      setError('Failed to fetch profile data. Please check the console for more details.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(user).forEach((key) => {
        formData.append(key, user[key]);
      });

      await axios.put('http://localhost:5000/api/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Profile updated successfully');
      setError('');

      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (err) {
      console.error('Error updating profile:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
      {loading ? (
        <p className="text-gray-600 text-center">Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={user.birthday}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={handleChange}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="block w-full border border-gray-300 px-4 py-3 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
            >
              Save Changes
            </button>
          </div>
          {message && <p className="text-green-600 text-center mt-4">{message}</p>}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
