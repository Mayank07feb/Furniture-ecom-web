import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // Save token in localStorage
        navigate('/profile');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">Welcome back customer</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail@domain.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-primary">Forgot password</Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>

        {/* login with */}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            Facebook
          </a>
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            Google
          </a>
        </div>
        {/* ./login with */}

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-primary">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



// Update-Profile

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

//       if (response.status === 200) {
//         localStorage.setItem('token', response.data.token); // Save token in localStorage
//         setSuccessMessage('Login successful! Redirecting to your profile...');
//         setError('');

//         // Delay navigation to UpdateProfile page
//         setTimeout(() => {
//           navigate('/update-profile');
//         }, 2000); // 2 seconds delay
//       }
//     } catch (err) {
//       if (err.response) {
//         setError(err.response.data.message || 'Login failed');
//       } else {
//         setError('An unexpected error occurred');
//       }
//     }
//   };

//   return (
//     <div className="contain py-16">
//       <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
//         <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
//         <p className="text-gray-600 mb-6 text-sm">Welcome back customer</p>
//         <form onSubmit={handleSubmit} autoComplete="off">
//           <div className="space-y-2">
//             <div>
//               <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
//                 placeholder="youremail@domain.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
//                 placeholder="*******"
//               />
//             </div>
//           </div>
//           {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
//           {successMessage && <p className="text-green-600 text-sm mt-2">{successMessage}</p>}
//           <div className="flex items-center justify-between mt-6">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 id="remember"
//                 className="text-primary focus:ring-0 rounded-sm cursor-pointer"
//               />
//               <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
//             </div>
//             <Link to="/forgot-password" className="text-primary">Forgot password</Link>
//           </div>
//           <div className="mt-4">
//             <button
//               type="submit"
//               className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         {/* login with */}
//         <div className="mt-6 flex justify-center relative">
//           <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
//           <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
//         </div>
//         <div className="mt-4 flex gap-4">
//           <a
//             href="#"
//             className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
//           >
//             Facebook
//           </a>
//           <a
//             href="#"
//             className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
//           >
//             Google
//           </a>
//         </div>
//         {/* ./login with */}

//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account? <Link to="/register" className="text-primary">Register now</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

