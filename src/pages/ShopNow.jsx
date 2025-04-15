import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bigShoe1 } from "../assets/images";
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from "../assets/images";

const ShopNow = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(bigShoe1);

  const similarImages = [ shoe4, shoe5, shoe6, shoe7, shoe8];

  return (
    <div className="min-h-screen flex items-center  justify-center bg-white px-4 py-20">
      <div className="w-full max-w-[50%] border rounded-2xl shadow-md p-6 flex flex-col gap-6">

        <div className="w-full flex justify-center">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-60 h-60 object-contain"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Nike Air Max 2023</h2>
          <p className="text-slate-600 mt-2 text-sm">
            Experience the next level of comfort and style with Nike Air Max – perfect for every move.
          </p>
        </div>

        <div className="flex justify-center gap-3 overflow-x-auto px-2">
          {similarImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Similar ${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-12 h-12 object-contain border rounded-md cursor-pointer transition hover:scale-105 ${
                selectedImage === img ? "ring-2 ring-coral-red" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          <button
            className="bg-coral-red text-white text-sm font-semibold py-1.5 px-4 rounded hover:bg-red-600 transition"
          >
            Buy Now
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-gray-400 text-sm text-gray-700 font-medium py-1.5 px-4 rounded hover:bg-gray-100 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
