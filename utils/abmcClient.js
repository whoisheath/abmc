import mqtt from 'mqtt'

function abmcMQTT(uri, options) {
  abmcMQTT.client = mqtt.connect(uri, options)

  abmcMQTT.client.on('connect', () => {
    console.log('connection successful')
  })

  abmcMQTT.client.on('message', (topic, message) => {
    console.log(`Message: ${message.toString()} \n Topic: ${topic}`)
  })
}

export default abmcMQTT
