// const Ably = require('ably');

// async function publishSubscribe() {

//   // Connect to Ably with your API key
//   const ably = new Ably.Realtime("")
//   ably.connection.once("connected", () => {
//     console.log("Connected to Ably!")
//   })

//   // Create a channel called 'get-started' and register a listener to subscribe to all messages with the name 'first'
//   const channel = ably.channels.get("get-started")
//   await channel.subscribe("first", (message) => {
//     console.log("Message received: " + message.data)
//   });

//   // Publish a message with the name 'first' and the contents 'Here is my first message!'
//   await channel.publish("first", "Here is my first message!")

//   // Close the connection to Ably after a 5 second delay
//   setTimeout(async () => {
//     // ably.connection.close();
//     //   await ably.connection.once("closed", function () {
//     //     console.log("Closed the connection to Ably.")
//     //   });
//   }, 5000);
// }

// publishSubscribe();

API_KEY = null

let ably
let channel


async function startAbly(){
    ably = new Ably.Realtime(API_KEY);
    ably.connection.once("connected", () => {
        console.log("Connected to Ably!")
    })
    channel = ably.channels.get("get-started")
    await channel.subscribe("first", (message) => {
        console.log(message.data.property+" : " + message.data.value)
        document.getElementById(message.data.property).innerHTML = message.data.value
    });
}

async function sendUpdate(property, value){
    await channel.publish("first", {property: property, value: value})
}

function chooseView(view){
    document.getElementById("startOptions").style.display = "none"
    document.getElementById(view).style.display = "unset"
}

function updateScoreByID(team, id){
    sendUpdate(`familyScore${team}`, document.getElementById(id).value)
    sendUpdate(`cpfamilyScore${team}`, document.getElementById(id).value)
    document.getElementById(id).value = ""
}

function registerAPIKey(){
    API_KEY = document.getElementById("apiKeyInput").value
    try{
        startAbly()
        document.getElementById("startOptions").style.display = "unset"
        document.getElementById("apiKeyContainer").style.display = "unset"
    }catch (e){
        console.log(e)
    }
}