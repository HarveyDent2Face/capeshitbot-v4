const Discord = require("discord.js");
const google = require('google');
const cheerio = require("cheerio");
const request = require("request");

module.exports.run = async (bot,message,args) =>
{
let parts = message.content.split(" ");
	let search = parts.slice(1).join(" ")
	//console.log(mensaje);
    let page = 0;
	if(!search){
	let warnembed = new Discord.RichEmbed()
	.setTitle("Advertencia")
	//.setDescription("No has mandado un mensaje para buscar")
	.setImage("https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/10/Martian-Manhunter-Alex-Ross-Header.jpg")
	.setTimestamp()
	.setColor("#09DF30")
	.setThumbnail("https://imgix-media.wbdndc.net/cms/filer_public/42/24/422477cb-eee1-4722-9c5a-1a85d8a57af1/martianmanhunter-profile-justiceleague20181_pg22-v1-401x600-masthead.jpg")
	
	message.channel.send(warnembed)
	}

let options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
  
        $ = cheerio.load(responseBody); 
 
        let links = $(".image a.link");
 
       
        let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        //console.log(urls);
        if (!urls.length) {
            return;
        }
            

 //await page++;
//await msg.edit(embed.setImage(response[page].url).setFooter(`Page: ${page + 1}/${r.length}`));
        let gembed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("**Búsqueda realizada**")
        .setDescription(urls[0])
        .setTimestamp()
		.setColor("#09DF30")
        .setImage(urls[0])
		.setThumbnail("https://imgix-media.wbdndc.net/cms/filer_public/42/24/422477cb-eee1-4722-9c5a-1a85d8a57af1/martianmanhunter-profile-justiceleague20181_pg22-v1-401x600-masthead.jpg")
        .setFooter(`Página: 1`);


        message.channel.send( gembed );
    })

}

module.exports.help = {
	name: "img"
}