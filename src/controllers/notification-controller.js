const { PubSub } = require("@google-cloud/pubsub");
const pubSubClient = new PubSub();
const subscriptionName = "notification_sub";
const timeout = 60;

const pubsubRepository = require("../repositories/pub-sub-repo");
const { listenForMessages } = pubsubRepository;


module.exports = {
    notificationsHome: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Notifications route confirmed :)",
        })
    },

    pullNotification: (req, res) => {
        try {
            listenForMessages(pubSubClient, subscriptionName, timeout);            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't recieve orders object :)",
                data: error
            })                        
        }
    }

};