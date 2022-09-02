class Processor {

    static Process(string) {

        let array = []
        let stringArray = string.trim().split("\r\n")
        for(let i = 0; i < stringArray.length; i++) {
            array.push(stringArray[i].split(","))
        }

        let header = array[0] // extraindo cabeçalho (primeiro elemento do array)
        array.shift()
        let body = array

        let content = {
            "header" : header,
            "body" : body 
        }

        return content

    }

}

module.exports = Processor