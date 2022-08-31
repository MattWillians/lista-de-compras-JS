//LISTA DE COMPRAS VAZIA!
var frutas = [] ;
var laticinios = [] ;
var congelados = [] ;
var doces = [] ;

//Função dedicada ao INICIO DO CADASTRO DE ITENS!
function iniciarCadastro(){
    while (true){

        const novosItens = prompt("Adicionar mais itens? SIM - 1 | NÃO - 2");

        if (novosItens == 1){
            
            const oqueCadastrar = prompt("Cadastrar: FRUTAS-1 | CONGELADOS-2 | DOCES-3 | LATICÍNEO-4");
        
            if (oqueCadastrar == 1){
        
                let adicionarFruta = prompt("Qual a FRUTA a ser cadastrada?");
        
                frutas.push(adicionarFruta);
                alert(`a fruta ${adicionarFruta} foi cadastrada com sucesso!`);
                continue;
    
            } else if (oqueCadastrar == 2){
        
                let adicionarCongelados = prompt("Qual o CONGELADO a ser cadastrado?");
        
                congelados.push(adicionarCongelados);
                alert(`o congelado ${adicionarCongelados} foi cadastrado com sucesso!`);
                continue;
    
            } else if (oqueCadastrar == 3){
        
                let adicionarDoces = prompt("Qual o DOCE a ser cadastrado?");
        
                doces.push(adicionarDoces);
                alert(`o doce ${adicionarDoces} foi cadastrado com sucesso!`);
                continue;
    
            } else if (oqueCadastrar == 4){
        
                let adicionarLaticinios = prompt("Qual o LATICÍNEO a ser cadastrado?");
        
                laticinios.push(adicionarLaticinios);
                alert(`o laticínio ${adicionarLaticinios} foi cadastrado com sucesso!`);
                continue;
    
            } else {
                alert("Opção inválida");
                continue;
            }
        } else if (novosItens == 2){
            break;
        } else {
            alert("Digite uma opção valida!");
        }
    }
}

function removerItens(){
    while (true){

        const iniciarRemocao = prompt("Deseja remover algum item? 1 - Sim | 2 - Não")

        if (iniciarRemocao == 1){

            console.log("Listas: 1-FRUTAS, 2-LATICINEOS, 3-CONGELADOS E 4-DOCES")
            const listaDesejada = prompt("Qual lista vamos editar?")

            if (listaDesejada == 1){

                console.log(`Frutas: ${frutas}`)
                let removerItem = prompt("Qual item vamos remover?")
                frutas.splice(frutas.indexOf(removerItem), 1)
                continue
                
            } else if (listaDesejada == 2){

                console.log(`Laticineos: ${laticinios}`)
                let removerItem = prompt("Qual item vamos remover?")
                laticinios.splice(laticinios.indexOf(removerItem), 1)
                continue

            } else if (listaDesejada == 3){

                console.log(`Congelados: ${congelados}`)
                let removerItem = prompt("Qual item vamos remover?")
                congelados.splice(congelados.indexOf(removerItem), 1)
                continue

            } else if (listaDesejada == 4){

                console.log(`Doces: ${doces}`)
                let removerItem = prompt("Qual item vamos remover?")
                doces.splice(doces.indexOf(removerItem), 1)
                continue

            } else {

                alert("Digite uma opção existente")
                continue
            }
        } else if (iniciarRemocao == 2){

            alert("Remoção finalizada")
            break

        } else {

            alert("Opção inexistente")
            continue
        }
    }
}

//Função dedicada a SAIDA DO APLICATIVO E AMOSTRAGEM DO MENU
function sairDoAplicativo(){
    
    alert("Obrigado por fazer uso do nosso sistema!");

    console.log("Lista de compras");
    console.log(`Frutas: ${frutas}`);
    console.log(`Laticínios: ${laticinios}`);
    console.log(`Congelados: ${congelados}`);
    console.log(`Doces: ${doces}`);
    
    alert("Visite o CONSOLE para obter sua Lista de Compras!");
}

//MENU INICIAL + EXECUÇÃO DO CODIGO
alert("Bem vindo(a) a Lista de Compras do Matt");
while (true){
    
    //INICIO DO LAÇO!
    const iniciarApp = prompt("Para Cadastrar, digite 1 | Para editar a lista, digite 2 | Encerrar, 3");

    //Inicio do Aplicativo!
    if (iniciarApp == 1){
        
        iniciarCadastro();
        continue;

    } else if (iniciarApp == 2){
        
        removerItens();
        continue;

    } else if (iniciarApp == 3) {
        
        sairDoAplicativo();
        break;

    } else {

        alert("Digite uma opção existente")
        continue;

    }

}
