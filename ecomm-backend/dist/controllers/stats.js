import { myCache } from "../app.js";
import { TryCatch } from "../middleware/error.js";
export const getDashboardStats = TryCatch(async (req, res, next) => {
    let stats;
    if (myCache.has("admin-stats"))
        stats = JSON.parse(myCache.get("admin-stats"));
    else {
        const today = new Date();
        const startOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    }
    return res.status(200).json({
        success: true,
        stats,
    });
});
