import fetch from 'node-fetch';
const handler = async (m, { conn, args, usedPrefix }) => {
if (!args[0]) {
if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return m.reply('*[🍭] 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘀𝗳𝘄 𝗲𝘀𝘁𝗮𝗻 𝗱𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼𝘀 𝗲𝗻 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼.*\n> 𝐬𝐢 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 𝐲 𝐝𝐞𝐬𝐞𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨𝐬 𝐮𝐬𝐞 .enable nsfw');
}
await conn.reply(m.chat, '🍭 *Ingresa el nombre de la imágen que estas buscando*', m, rcanal);
return;
}
const use = args[0];
const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=${use}`;
try {
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const response = await fetch(url);
const data = await response.json();
if (!data || data.length === 0) {
await conn.reply(m.chat, `🪷 No hubo resultados para *${use}*`, m, rcanal);
return;
}
const randomIndex = Math.floor(Math.random() * data.length);
const randomImage = data[randomIndex];
const urlimg = randomImage.file_url;
await conn.sendFile(m.chat, urlimg, 'thumbnail.jpg', `*Resultados De:* ${use}`, m, null, rcanal)
} catch (error) {
console.error(error);
await m.reply('🍭 Ocurrió un error.');
}};
handler.help = ['r34 <texto>'];
handler.command = ['r34', 'rule34', 'rule'];
handler.tags = ['nsfw'];
handler.register = true;
handler.yenes = 2;
export default handler;