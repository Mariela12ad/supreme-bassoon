import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[🍭] Ingrese el nombre de la APK que quiera buscar.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *Descargador de Aptoide* 📲\n\n📌 *Nombre:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualización:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ 🍭 ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apk|apkdl)$/i;
handler.group = true

export default handler;
