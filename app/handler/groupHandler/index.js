const { EVENT_TYPE } = require('../../data/messagingAPI/eventType')
const joinHandler = require('./joinHandler')

module.exports = (event) => {
  const eventType = event.type;
  switch (eventType) {
    case EVENT_TYPE.JOIN: 
    return joinHandler(event)
  }
}