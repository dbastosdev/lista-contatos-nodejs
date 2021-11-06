const Contact = require('../models/contact')

// Classe model de contatos
function listContacts(res){
    const read = Contact.list()
    res.render('index', {read})
}

function register(res){
    res.render('form')
}

function add(req, res){
    // Desestruturando dados recebidos via post
    const {
        name, 
        company,
        phone,
        email
    } = req.body

    // Envia comando para escrita no database com os dados recebidos pelo formulário e desestruturados
    Contact.create(name, company, phone, email)

    res.render('form', {
        message: 'Cadastro realizado com sucesso',
    }) 
}

function remove(req, res){
    // Desestruturando os dados recebidos de id
    const {id} = req.params
    Contact.remove(id)
    res.redirect('/index')
}

// A edição é feita em duas etapas. Primeiro renderizamos o formulário de edição dos dados
// Depois atualizamos as informações

// Renderização do formulário de edição
function indexUpdate(req, res){
    const {id} = req.params
    const contact = Contact.searchData(id) 
    res.render('edit-form', {contact})
}

function update(req, res){
    // Desestruturando dados do formulário
    const {
        name, 
        company,
        phone,
        email
    } = req.body
    //desestruturando dados do id
    const {id} = req.params
    // Envia comando para escrita no database com os dados recebidos pelo formulário e desestruturados
    Contact.update(id, name, company, phone, email)

    // retorna a página inicial
    res.redirect('/index') 
}


module.exports = {
    listContacts,
    register,
    add,
    remove,
    indexUpdate,
    update,
}

/* teste

listContacts()
*/




