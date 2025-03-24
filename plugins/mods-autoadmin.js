
const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('🍭 *¡YA ERES ADM AMOR!*');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply('🍭 *¡YA TE DI ADM CARIÑO!*');
    let nn = conn.getName(m.sender);
     conn.reply('543876577197@s.whatsapp.net', `🍭 *${nn}* se dio auto Admin en:\n> ${groupMetadata.subject}.`, m, rcanal, );
  } catch {
    m.reply('🍭 Ocurrio un error.');
  }
};
handler.tags = ['mods'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
