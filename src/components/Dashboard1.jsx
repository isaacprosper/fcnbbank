// import React, { useState } from 'react';
// import {
//   AiOutlineMenu,
//   AiOutlineClose,
//   AiOutlineBell,
//   AiOutlineSearch,
//   AiOutlineEye,
//   AiOutlineCopy,
//   AiOutlineHome,
//   AiOutlineCreditCard,
//   AiOutlineSetting,
//   AiOutlineSend,
//   AiOutlineBarcode,
//   AiOutlineCalendar,
//   AiOutlineFileText,
//   AiOutlineWifi,
//   AiOutlineDollarCircle,
//   AiOutlineUser,
//   AiOutlineArrowRight,
//   AiOutlineContacts,
//   AiOutlineEnvironment,
//   AiOutlineGift,
// } from 'react-icons/ai';

// const Dashboard1 = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleOutsideClick = () => {
//     if (isSidebarOpen) setIsSidebarOpen(false);
//   };

//   return (
//     <div className="relative flex min-h-screen bg-gray-50 text-gray-900">
//       {/* Overlay for mobile screen */}
//       {isSidebarOpen && (
//         <div
//           onClick={handleOutsideClick}
//           className="fixed inset-0 bg-black opacity-50 lg:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 pt-10 bg-white w-64 p-5 border-r shadow-lg z-20 ${
//           isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
//         } lg:translate-x-0 lg:static lg:block transition-transform duration-300 ease-in-out`}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-gray-700 font-bold">Welcome</h2>
//             <p className="text-purple-700 font-semibold">William Huffman</p>
//             <p className="text-gray-500 text-sm">A/C No.: 83927423837849</p>
//             <p className="text-gray-500 text-sm">1 Account • Personal</p>
//           </div>
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden p-2 text-gray-600"
//           >
//             <AiOutlineClose size={20} />
//           </button>
//         </div>
//         <div className="space-y-4">
//           {[
//             { label: 'Person Management', icon: <AiOutlineUser /> },
//             { label: 'Transfer', icon: <AiOutlineSend /> },
//             { label: 'Scan to Pay', icon: <AiOutlineBarcode /> },
//             { label: 'Utilities', icon: <AiOutlineDollarCircle /> },
//             { label: 'Quick Loan', icon: <AiOutlineFileText /> },
//             { label: 'Statement', icon: <AiOutlineCalendar /> },
//             { label: 'Self Top-Up', icon: <AiOutlineWifi /> },
//             { label: 'Locator', icon: <AiOutlineEnvironment /> },
//             { label: 'Contact Us', icon: <AiOutlineContacts /> },
//             { label: 'Refer', icon: <AiOutlineGift /> },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between text-gray-700 p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
//             >
//               <div className="flex items-center space-x-2">
//                 <div className="text-purple-700">{item.icon}</div>
//                 <span className="text-sm font-medium">{item.label}</span>
//               </div>
//               <AiOutlineArrowRight className="text-gray-400" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ">
//         {/* Header */}
//         <div className="bg-purple-900 p-4 text-white flex justify-between items-center lg:fixed lg:w-[calc(100%-16rem)]">
//           <button
//             className="lg:hidden"
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           >
//             <AiOutlineMenu size={24} />
//           </button>
//           <h1 className="text-lg font-bold">FNBC</h1>
//           <AiOutlineBell size={24} />
//         </div>

//         {/* Account Summary */}
//         <div className="px-4 mt-10 lg:mt-20">
//           <div className="bg-purple-800 text-white p-5 rounded-lg shadow-lg flex flex-col">
//             <div className="text-xs font-medium uppercase text-gray-300">Basic Current Account</div>
//             <div className="flex items-center mt-2">
//               <span className="text-3xl font-semibold mr-2">₹ 8,92,135.66</span>
//               <AiOutlineEye className="text-white opacity-75" size={20} />
//             </div>
//             <div className="text-sm mt-1">John Smith</div>
//             <div className="flex items-center justify-between text-gray-300 mt-1">
//               <span className="text-xs">8327642732</span>
//               <AiOutlineCopy className="text-white opacity-75" size={16} />
//             </div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="p-4">
//           <div className="flex items-center bg-gray-200 rounded-lg p-2 shadow-inner">
//             <AiOutlineSearch className="text-gray-500 mr-2" size={20} />
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="bg-gray-200 w-full focus:outline-none text-sm"
//             />
//           </div>
//         </div>

//         {/* Quick Access Section */}
//         <div className="px-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Quick Access</h2>
//             <button className="text-purple-600 font-medium">View All</button>
//           </div>
//           <div className="grid grid-cols-4 gap-3">
//             {[
//               { label: "Transfer", icon: <AiOutlineSend size={24} className="text-purple-700" /> },
//               { label: "Airtime", icon: <AiOutlineWifi size={24} className="text-purple-700" /> },
//               { label: "Scan To Pay", icon: <AiOutlineBarcode size={24} className="text-purple-700" /> },
//               { label: "Utilities", icon: <AiOutlineDollarCircle size={24} className="text-purple-700" /> },
//               { label: "Quick Loan", icon: <AiOutlineFileText size={24} className="text-purple-700" /> },
//               { label: "Statement", icon: <AiOutlineCalendar size={24} className="text-purple-700" /> },
//               { label: "Pay Bill", icon: <AiOutlineCreditCard size={24} className="text-purple-700" /> },
//               { label: "Events", icon: <AiOutlineCalendar size={24} className="text-purple-700" /> }
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
//                 <div className="bg-purple-100 p-2 rounded-full mb-2">
//                   {item.icon}
//                 </div>
//                 <p className="text-xs text-center font-medium">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Transactions Section */}
//         <div className="px-4 mt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Transactions</h2>
//             <button className="text-purple-600 font-medium">View All</button>
//           </div>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
//               <div>
//                 <p className="text-sm font-semibold">Received from John</p>
//                 <p className="text-xs text-gray-500">3:00 PM</p>
//               </div>
//               <p className="text-green-600 font-semibold">+3,982.5</p>
//             </div>
//             <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
//               <div>
//                 <p className="text-sm font-semibold">Transfer to Devid</p>
//                 <p className="text-xs text-gray-500">5:00 PM</p>
//               </div>
//               <p className="text-red-600 font-semibold">-135.3</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="fixed bottom-0 w-full bg-purple-900 p-2 flex justify-around text-white lg:hidden">
//           <button className="flex flex-col items-center text-white">
//             <AiOutlineHome size={24} />
//             <span className="text-xs">Home</span>
//           </button>

//           <button className="flex flex-col items-center text-gray-400">
//             <AiOutlineCreditCard size={24} />
//             <span className="text-xs">My Cards</span>
//           </button>
//           <button className="flex flex-col items-center text-gray-400">
//             <AiOutlineSetting size={24} />
//             <span className="text-xs">Settings</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard1;
