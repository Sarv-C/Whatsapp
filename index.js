<<<<<<< HEAD
version https://git-lfs.github.com/spec/v1
oid sha256:4d0ac5fb877cbefecb333657032302c3ce776813698d779116ea056c6829c665
size 819
=======
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
>>>>>>> 02e172d8b4cfae0aa6ebe4fc54221e0073c340ef
