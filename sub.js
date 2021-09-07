const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on("connect", function () {

    client.subscribe('khushali/#');
    console.log('client has subscribed successfully');
    //client.subscribe('topic2');
})
client.on("message", function (topic, message) {
    console.log(message.toString());
})
