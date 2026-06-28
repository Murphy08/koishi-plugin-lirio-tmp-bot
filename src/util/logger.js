const { Logger } = require('koishi')

const globalKey = '__lirioTmpBotLogger'

if (!globalThis[globalKey]) {
  globalThis[globalKey] = new Logger('lirio-tmp-bot')
}

if (!globalThis.logger) {
  globalThis.logger = globalThis[globalKey]
}

module.exports = globalThis[globalKey]
