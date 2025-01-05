import { TryCatch } from "../middleware/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { Order } from "../models/order.js";
import { invalidateCache, reduceStock } from "../utils/features.js";
export const newOrder = TryCatch(async (req, res, next) => {
    const { shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total, } = req.body;
    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total)
        return next(new ErrorHandler("Please Enter All Fields", 400));
    const order = await Order.create({
        shippingInfo,
        orderItems,
        user,
        subtotal,
        tax,
        shippingCharges,
        discount,
        total,
    });
    await reduceStock(orderItems);
    await invalidateCache({
        product: true,
        order: true,
        admin: true,
    });
    return res.status(201).json({
        success: true,
        message: "Order Placed Successfully",
        order,
    });
});
export const myOrders = TryCatch(async (req, res, next) => { });
export const allOrders = TryCatch(async (req, res, next) => { });
export const getSingleOrder = TryCatch(async (req, res, next) => { });
export const deleteOrder = TryCatch(async (req, res, next) => { });
export const processOrder = TryCatch(async (req, res, next) => { });