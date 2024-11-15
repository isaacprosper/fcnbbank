import React, { useState } from 'react';
import { FaCamera} from "react-icons/fa";
import { AiOutlineArrowLeft} from "react-icons/ai"

function UploadItemForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-6 md:py-12">
      <div className="w-full max-w-4xl mb-4 md:mb-8">
        <div className="flex items-center text-black cursor-pointer mb-4 font-bold">
          <AiOutlineArrowLeft className="text-2xl mr-2" />
          <span>Back</span>
        </div>
        <div>
            <p className="text-lg mt-5  text-black font-bold">Add Image</p>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-500 relative cursor-pointer">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center">
                <FaCamera  className="text-4xl sm:text-6xl text-black " />
                <span className="text-xm mt-2 text-black font-bold">Upload Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">Upload new item</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Golden Morn"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Expiry Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={handleDateChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                placeholder=""
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 h-24"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <select
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">category</option>
                <option value="food">Food</option>
                <option value="beverage">Beverage</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full mt-4 hover:bg-gray-800"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadItemForm;
