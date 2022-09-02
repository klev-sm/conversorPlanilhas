const ejs = require("ejs")

class HtmlParser {

    static async Parser(data) {
        let html = await ejs.renderFile("./files/prototype.ejs", {
            tableHeader: data.header,
            tableBody: data.body
        })
        return html
    }


}

module.exports = HtmlParser