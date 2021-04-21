const {response} = require ('express');
const {v4: uuid} = require ('uuid');

const express = require ('express');

const app = express();

const users = [];

//midleware - abastecimento.
app.use(express.json());
// function soma (a,b){
//     return a+b}
// app.get('/', (request, response) => {

//  response.send({ response: "olá mundo"})
// });

app.post('/user', (req, res) => {
    const {nome, email, cpf, telefone} = req.body;
    const userExist = users.some(
        (user) => user.cpf ===cpf
    );

    if (userExist){
        return  res.status(400).send({error: "Usuario exixtente"});
    }else {
        const user = {
            id: 'uuidv4()',
            nome,
            email,
            cpf,
            telefone
        }
        users.push(user)
            
        res.status(201).json(user);

    }
   
});

app.get('/user', (req, res) => {
    const {cfp} = req.params;
    return res.status(200).json(users);
})

app.get('/user/:cpf', (req, res) => {

    const {cfp} = req.params;
    const user = user.find((e) => e.cpf ===cpf);

    if(user) {
       return res.status(200).json(e)
    }else{
        return  res.status(400).send({error: "Usuario não encontrado"})
    }
    
});

app.put('/user/:id', (req, res) => {
    const {id} = req.params;
    const {nome, email,cpf,telefone} = req.body;
    const user = users.find((e) => e.id ===id);

    if(!user) {
        return  res.status(400).send({error: "Usuario não encontrado"});

    }else{
        user.nome = nome;
        user.email = email;
        user.cpf = cpf;
        user.telefone = telefone;

        return res.status(200).json(e);
    }

})

app.delete('/user/:id', (req, res) => {

    const {id} = req.params;
    const user = users.some((e) => e.id ===id);
    // se verdadeiro 
    if(user) {   // splice = oque apagar, qtos argumento para apagar =1
        users.splice(users.indexOf(id),1);
        return res.status(200).json(users);
    }else{
        return  res.status(400).send({error: "Erro ao apagar o usuário"})
    }
    
});

app.listen(3333);