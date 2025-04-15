import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { title, mainImage, description, price, similarImages } = location.state.product;

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-4xl">
        <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>

        <img
          src={mainImage}
          alt="Main Product"
          className="w-full max-h-[300px] object-contain mb-4 rounded-xl"
        />

        <div className="text-center text-gray-700 mb-4">
          <p className="text-lg mb-2">{description}</p>
          <p className="text-xl font-semibold">Price: ${price}</p>
        </div>

        <div className="flex gap-3 justify-center mb-6">
          {similarImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`similar-${idx}`}
              className="w-20 h-20 object-contain cursor-pointer border border-gray-300 rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>

        <div className="flex justify-between items-center gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full hover:bg-green-600">
            Buy Now
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
