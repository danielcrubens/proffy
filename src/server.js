function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    return res.render("study.html")
}
function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

/* CONFIGURAR NUNJUCKS */
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
    /* CONFIGURAR ARQUIVOS ESTÁTICOS (CSS,SCRIPTS,IMAGENS) */
    .use(express.static("public"))
    /* ROTAS DA APLICAÇÃO */
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)