const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923081679440" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923188652219";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923081679440";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_58_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUdHd3pvQjdndU11YUhVSUNSejdEK09ocUk1RjdpTkg1ZVg5QTVqNEpSND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnpxY0xUNVNUREdUVl95eGdwRU5rd1wiLFxuICBcInBob25lSWRcIjogXCIwMGUwYmY3NS1jZGIxLTQ5NWMtOTM2Zi03NjhjYTE1YmU0MDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxMTgsXG4gICAgICAxNjEsXG4gICAgICAxNixcbiAgICAgIDIxNyxcbiAgICAgIDIyOSxcbiAgICAgIDE1MyxcbiAgICAgIDE2NixcbiAgICAgIDEzMCxcbiAgICAgIDIzMSxcbiAgICAgIDQzLFxuICAgICAgMjQ5LFxuICAgICAgMTk3LFxuICAgICAgMjExLFxuICAgICAgMjM1LFxuICAgICAgMTYzLFxuICAgICAgMTA3LFxuICAgICAgMTI5LFxuICAgICAgMjI2LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxNDcsXG4gICAgICAxNDcsXG4gICAgICAyMjAsXG4gICAgICAxNDgsXG4gICAgICAxNTksXG4gICAgICAyMTcsXG4gICAgICAxNyxcbiAgICAgIDE0MCxcbiAgICAgIDI0OSxcbiAgICAgIDE2MyxcbiAgICAgIDE4MSxcbiAgICAgIDE0NyxcbiAgICAgIDE5NCxcbiAgICAgIDE5NCxcbiAgICAgIDI0NyxcbiAgICAgIDE1NixcbiAgICAgIDE4MCxcbiAgICAgIDM1LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4yWDI2SlJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODE2Nzk0NDA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyNjA2NDYxNTEzNzM3OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syTTRkOEZFSWJrKzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienRhbE1WbUlWbFR0RXVWWmtIRGpPMzFTdElHbVZmZUEvc2RuUlFNYUluaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxYm5WTXBjUUwya1BsbVhFQU53TktjdWZ6THZpeERndDZyR2lhWERqSnhyZEpqNFV0K3VRVDJEbytONXdmZXMrTER2VHR0YUw4ZU5aUGxWL0xKRFpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsbXRCMHcrTU9iMzRXRGNxUVc0Z1FuNlg5WG4wVUZubVh6dXNjbExLOXRBMlVWOWtBYUl6UWUzNk1PRXhzTzBTV2FKdGw4MFkzdDNxU2VyTkhOdDFCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODE2Nzk0NDA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjkyNjgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXBhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcGEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYaGhHNkRNN3lnL3hIZ0tOS2ljdTI3ZDY5K25mUzE5bGh0YVZyK2lQcmYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDI5OTc1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY5MjY4MzA3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "`ᗰᖇ ᗞᝪᖇᗴᗰᝪᑎ`🦋",
  packname: process.env.PACK_NAME || "`ᗰᖇ ᗞᝪᖇᗴᗰᝪᑎ`🦋",
  botname : process.env.BOT_NAME  || "`ᗰᖇ ᗞᝪᖇᗴᗰᝪᑎ`🦋",
  ownername:process.env.OWNER_NAME|| "`ᗰᖇ ᗞᝪᖇᗴᗰᝪᑎ`🦋",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
