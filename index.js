const { Client, LocalAuth, Buttons, List } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
 
const myGroupName = "testapi";
 
const client = new Client({
  authStrategy: new LocalAuth(),
});
 
client.on("qr", (qr) => {
  console.log("qr is Started ==> ");
  qrcode.generate(qr, { small: true });
  console.log("qr is completed ==> ");
});
 
client.on("ready", () => {
  console.log("Client is ready!");
  
  const number = "+919113848754";

  // Your message.
 const text = "This message is automated";

  // Getting chatId from the number.
  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
 const chatId = number.substring(1) + "@c.us";

 // Sending message.
 client.sendMessage(chatId, text);
 console.log("Message sent ==> ");
});
 
client.initialize();
