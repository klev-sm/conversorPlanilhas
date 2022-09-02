const Reader = require("./helpers/Reader")
const Processor = require("./helpers/Processor")
const HtmlParser = require("./helpers/HtmlParser")
const Writer = require("./helpers/Writer")

async function main() {

    let reader = new Reader()
    let writer = new Writer()

    // lendo arquivo localizado na pasta files
    let dadosLidos = await reader.Read("./files/users.csv")
    // transformando string em array de arrays, depois separando cabecalho do corpo
    let process = Processor.Process(dadosLidos)
    // gerando modelo html
    let htmlParser = await HtmlParser.Parser(process)
    // gerando arquivo
    let file = await writer.Write(Date.now() + ".html", htmlParser)

    console.log(file)

}

main()