const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready",() => {
    console.log("ready");
});
products = {};
class Product{
    constructer(nameOfSeller,whatIsBeingSold){
        this.nameOfSeller = nameOfSeller;
        this.whatIsBeingSold = whatIsBeingSold;


    }
    getNameOfSeller() {
        console.log(this.nameOfSeller);
        return this.nameOfSeller;
    }
}
client.on("message", (message) => {
    if (message.author.bot) return;
  // This is where we'll put our code.
    if (message.content.indexOf("!") !== 0) return;
    const args = message.content.slice("!".length).trim().split(",");
    const command = args.shift().toLowerCase();
    if(command == "ping test"){
        message.channel.send("pong");
    }
    if (command == "create product"){
        if(args.length>0){
            if(!(args[0] in products)){
                console.log(message.author.username);

                products[args[0]] = new Product(message.author.username, args[0]);
            } else{
                message.channel.send("Item exists with same name, try another name");
            }
        }
    }
    if (command == "get all products"){
        console.log(products);
        for(item in products){
            console.log(item);
            console.log(products[item])
            message.channel.send("This " + products[item].whatIsBeingSold + " is being sold by" + products[item].getNameOfSeller());
        }
    }

});

client.login("NTU2ODg2MzE5OTcyODc2MzMz.D3AQUw.qIUml-e50BoWxZ1p3QnK93MgCAo");