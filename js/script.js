function carregarLista() {
    document.getElementById("lista").innerHTML = '';
    fetch("../lista.json")
    .then((resp) => resp.json())
    .then((dados) => {
        let listAnimal = document.getElementById("lista");
        dados.map(function(item) {
            return listAnimal.innerHTML +=              
            `
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img class="rounded-3 shadow" src="${item.Imagem}" alt="${item.Nome}">
                    <table class="table text-center texto-tabela">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Detalhes</th>
                                <th scope="col">Localidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${item.Nome}</td>
                                <td>${item.Detalhes}</td>
                                <td>${item.Localidade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        });
    })
}

function carregarCachorros() {
    document.getElementById("lista").innerHTML = '';
    fetch("../lista.json")
    .then((resp) => resp.json())
    .then((dados) => {
        let listAnimal = document.getElementById("lista");
        x = dados.filter(n => n.Tipo == "Cachorro")
        x.map(function(item) {
            return  listAnimal.innerHTML +=  
            `
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img class="rounded-3 shadow" src="${item.Imagem}" alt="${item.Nome}">
                    <table class="table text-center texto-tabela">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Detalhes</th>
                                <th scope="col">Localidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${item.Nome}</td>
                                <td>${item.Detalhes}</td>
                                <td>${item.Localidade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        })
    })
}

function carregarGatos() {
    document.getElementById("lista").innerHTML = '';
    fetch("../lista.json")
    .then((resp) => resp.json())
    .then((dados) => {
        let listAnimal = document.getElementById("lista");
        x = dados.filter(n => n.Tipo == "Gato")
        x.map(function(item) {
            return  listAnimal.innerHTML +=   
            `
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img class="rounded-3 shadow" src="${item.Imagem}" alt="${item.Nome}">
                    <table class="table text-center texto-tabela">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Detalhes</th>
                                <th scope="col">Localidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${item.Nome}</td>
                                <td>${item.Detalhes}</td>
                                <td>${item.Localidade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        })
    })
}

function maiorNome() {
    let listAnimal = document.getElementById("lista");
    document.getElementById("lista").innerHTML = '';
    fetch("../lista.json")
    .then((resp) => resp.json())
    .then((dados) => {
        dados.map(function(item) {
            if(item.Nome.length > 9) {
                let sabia = {
                    nome: item.Nome,
                    idade: 15,
                    local: item.Localidade,
                    imagem: item.Imagem,
                    caracteristica: item.Detalhes,
                    compilado: function () {
                        return  listAnimal.innerHTML +=   
                            `
                                <div class="col-md-5 col-sm-12 mt-4">
                                    <img class="rounded-3 shadow" src="${this.imagem}" alt="${this.nome}">
                                </div>
                                <div class="col-md-7 col-sm-12">
                                    <h3 class="titulo azul">Você sabia ?</h3>                                
                                    <p>
                                        A <strong>${this.nome}</strong> é o nosso animalzinho que tem o maior nome para ser adotado, ela tem <strong>${this.idade}</strong> e está localizada em <strong>${this.local}</strong>.
                                        Por motivos de locomoção, a antiga dona teve que se desfazer de sua amiguinha.<br> É um animal <strong>${this.caracteristica}</strong>.<br>Se interessou pela <strong>${this.nome}</strong> ?<br>Entre em contado com: <br><strong>Matheus Lucas</strong><br><strong>Fone: 11 99999-9999</strong>
                                    </p>
                                </div>
                            `
                    } 
                }

                console.log(sabia.compilado())
            }
        })
        /*console.log(x[2].length)
        let nomeAnimal = document.getElementById("lista");
        nomeAnimal.innerHTML = `<p>Nome: ${x}</p>`*/
    })
}

