//pub-sub factory functions go in here
import { PubSub, v1 } from "@google-cloud/pubsub";
const pubSubClient = new PubSub();
const pubSubClient2 = new v1.PublisherClient();

module.exports = {

};