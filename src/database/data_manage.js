const fs = require('fs') 
const path = require('path');

let id = 1

// função para abrir arquivos: 
function openData(){
    const contactPath = path.join(__dirname, '/contact.json')
    const dataJson = fs.readFileSync(contactPath)
    return dataJson
    return false    
}

// função para escrever e CREATE dado no arquivo: 
function writeData(name, company, phone, email){

    // Configuração do path
    const contactPath = path.join(__dirname, '/contact.json')
    const idPath = path.join(__dirname, '/id.json')

    // gerenciamento de id:
    const idJson = fs.readFileSync(idPath)
    const idString = JSON.parse(idJson)
    id = idString.length + 1
    idString.push(id)
    idToJson = JSON.stringify(idString)
    fs.writeFileSync(idPath, idToJson)

    const dataContactJson = openData(contactPath)

    if(!dataContactJson){
        console.log('Arquivo de dados não encontrado')
    } else {
        const dataContactToString = JSON.parse(dataContactJson)

        dataContactToString.push({
            id: id,
            name: name, 
            company: company, 
            phone: phone, 
            email: email
        })

        dataContactToJson = JSON.stringify(dataContactToString)

        fs.writeFileSync(contactPath, dataContactToJson)
    } 
}


// read: 
function read(){
    const dataRead = openData()
    const dataContactToString = JSON.parse(dataRead) 
    return dataContactToString
}

// delete
function remove(id){
    const dataRead = openData()
    const dataContactToString = JSON.parse(dataRead)
    for(let i = 0; i < dataContactToString.length; i++){
        if(dataContactToString[i].id == id){
            dataContactToString.splice(i, 1);
            dataContactToJson = JSON.stringify(dataContactToString)
            const contactPath = path.join(__dirname, '/contact.json')
            fs.writeFileSync(contactPath, dataContactToJson)
            break
        }
    }
}

// update
function update(id, name, company, phone, email){
    const dataContactJson = openData()
    const dataContactToString = JSON.parse(dataContactJson)

    for(let i = 0; i < dataContactToString.length; i++){
        if(dataContactToString[i].id == id){
            dataContactToString[i].name = name
            dataContactToString[i].company = company
            dataContactToString[i].phone = phone
            dataContactToString[i].email = email
            dataContactToJson = JSON.stringify(dataContactToString)
            const contactPath = path.join(__dirname, '/contact.json')
            fs.writeFileSync(contactPath, dataContactToJson)
            break
        }
    }
}

// função para buscar um contato nos arquivos: 
function searchData(id){
    const dataContactJson = openData()
    const dataContactToString = JSON.parse(dataContactJson)
    for(let i = 0; i < dataContactToString.length; i++){
        if(dataContactToString[i].id == id){
            return dataContactToString[i]
            break
        }
    }    
 }

// Exporta função
module.exports = {
   writeData,
   read,
   remove,
   update,
   searchData
}



