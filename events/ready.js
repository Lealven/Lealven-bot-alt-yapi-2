const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'd!'
module.exports = client => {
  
  const aktiviteListesi = [
    `Açılın Lealven Botuna Kavuştu`
  ]

  client.user.setStatus('ONLİNE - İDLE - DND')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}