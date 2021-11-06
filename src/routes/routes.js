// Importa o método router do express
const router = require('express').Router()

// Importa o controller de contatos
const ContactController = require('../controllers/contact')

// rota '/'
router.get('/', (req, res) => {
    ContactController.listContacts(res)
})

// rota '/form'
router.get('/form', (req, res) => {
    ContactController.register(res)
})

// rota interna '/add'
// Atentar que para recebimento de dados de formulário usamos o post
router.post('/form/add', (req, res) => {
    ContactController.add(req, res)
})

// rota interna '/remove'
// Atentar que temos que indicar que vamos receber o id
router.get('/remove/:id', (req, res) => {
    ContactController.remove(req, res)
})

// rota '/index' para receber o redirecionamento do remove
router.get('/index', (req, res) => {
    ContactController.listContacts(res)
})

// rota '/edit-form' 
router.get('/edit-form/:id', (req, res) => {
    ContactController.indexUpdate(req, res)
})

// rota interna '/form/update'
// Atentar que para recebimento de dados de formulário usamos o post
router.post('/form/update/:id', (req, res) => {
    ContactController.update(req, res)
})

// Exportamos o router para que seja usado em server.js
module.exports = router

