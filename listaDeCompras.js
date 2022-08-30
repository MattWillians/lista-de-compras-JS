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
while (true){
    
    //INICIO DO LAÇO!
    alert("Bem vindo(a) a Lista de Compras do Matt");
    const iniciarApp = prompt("Para Cadastrar, digite 1 | Para encerrar e receber sua lista, digite 2");

    //Inicio do Aplicativo!
    if (iniciarApp == 1){
        
        iniciarCadastro();
        continue;

    } else if (iniciarApp == 2){
        
        sairDoAplicativo();
        break;

    } else {
        
        alert("Por favor, digite uma opção disponivel!");
        continue;

    }

}