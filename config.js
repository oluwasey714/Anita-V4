require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;2349064308212
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);
{"noiseKey":{"private":{"type":"Buffer","data":"2CAAvdd5O8hf6eQA/Ko6O7ZuviVX2+D3FIvuLuemln8="},"public":{"type":"Buffer","data":"4dwKtvU8223Qn4k7Q8MAHNs3oC7G7SRtSOq0+OoTolY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"IK51xaR+nzyK33wKC+ranGu3KZELvhBaY3xMZv5mA30="},"public":{"type":"Buffer","data":"bPOAaSIac1s5j0Yy4HS9CC+1s5dDZmHN5FTSqFdwkWQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"SC0QyGf3HsSq3LbCgKc9lg+y15JZc8BKA22QJ/jRpH8="},"public":{"type":"Buffer","data":"u6/BR4YlO5xWi5oLfAzJdb7HS6idyacnx+JkMcXBrjg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kJftjFBtzmSczjXV5il6ArzprZ5mnZ/VElzu6mKpjGM="},"public":{"type":"Buffer","data":"le5SDdIqtIOzDrIGX4B7LgdRQsLbUNZ9HJzZnLQa60w="}},"signature":{"type":"Buffer","data":"Jylf4Pyvb/zzM1A55e2hHlC9askin2+Np7/qWS0aFjGQwIq9li+GBAmRpmkMlTQnEw8MRd5/yzs3Iu/5xvxsiw=="},"keyId":1},"registrationId":224,"advSecretKey":"UQzimCAZ6jOUWy5Q3soz6ZWzcWyf6aXqhZuHHyD2+P4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"fBZFlanMTdOhUKfzJLJHqA","phoneId":"927a78db-1575-4a71-89e4-0ae5df7817db","identityId":{"type":"Buffer","data":"2uww4315m7UxLXAaeXs/ROnzFCQ="},"registered":true,"backupToken":{"type":"Buffer","data":"PDRr1/edEKvJ9c5tngVkclVomNs="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2349064308212:16@s.whatsapp.net","lid":"250757689430036:16@lid"},"account":{"details":"CLOz5akGEJ3urMQGGAEgACgA","accountSignatureKey":"y2s466GMWZfqRcQ+UHnavmAylHP665gB+6x/STiTngo=","accountSignature":"y2rM1YaR5iiGHk0PVjykBZMKCGO4rkpkfIxcxSy87UGtp7oUFqmc46oQ/lkYWTZ809qoIGt1zACmicH/zWZZAA==","deviceSignature":"9WyLsAJvkeq7EAyYdUfpWtVoZb6RcylykFdtOXNhDDrAIn2qxuheUWOyD28Qz1IDw3JQ2ePcDv+PaTUgtplDiw=="},"signalIdentities":[{"identifier":{"name":"2349064308212:16@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BctrOOuhjFmX6kXEPlB52r5gMpRz+uuYAfusf0k4k54K"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1753954085,"lastPropHash":"2P1Yhf","preKeys":{"private":{"type":"Buffer","data":"0NOloxeXnhrWeKT2e1I8gXUyw3wliqsSXbBnjoymHl4="},"public":{"type":"Buffer","data":"m8+tmPWj+ljIJnC1sbRtUVxMTn6mhQSHQEQ2yJao428="}},"senderKeys":[{"senderKeyId":1820186961,"senderChainKey":{"iteration":355,"seed":"SgB+pVzUAfcR8WfCfL/8PF1CuRBJ3XPa0qdXPRVi3cY="},"senderSigningKey":{"public":"Baunp3HJ+5L6IDbAnzq7fAlixzGj3Q+8fICpPXMtY4I/"},"senderMessageKeys":[]}],"timestamp":"2025-07-31T09:28:11.438Z"}
// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
