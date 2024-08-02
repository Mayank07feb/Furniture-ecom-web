import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
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
      console.error('Error fetching profile data:', err);
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
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setPopupMessage('Logout successful');
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
      navigate('/login');
    }, 2000); // Delay of 2 seconds
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base hover:text-primary-dark transition">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      {/* ./Breadcrumb */}

      {/* Wrapper */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-16">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white shadow-lg rounded-lg px-6 py-4 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 p-1">
                <img
                  src={user.profilePic}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Hello,</p>
              <h4 className="text-gray-800 font-semibold text-xl">{user.firstName} {user.lastName}</h4>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-lg rounded-lg divide-y divide-gray-200">
            {[
              { text: 'Manage account', icon: 'fa-address-card', link: '#' },
              { text: 'Profile information', icon: '', link: '#' },
              { text: 'Manage addresses', icon: '', link: '#' },
              { text: 'Change password', icon: '', link: '#' },
              { text: 'My order history', icon: 'fa-box-archive', link: '#' },
              { text: 'My returns', icon: '', link: '#' },
              { text: 'My Cancellations', icon: '', link: '#' },
              { text: 'My reviews', icon: '', link: '#' },
              { text: 'Payment methods', icon: 'fa-credit-card', link: '#' },
              { text: 'Voucher', icon: '', link: '#' },
              { text: 'My wishlist', icon: 'fa-heart', link: '#' },
              { text: 'Logout', icon: 'fa-right-from-bracket', link: '#', onClick: handleLogout, textClass: 'text-red-600' }
            ].map((item, index) => (
              <div key={index} className={`flex items-center justify-between px-4 py-3 ${index === 0 ? 'border-b' : ''}`}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={`flex items-center text-gray-700 hover:text-primary transition ${item.textClass || ''}`}
                  >
                    {item.icon && <i className={`fa-solid ${item.icon} mr-3 text-lg`}></i>}
                    {item.text}
                  </button>
                ) : (
                  <a
                    href={item.link}
                    className={`flex items-center text-gray-700 hover:text-primary transition ${item.textClass || ''}`}
                  >
                    {item.icon && <i className={`fa-solid ${item.icon} mr-3 text-lg`}></i>}
                    {item.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* ./Sidebar */}

        {/* Info */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg px-6 py-8">
          <h4 className="text-2xl font-semibold mb-6">Profile Information</h4>
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
              <div className="text-center mt-6">
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
        {/* ./Info */}
      </div>
      {/* ./Wrapper */}

      {/* Popup */}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <p className="text-lg text-primary">{popupMessage}</p>
          </div>
        </div>
      )}
      {/* ./Popup */}
    </>
  );
};

export default Profile;
