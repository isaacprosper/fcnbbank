
// import React, { useState } from 'react';
// import { FiUsers, FiUserPlus, FiLogOut } from 'react-icons/fi';
// import { IoMenuOutline } from "react-icons/io5";
// import { FaSearchPlus } from "react-icons/fa";
// import { TiPlus } from "react-icons/ti";
// import { AiOutlineClose } from "react-icons/ai";

// function Dashboard() {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-white">

//       <aside
//         className={`fixed lg:hidden top-0 left-0 h-full bg-gray-200 p-6 pt-8 w-52 transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >

//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <button onClick={toggleSidebar} className="text-2xl text-gray-600">
//             <AiOutlineClose />
//           </button>
//         </div>
        
//         <nav className="flex flex-col gap-6 mt-5">
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold ">
//             <IoMenuOutline className="mr-3 text-3xl font-bold" /> Dashboard
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FaSearchPlus className="mr-3 text-xl" /> View Users
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <TiPlus className="mr-3 text-2xl" /> Add User
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FiLogOut className="mr-3 text-xl" /> Logout
//           </a>
//         </nav>
//       </aside>
     
//       <main className="flex-1 p-6 lg:p-10  ">
//         <div className="flex items-center justify-between lg:hidden mb-4">
//           <button onClick={toggleSidebar} className="text-2xl text-gray-600 ">
//             <IoMenuOutline />
//           </button>
//         </div>
//         <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             'Total Users',
//             'Total Items in Inventory',
//             'Total Cereal',
//             'Total Drinks',
//             'Total Choco Bars',
//             'Total Biscuits',
//             'Total Spreads',
//             'Total Nuts'
//           ].map((title, index) => (
//             <div
//             key={index}
//             className="bg-gray-200 px-6 py-8 rounded-3xl flex flex-col items-start shadow-sm"
//             >
//               <h3 className="text-xl font-bold text-black">{title}</h3>
//               <p className="text-lg font-medium text-gray-800 mt-2">2,000,000,000</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;









// import React, { useState } from 'react';
// import { FiUsers, FiUserPlus, FiLogOut } from 'react-icons/fi';
// import { IoMenuOutline } from "react-icons/io5";
// import { FaSearchPlus } from "react-icons/fa";
// import { TiPlus } from "react-icons/ti";
// import { AiOutlineClose } from "react-icons/ai";

// function Dashboard() {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-white">

//       <aside
//         className={`hidden lg:block w-52 bg-gray-200 p-6 pt-32`}
//       >
//         <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
//         <nav className="flex flex-col gap-6">
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <IoMenuOutline className="mr-3 text-3xl font-bold" /> Dashboard
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FaSearchPlus className="mr-3 text-xl" /> View Users
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <TiPlus className="mr-3 text-2xl" /> Add User
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FiLogOut className="mr-3 text-xl" /> Logout
//           </a>
//         </nav>
//       </aside>

//       <aside
//         className={`fixed lg:hidden top-0 left-0 h-full bg-gray-200 p-6 pt-8 w-52 transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >

//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <button onClick={toggleSidebar} className="text-2xl text-gray-600">
//             <AiOutlineClose />
//           </button>
//         </div>
        
//         <nav className="flex flex-col gap-6 mt-5">
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <IoMenuOutline className="mr-3 text-3xl font-bold" /> Dashboard
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FaSearchPlus className="mr-3 text-xl" /> View Users
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <TiPlus className="mr-3 text-2xl" /> Add User
//           </a>
//           <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
//             <FiLogOut className="mr-3 text-xl" /> Logout
//           </a>
//         </nav>
//       </aside>
     
//       <main className="flex-1 p-6 lg:p-10 ">
//         <div className="flex items-center justify-between lg:hidden mb-4">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <button onClick={toggleSidebar} className="text-2xl text-gray-600">
//             <IoMenuOutline />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             'Total Users',
//             'Total Items in Inventory',
//             'Total Cereal',
//             'Total Drinks',
//             'Total Choco Bars',
//             'Total Biscuits',
//             'Total Spreads',
//             'Total Nuts'
//           ].map((title, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 px-6 py-8 rounded-3xl flex flex-col items-start shadow-sm"
//             >
//               <h3 className="text-xl font-bold text-black">{title}</h3>
//               <p className="text-lg font-medium text-gray-800 mt-2">2,000,000,000</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;
