const fs = require("fs")
const util = require("util")

class Writer {

    constructor() {
        this.writeFile = util.promisify(fs.writeFile)
    }

    async Write(filename, data) {
        await this.writeFile(`./files/${filename}`, data)
        try {
            return "Arquivo salvo com sucesso."
        } catch(e) {
            return e
        }
    }


}

module.exports = Writer