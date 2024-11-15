// import React, { useState } from 'react';
// import { FiLogOut, FiSearch, FiMoreVertical, FiTrash2 } from 'react-icons/fi';
// import { IoMenuOutline } from "react-icons/io5";
// import { FaSearchPlus, FaBoxOpen } from "react-icons/fa";
// import { TiPlus } from "react-icons/ti";
// import { AiOutlineClose } from "react-icons/ai";

// function UserManagement() {
//   const initialUsers = [
//     { id: 1, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
//     { id: 2, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
//     { id: 3, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
//     { id: 4, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
//     { id: 5, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
//   ];

//   const [users, setUsers] = useState(initialUsers); 
//   const [menuOpen, setMenuOpen] = useState(null);   
//   const [searchTerm, setSearchTerm] = useState(''); 
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleMenu = (index) => {
//     setMenuOpen(menuOpen === index ? null : index);
//   };

//   const deleteUser = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//     setMenuOpen(null);
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-white">

//       <aside className="hidden lg:block w-52 bg-gray-200 p-6 pt-32">
//         <h1 className="text-2xl font-bold mb-8">View Users</h1>
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
//             <FiLogOut className="mr-3 text-xl " /> Logout
//           </a>
//         </nav>
//       </aside>

//       <aside
//         className={`fixed lg:hidden top-0 left-0 h-full bg-gray-200 p-6 pt-8 w-52 transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">View Users</h1>
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

//       <main className="flex-1 p-6 lg:p-10">
//         <div className="flex items-center justify-between lg:hidden mb-4">
//           <h1 className="text-2xl font-bold">View Users</h1>
//           <button onClick={toggleSidebar} className="text-2xl text-gray-600">
//             <IoMenuOutline />
//           </button>
//         </div>

//         <div className="flex items-center border rounded-xl  px-4 py-2 mb-6 bg-gray-200">
//           <FiSearch className="text-gray-600 text-xl" />
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="ml-4 bg-transparent focus:outline-none w-full"
//           />
//         </div>

//         <h2 className="text-xl font-bold mb-4">Users</h2>
//         <div className="space-y-4">
//           {filteredUsers.map((user, index) => (
//             <div
//               key={user.id}
//               className="flex justify-between items-center p-4 border-b border-black"
//             >

//               <div>
//                 <p className="font-bold text-gray-900">Name: {user.name}</p>
//                 <p className="text-gray-700">Email: {user.email}</p>
//               </div>

//               <div className="relative">
//                 <button onClick={() => toggleMenu(index)}>
//                   <FiMoreVertical className="text-2xl text-black" />
//                 </button>
//                 {menuOpen === index && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 border">
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       <FaBoxOpen className="mr-2 text-gray-600" /> View Inventory
//                     </a>
//                     <button
//                       onClick={() => deleteUser(user.id)}
//                       className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
//                     >
//                       <FiTrash2 className="mr-2" /> Delete User
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//           {filteredUsers.length === 0 && (
//             <p className="text-gray-600 text-center mt-4">No users found</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default UserManagement;

import React, { useState } from 'react';
import { FiLogOut, FiSearch, FiMoreVertical, FiTrash2 } from 'react-icons/fi';
import { IoMenuOutline } from "react-icons/io5";
import { FaSearchPlus, FaBoxOpen } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

function UserManagement() {
  const initialUsers = [
    { id: 1, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
    { id: 2, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
    { id: 3, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
    { id: 4, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
    { id: 5, name: 'Adeyemi Timilehin David', email: 'Adeyemitimilehin@gmail.com' },
  ];

  const [users, setUsers] = useState(initialUsers); 
  const [menuOpen, setMenuOpen] = useState(null);   
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setMenuOpen(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <aside
        className={`fixed lg:hidden top-0 left-0 h-full bg-gray-200 p-6 pt-8 w-52 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">View Users</h1>
          <button onClick={toggleSidebar} className="text-2xl text-gray-600">
            <AiOutlineClose />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-5">
          <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
            <IoMenuOutline className="mr-3 text-3xl font-bold" /> Dashboard
          </a>
          <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
            <FaSearchPlus className="mr-3 text-xl" /> View Users
          </a>
          <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
            <TiPlus className="mr-3 text-2xl" /> Add User
          </a>
          <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
            <FiLogOut className="mr-3 text-xl" /> Logout
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <div className="flex items-center justify-between lg:hidden mb-4">
          <h1 className="text-2xl font-bold">View Users</h1>
          <button onClick={toggleSidebar} className="text-2xl text-gray-600">
            <IoMenuOutline />
          </button>
        </div>

        <div className="flex items-center border rounded-xl  px-4 py-2 mb-6 bg-gray-200">
          <FiSearch className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-4 bg-transparent focus:outline-none w-full"
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Users</h2>
        <div className="space-y-4">
          {filteredUsers.map((user, index) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-4 border-b border-black"
            >

              <div>
                <p className="font-bold text-gray-900">Name: {user.name}</p>
                <p className="text-gray-700">Email: {user.email}</p>
              </div>

              <div className="relative">
                <button onClick={() => toggleMenu(index)}>
                  <FiMoreVertical className="text-2xl text-black" />
                </button>
                {menuOpen === index && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 border">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <FaBoxOpen className="mr-2 text-gray-600" /> View Inventory
                    </a>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      <FiTrash2 className="mr-2" /> Delete User
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p className="text-gray-600 text-center mt-4">No users found</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default UserManagement;