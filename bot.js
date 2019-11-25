// Este es el bot handler. By: Dos Caras/Harvey Dent. :v

// Se empieza con instanciar las librerías a utilizar, así como llamar a archivos .json
const botSettings = require("./botsettings.json");
const Discord = require('discord.js');
const Canvas = require('canvas');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

/*  
    Utilizamos la librería de fs para leer los comandos. Una vez hecho esto, cargaría con facilidad.
    Cabe resaltar que fs viene con la instalación de node.js.

    Al momento de hacer console log, se verifica que los comandos funcionen correctamente, viéndolos
    desde la ventana de comandos de windows. Además, en este bot se utiliza nodemon para que los cambios
    realizados actualicen el bot automáticamente sin necesidad de tipear npm start todo el tiempo.

    Prácticamente, aquí es donde se programa el comportamiento del bot, y cargando sus comandos para su 
    revisión en el cmd de windows.
*/

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.lenght <= 0) {
        console.log("No hay comandos");
        return;
    }

    console.log(`Cargando ${jsfiles.lenght} comandos!`)

    jsfiles.forEach((f, i)=>{
        let props = require(`./comandos/${f}`);
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});

/*
    Una vez realizada la programación del comportamiento del bot, se procede a encender este con la función
    de bot.on. Aquí se puede configurar el comportamiento del bot en su actividad, así como otros eventos.

    En este caso se coloca algunos console logs para verificar los comandos y el funcionamiento del bot, así
    como su actividad, y el console.log de la invitación del bot, más que nada para tenerlo a la mano.
*/

bot.on("ready", async () => {
    console.log('Bot is ready! CapeshitBot funcionando correctamente');
    console.log(bot.commands);
    bot.user.setActivity("A tu puta madre", {type: "WATCHING"});

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
});

/*
    Para completar el funcionamiento del bot, se procede a realizar la función para poder usar comandos en archivos
    .js separados. Esto más que nada por una cuestión de orden y facilidad a la hora de programar cada comando.

    Esto se conoce como handler, y es muy eficaz a la hora de programar un bot y puede servir perfectamente como
    método de separación, además de aprovechar al máximo el node.js utilizado en este bot. El handler es muy importante,
    ya que los módulos sean exportados sin necesidad de hacer otra función o de hacerlo todo en un mismo archivo.
*/

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botSettings.prefix
        };
    }
    
    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(!command.startsWith(prefix)) return;
    let comandos = bot.commands.get(command.slice(prefix.length));
    if(comandos) comandos.run(bot, message, args);


});

/*
    Toda esta sección es de canvas
*/

// Pass the entire Canvas object because you'll need to access its width, as well its context
const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return ctx.font;
};


function getChannelFromMention(mention) {

    if (!mention) return;
    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return bot.channels.get(mention);
    }
}

// guía en español hecha por mi :v para no olvidar cómo utilizar canvas

bot.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === '│🎬│bienvenidas');
    if (!channel) return;
    // define canvas
    const canvas = Canvas.createCanvas(700, 250);
    // ctx (context o contexto) se utiliza para definir varias características de Canvas
    const ctx = canvas.getContext('2d');

    // Defines el background y lo llamas. Utilizas await porque va a demorar en cargar
    const background = await Canvas.loadImage('./wallpaper.jpg');

    // Aquí se define el tamaño de la imagen para que abarque todo Canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    // Una vez definido todo, se procede a actuar VVVVVVVVVVV

    // This uses the canvas dimensions to stretch the image onto the entire canvas

    // Con la función strokeStyle, definimos el color
    ctx.strokeStyle = '#74037b';

    // Y con strokeRect, el largo y ancho. Lo utilizamos para que sea un rectángulo en todo el canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);


    //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // Use helpful Attachment class structure to process the file for you

    // 2 textos, el nombre del usuario y la bienvenida.

    // Se selecciona el font, tamaño y tipo de cada uno de los tips de letras disponibles.
    ctx.font = '28px sans-serif';
    // Color
    ctx.fillStyle = '#ffffff';
    // Mensaje a enviar en el canvas
    ctx.fillText('Bienvenido a Heaven,', canvas.width / 2.5, canvas.height / 3.5);


    // Aquí utilizamos la función applyText, para que el texto encaje si es que es muy largo
    ctx.font = applyText(canvas, member.displayName);
    // Color
    ctx.fillStyle = '#ffffff';
    // Mensaje a enviar. En este caso, enviamos con member.displayName.
    ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);

    // Se define la imagen a colocar

    // Aquí empieza a dibujar
    ctx.beginPath();
    // Start the arc to form a circle //// La forma del círculo
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    // Termina de dibujar
    ctx.closePath();
    // selecciona la región dibujada
    ctx.clip();


    // Se usa await para amenizar la carga de la imagen. Aunque claro, es mejor usar un embed, se demora menos :v
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
    // Draw a shape onto the main canvas

    //ctx.drawImage(avatar, 25, 0, 200, canvas.height);

    // Move the image downwards vertically and constrain its height to 200, so it's a square
    ctx.drawImage(avatar, 25, 25, 200, 200);

    // Se define el attachment para procesar la imagen. Se utiliza el método toBuffer para cargarla.
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    // Y se envía el attachment junto a un mensaje

    channel.send(`Welcome to the server, ${member}!`, attachment);

});


bot.login(botSettings.token);