import Image from "next/image";

export default function MenuItem({ image, name, description, price, onAddToCart }) {
  const handleAddToCart = () => {
    const item = { image, name, description, price };
    onAddToCart(item);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg w-200 text-center transition-transform transform hover:scale-105 shadow-lg">
      <img
        src={image}
        alt={name}
        className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-gray-600"
      />
      <h4 className="font-semibold my-2 text-orange-600">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-orange-600 text-white rounded-full px-8 py-2 sm:px-6 sm:py-2 transition-all duration-300 hover:bg-orange-400 shadow-md"
      >
        Add to cart | ₹ {price}
      </button>
    </div>
  );
}
