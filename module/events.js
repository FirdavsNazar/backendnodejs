const Event = require('events')

class Logger extends Event {
    log(a,b) {
        this.emit('calculate', a+b)
    }
} 

const logger = new Logger()

logger.on('calculate', date => {
    console.log(date);
    
})

logger.log(10,12)