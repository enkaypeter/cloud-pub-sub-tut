module.exports = {
    orders: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Orders route confirmed :)",
        })
    },
    
    deliveries: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Deliveries route confirmed :)",
        })
    },

    notifications: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Notifications route confirmed :)",
        })
    },

};