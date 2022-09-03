let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/769d9334815eb6dd4b7d5.jpg'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI*_
╠═══════════════════
║          ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║➸ *DANA* : 
║➸ 085784914140
║➸ *PULSA
║➸ 083830815715
║➸ *QRISS*:
║ https://i.ibb.co/QkM1p8x/qris.png
╰═══════════════════
╠════════════════════
║     ❉ 〔 Group Informasi Bot 〕 ❉
║➸ https://chat.whatsapp.com/IL34QSFDRT7LyAWiicXpBp
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.group = true

module.exports = handler
