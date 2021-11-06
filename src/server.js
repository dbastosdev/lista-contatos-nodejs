// Importação de módulos externos
const express = require('express')
const path = require('path');

// Módulos criados no projeto:
// Importando rotas
const routes = require('./routes/routes.js')

// Instância do express
const app = express()

// Configuração de arquivos públicos e estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public'))) 

// Permite decodificar informações de formulários
app.use(express.urlencoded({extended: true}))

//Definindo as rotas
app.use('/', routes)

// Resposta padrão para rota não definida
app.use((req, res)=>{
    res.send("Página não encontrada! 404")
})

// Levantando o servidor 
const port = process.env.PORT || 8082
app.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`))