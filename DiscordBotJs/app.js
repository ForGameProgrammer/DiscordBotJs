const Discord = require("discord.js");
const client = new Discord.Client();
var config = require("./config");

// Docs : https://discord.js.org/#/docs/main/stable/general/welcome


client.on("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "!";

client.on("message", MessageReceive);

function MessageReceive(msg)
{
    if (!msg.content.startsWith(prefix)) return;
    var message = msg.content.substr(from = prefix.length);
    var args = message.includes(" ") ? message.split(" ") : null;
    switch (message)
    {
        case "kefo":
        case "kefaret":
        case "yürüyenkefaret":
            client.fetchUser(config.KEFO).then(kefo =>
            {
                msg.channel.send("Aðla Kefo " + kefo);
            }
                );

            break;
        case "":

            break;
        default:

            break;
    }
}

client.login(config.TOKEN);