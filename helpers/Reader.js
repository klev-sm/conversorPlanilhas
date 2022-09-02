const fs = require("fs")
const util = require("util")

class Reader {

    constructor() {
        this.readFile = util.promisify(fs.readFile)
    }

    async Read(file) {
        let data = await this.readFile(file, "utf8")
        try {
            return data
        } catch (e){
            return e
        }
    }

}

module.exports = Reader