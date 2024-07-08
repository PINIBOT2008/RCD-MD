//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZEYmVDdDNDRmJ3RFNiT2ZPeW8vcUtIY3ZKVFlBazE2KytqVnYzbFpsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1I0SjZZN1Y5azlYaGMyZ3BQSEhVdERUZ2d2ZVVWZ2gxeXdKY1Npcncxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSTAwdTlRVUxadTdrUXNlUjdnRmY1Q1hXZVhuTk11TU5VK09maDNSY0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWGI4dnRRZTJITjFIcGFkY1pUSHR1dTJWaVl2VUJyampSUER2cU0vTDNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IS0w5bUY5Z1BCTk1ISVd6RlRqd2FmOXQ3TW9SSlMrc2Fwb0xBTTJ4R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZsYm45QnBjYzNUVXp6OWpqMnk3RHZyd2RRUkwzanNDNmtoWnBzSkhmaFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FxQjlBSVpZbDduMGlpbGlrakZzNE9SNjhKZUsva3k2dlA0U0IvdmZVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUYySFpWUDFLbkFGZUZEM3RjOWV5eXV6S05UMlRjazB2M1pacWlBUk5pND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink3R2FIemgzS0lPRFNobGFVN1VjNm1aUFdWNHdRckU5SXFrNE1WUytIbk5Ncyt5eG1xNHpoWTVkZXlONTZwczlwZmJESnpTSTRraHpZSGtjVEU1Q0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJqS2RBbTU1aEI5RENQQVdFOUZPSnYraW5hNUlTenovZWZaWGNYNmx2d1NVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyMmUxTnJQR1NoS1NCTGMySnJYZ3V3IiwicGhvbmVJZCI6ImIzYjdmMjJhLTY0YzctNDk2OS05MWE5LTg4NTA5ZDlkYmU1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzc0RGSURoVVZ3bm9SSFlMYkZjeng3TXZITmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW5ZVEdQamlRZUNsVmNGQXh5bXpNUGdqUVZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRUSEZQUVhIIiwibWUiOnsiaWQiOiI5NDc1ODQ1ODk1ODoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGl2aXJ1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeVl6NjBFRUx2K3I3UUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNcjY3Vyt6YTgyUEtrSzJDL0d2L3VHSmZMaW5RemMwUVgwYmZiNE1lb1ZFPSIsImFjY291bnRTaWduYXR1cmUiOiJzRjlIME8veW9HbkZONFBPWklFUmpkeU5FemVnS05zV0FDZUZBUGpycHd5UTVQNVZrNi8wS1lLTElhYVdYWHRNeCtUK1lIbWtibjM0SEpBQm1HSlhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2o5dVRFanpOYmFQaklndlBPTGs0NGJlRkxwMlBtaEZQODZ5dDQrVXJUN1d1ZFpHY3hkOGRrYkgzR2wza2pLZjFPa0N5cytWUHJjRjEyL1dkalYzQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1ODQ1ODk1ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSyt1MXZzMnZOanlwQ3RndnhyLzdoaVh5NHAwTTNORUY5RzMyK0RIcUZSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDUwODg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwwRiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
