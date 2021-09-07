const mqtt=require("mqtt");
var client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on("connect",function(){
        let random=1;
        console.log(random);
            client.publish('khushali/123','hello how are you'+random);
            // client.publish('topic2',"hiii");
        
})
// const mqtt = require('mqtt');
 
// const client = mqtt.connect('mqtt://test.mosquitto.org');
 
// client.on("connect", () => {
//     console.log("client now conncted");
//     let ans = 0;
//     let id = 0
//     setInterval(() => {
//         client.publish('XYZ', ans.toString());
//         ans += 1;
//     }, 1000);
// });
 
// console.log(client);