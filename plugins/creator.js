const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ElainaaOwner
item.ORG: ElainaaOwner
item1.TEL;waid=6283830815715:6283830815715@s.whatsapp.net
item1.X-ABLabel:owner selalu ada kalau penting 
item2.YOUTUBE;type=INTERNET: https://chat.whatsapp.com/IL34QSFDRT7LyAWiicXpBp
item2.X-ABLabel:GROUP
item3.ADR:;;🎍JEPANG;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https://i.ibb.co/QkM1p8x/qris.png 
item4.X-ABLabel:QRISS
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/769d9334815eb6dd4b7d5.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', '𝙎𝙚𝙬𝙖', '.sewa', '𝘽𝙖𝙘𝙠', '.menu', '𝘿𝙤𝙣𝙖𝙨𝙞', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
