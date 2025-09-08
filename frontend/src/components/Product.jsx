import React from "react";
import bagImage from "../assets/images/bag.jpg";
import headPhone from "../assets/images/headphone.jpg";
import jacket from "../assets/images/jacket.jpg";
import jeans from "../assets/images/jeans.png";
import axios from "axios";

const products = [
  { id: 1, title: "Leather Bag", price: 200, image: bagImage },
  { id: 2, title: "Classic Wallet", price: 150, image: headPhone },
  { id: 3, title: "Travel Backpack", price: 350, image: jacket },
  { id: 4, title: "Office Laptop Bag", price: 500, image: jeans },
];

const Product = () => {
  const CheckToPay = async (amount) => {
    try {
      // Step 1: Get Razorpay Key
      const { data: getKey } = await axios.get("/api/getkey");
      const { key } = getKey;

      // Step 2: Create order from backend
      const { data: orderData } = await axios.post("/api/payment/process", {
        amount,
      });
      const { order } = orderData;

      // Step 3: Razorpay options
      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: "EduKart",
        description: "Payment for your order",
        image: "/logo.png", // optional
        order_id: order.id,
        callback_url: "/api/payment-success",
        prefill: {
          name: "varsha",
          email: "varsha@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0f172a",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Razorpay Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-64 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain bg-white p-2 rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">₹{product.price}</p>
              <button
                onClick={() => CheckToPay(product.price)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded"
              >
                Pay ₹{product.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
