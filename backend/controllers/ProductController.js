import { instance } from "../index.js";

export const processpayment = async (req, res) => {
  try {
    const options = {
       amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    //console.log("Sending amount:", options.amount);
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

export const getKey = async (req, res) => {
  try {
   await res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Error fetching Razorpay key:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch Razorpay API key",
      error: error.message,
    });
  }
};

