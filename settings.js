require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADwzA1sEnD+IUQQAAG0HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrmKUNVVizQK4oWL9615SEPEKAZMgoBT*vcp7OmZedid7eUpJKlzvvNd8g2QHDPkoQYY30BB8Q1y1C55UyBggGF5OCAKuiCBHAIDlF62ITttOwrnY*cczdl4yxTeF*Bq11lTIrJbJU+KsXJcmS*g0QVF+Zbh+A8Fe3d8mVzt3l3QdmpwCDp2co7jDXfzdHKC*E3d6cOIKkkuKS*g0VaEmGKS2sURXRCFmYcaH2L6OfjuDOVmfSxlEc50f9tRN3yRhvmem53DYuKMko14iedruJAGn4N*KYprZyIMT71mkm0v1X7fkS91v0ebzRxtal4upYA6aZaQwTt8hlOCEjdBhGPefJp3c66Xiyu83k7xfn19yypFcJIsF72eqUpUuYSVWoSWE4mX9HPAV2o0EifXeBR5mcbqkRLt2Xyow13Ho*KKZ5smtNZ62c+c4HfgPv3wyvn*8G6Oene9OdBQ88jCvSyQWCj0lYaatBLOfTNO9fltwrPCks6fg++bU2tv9hNKo*mx9g+ZFZ+SVXjNJn3XYXYn7JnTPhr0t0P2Cz7kJf0TyqDT08*symtXSe+ZJtX2WkLJzYz3o*lmnE5PE3XN9WtZ4LATUcu*R*uh6jbe2TLpgr9e1eim7uutGwcrZGqbqLK8wdF8eU50Ro2bAEN8dAFFKWacQo5z0u4pXQCTW4RiiviTXNA5DveC5tsan6p7ttDnQTmraiIdZNSMrSZ35uNa3SZk6e1eQBcUNI8RYyhxMOM5bWaIMZgiBoy*v3YBQTV*l61tJotdcMCU8RUpiyyHyYemH4cwjvOS8KghsdUuEAWG8GsbcY5JyloWSwJpfMQ3ZB0hZ8A4wIyhn*MhihJgcFqin5m18qSlXZlupO3A10EXXJ5y4AQYQBV0WdUVTRY0Qx78xb5UbVVYFF8I4qALsuctcSBpA7UvKMJAHqhie7M9ePwE2NZLEIc4Y8AA1syZnU5xIOfjQW3udmZkmp5ptqR9DPThi3fmTzGzT85yJmW2N10cSms6TDFfFTn0hL5mJvG5E57kgV0F6T8VAQaYVX7q6uKt2iz8uXbTg8AcVmy1uauFd0PZkAU4nbyGudvx4ujKlhYn6G25qKei8irbRUiYvx7ZYXl9HRNB3qE7tuTX4KXtlqAbjtHvzQRzZh+J+raKLf8W654566t6IpEp2h+XrjVZI7I5LqKzOKhmwd5JaEhmoeP3rFwUVunOQ2Gz4uVOGeuWR6ZoYJdOc6zeHftMTPbjpcJPN7VStb8HjJ7BJ7AV8D+le8fdGkx4dH8r8eMl+Zc0DnfydOjWwn1ehBa+Ey3F1c6law+OMV+UlbOd+Oed3hvObBc8Hl+7oMggP+T0AgwASUJznIAuoHnZOtYlh*wPzSxz5drp++AZZNz8lYIlviDG4aUAhqipiiRIsqy93*JpXjiQHYEByEUevrWObsyiiDjkH5kCZvtN6gA8vgNQSwECFAMUAAAICAA8MwNbBJw*iFEEAABtBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '50935947307',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
