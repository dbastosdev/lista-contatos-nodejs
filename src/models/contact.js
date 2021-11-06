// Importa controlador de 'banco de dados'
const dataModel = require('../database/data_manage') 

// Classe model de contatos
class ContactModel {
    list(){
        return dataModel.read()
    }

    create(name, company, phone, email){
        dataModel.writeData(name, company, phone, email)
    }

    remove(id){
        dataModel.remove(id)
    }

    update(id, name, company, phone, email){
        dataModel.update(id, name, company, phone, email)
    }

    searchData(id){
        // muita atenção. Não é porque a função do data_manage retorna um valor que aqui tambpem não deve retornar.
        // Idem ao item de listar
        return dataModel.searchData(id)
    }

}

// Exporta o model como uma instância 
module.exports = new ContactModel



