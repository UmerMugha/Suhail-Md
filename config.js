const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ismailamir4897:<CHKFhkLBbuHUnq7V>@cluster0.xxkwj2r.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_44_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMixcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNiRDB6Yk54T21kbm52Q1NhaTZXWjVhU1c2L2dMQlNmUWRSUDlzVVRGdTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE4NzU1MDc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQzdEMTVCQjFFOEM3REVCM0E5RjFDRUE5NkJCNTAwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNjYyNjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXVnZzJ3eFBTWkNPREE1UXVNdk5zQVwiLFxuICBcInBob25lSWRcIjogXCI2NGUxMDZiYy1iYTdhLTQyMzAtODU3OS01YTZlYWE4MjIxOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICA1NyxcbiAgICAgIDIzMCxcbiAgICAgIDIxNixcbiAgICAgIDE5NyxcbiAgICAgIDE3OCxcbiAgICAgIDcwLFxuICAgICAgMjE5LFxuICAgICAgNzYsXG4gICAgICA3OSxcbiAgICAgIDI2LFxuICAgICAgMjAyLFxuICAgICAgMzYsXG4gICAgICA3OSxcbiAgICAgIDIyNyxcbiAgICAgIDIsXG4gICAgICA0MixcbiAgICAgIDIxLFxuICAgICAgMTQxLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICA1NyxcbiAgICAgIDUsXG4gICAgICA4OCxcbiAgICAgIDIxNixcbiAgICAgIDIxLFxuICAgICAgMjUxLFxuICAgICAgMjI1LFxuICAgICAgMTY3LFxuICAgICAgMzEsXG4gICAgICA3MCxcbiAgICAgIDIyMyxcbiAgICAgIDEyMyxcbiAgICAgIDIwMCxcbiAgICAgIDIwNyxcbiAgICAgIDkyLFxuICAgICAgMjAsXG4gICAgICAxODMsXG4gICAgICAxNjEsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSlNGRUNMQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE4NzU1MDc4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJVbWVyIE11Z2hhbFwiLFxuICAgIFwibGlkXCI6IFwiMTIxNzg0MjAwMzgwNDc5OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnUzMjNBUWxOeWt0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2OUFWMmFtQUlBTWVyck9wSEJRZ2psRDY1NlR3NUpUSHBlS3BOVHBQbFVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImE0VDNmR1Q4R25wdXFXeVE4ajlYSGxnaGhOcVFZOFlkWVU1WHZ1R1NxRUFXRGQ0V3YvVllJNHkyN0hpQ0ovRTVPVFZhUEpKTmIrSDMxZUZYR080MkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdCVFk0OE9KVUUvYTE4ODRXWVE2eG9MNUxBR2daQkJTd25OaEVPblVraDVXUkM5a00wREZINjk2b1FXaGtDaHMvcERlQ3FjODNJQnNOc3h1ajM1TUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxODc1NTA3ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNjYyNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhaZS5qc29uIjogIntcImtleURhdGFcIjpcIm8wbFZKclpINnYwYjB5ekJmdWwvTVEvR3dYWDd2Qkw2cS9DNWt5RmdZZGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM2Mzc5MDM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3OTM2MTMzNzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Umer Mughal",
  ownername:process.env.OWNER_NAME|| "Faizan Umer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && procepunv.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
