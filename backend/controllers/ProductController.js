import { instance } from "../index.js";

export const processpayment = async (req, res) => {
  try {
    const options = {
      amount: 1000,
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
};
