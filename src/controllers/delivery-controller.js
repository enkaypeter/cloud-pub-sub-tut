const { PubSub  } = require("@google-cloud/pubsub");
const pubSubClient = new PubSub();
const subscriptionName = "delivery_sub";
const timeout = 60;
const pubsubRepository = require("../repositories/pub-sub-repo");
const { listenForMessages, listenForPushMessages } = pubsubRepository;

module.exports = {
    deliveryHome: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Deliveries route confirmed :)",
        })
    },

    createDelivery: (req, res) => {
        try {
            listenForMessages(pubSubClient, subscriptionName, timeout);            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't recieve orders object :(",
                data: error
            })                        
        }
        
    },

    pushDelivery: async (req, res) => {
        try {
            let messageResponse = await listenForPushMessages(req.body.message.data);
            return res.status(200).json({
                success: true,
                message: "Message recieved successfully",
                data: messageResponse
            })
    
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't recieve orders object :(",
                data: error
            })                        
        }
    }
};