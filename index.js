require('dotenv').config();
const https = require('https')
const TOKEN = process.env.TOKEN;

const data = JSON.stringify({
  bot_id: "fcb598dbfaf4e85188c1938053",
  text: "Don't forget me."
})

const options = {
  hostname: 'https://api.groupme.com',
  path: '/v3/bots',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
