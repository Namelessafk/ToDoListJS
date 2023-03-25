let input = document.getElementById("inputTarefa"); //Separa a variavel para o valor do input
let btnAdd = document.getElementById("adicionar"); //Registra o botão de adicionar.
let main = document.querySelector("#areaLista"); //Separa a variavel da area onde sera colocada no html

let mainInput = document.querySelector("#main-input");

let toolBar = document.querySelector("#toolbar"); // Barra de ferramentas embaixo do input

// Variaveis usadas na parte de Editar
let editBack = document.querySelector("#cancel-edit-back"); // Seta de voltar da tela de edição
let editForm = document.querySelector('#editform'); // "Formulario" de edição
let editTitle = document.querySelector("#edit-title"); // Titulo do Formulario de edição
var input_edit = document.querySelector("#input-edit"); // Valor que esta armazenado no input da tela de editar

let oldInputValue; // Armazenar antigo valor que será editado.

function uptadeInput(text){

    let item = document.querySelector(".item")

    let items = document.querySelectorAll(".item");

    items.forEach((item) => {

    let item_input = item.querySelector(".item-nome");

        if(item_input.textContent.trim() === oldInputValue){
            item_input.textContent = text;
        }

    })
};

let itemcounter = 0; //Contador que vai servir para armazenar o id da classe "item".

// INICIO - Evento Adicionar Tarefas

//Função de Adicionar Tarefas
function addTarefa() {
    
    //Pega o Valor Digitado no Input
    valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){ //Verificão do valor input para caso NÃO seja vazio, nulo ou indefinido

        ++itemcounter;
        let novoItem = `
        <div class="item" id="${itemcounter}">
            <div class="item-icone">
                <i onclick="finished(${itemcounter})" id="icone_${itemcounter}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="editar(${itemcounter})" class="edit">
                <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button onclick="deletar(${itemcounter})" class="delete">
                <i class="mdi mdi-delete"></i>
                </button>
            </div>
        </div>
        `;


        // Adicionar Item na main
        main.innerHTML += novoItem;

        //Zerar o Campo de input
        input.value = "";
        input.focus();

        

        

    }
};

// FIM - Evento Adicionar Tarefas

// Função de deletar a tarefa
function deletar(id){
    var item = document.getElementById(id);
    item.style.opacity = 0;
    setTimeout(function() {
        item.remove(); // remove o elemento após 500ms (tempo da transição)
      }, 500);
}

// INICIO - Evento para finalizar tarefa

// Função para marcar como Concluido

function finished(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    var icone = document.getElementById('icone_'+ id)

    if(classe=="item"){
        item.classList.toggle('concluido');

        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

    }else{
        item.classList.toggle('concluido');

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }

}

// FIM - Evento para finalizar tarefa

// INICIO - Evento de Editar

// Função para o botão editar 
function switchCard(){
    mainInput.classList.toggle('hidden');
    editForm.classList.toggle('hidden');
    editBack.classList.toggle('hidden');
    toolBar.classList.toggle('hidden');
    editTitle.classList.toggle('hidden');
    main.classList.toggle('hidden');
}
// Botão de Editar a tarefa
function editar(id){

    
    var item = document.getElementById(id); // Pega a div inteira do separado pelo id do item por ser unico.

    let item_input = item.querySelector(".item-nome").textContent.trim(); //pega o valor da div com classe item-nome de dentro da div ITEM
    
    let edit = document.querySelector(".edit"); // Classe do botão de editar na tarefa

    if(edit.classList.contains("edit") || (item.classList.contains("mdi-pencil-outline"))){
        switchCard();
        
        input_edit.value = item_input;
        oldInputValue = item_input;

        
    }

}

//Evento no botão da seta para "voltar"

editBack.addEventListener("click", (e) => {
    e.preventDefault();
    switchCard();
    

})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const editInputValue = input_edit.value;

    if(editInputValue){
        // Atualizar
        uptadeInput(editInputValue);
    }

    switchCard();
        
})

// FIM - Evento Editar

//Evento para que o botão ENTER seja reconhecido na hora de adicionar uma tarefa
input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
        }
    }
)


// INICIO - Evento pesquisar pela tarefa

const formSearch = document.querySelector("#form-search")

// adicione um evento de escuta para o evento 'submit' do formulário
formSearch.addEventListener('submit', (event) => {
    // previna o comportamento padrão do evento
    event.preventDefault();
    // obtenha o valor da caixa de busca
    const inputSearch = document.querySelector('#input-search').value.trim();
    // faça a busca usando a função 'buscar'
    const resultadoBusca = buscar(inputSearch);
    // faça algo com o resultado da busca (exemplo: exiba-o em um alerta)
    console.log(resultadoBusca);
});

function buscar(id) {

    let items =  Array.from(document.querySelectorAll(".item"));

    let inputSearch = document.querySelector("#input-search").value.trim();
    
    return items.filter((item) =>{
        let itemName = item.querySelector(".item-nome").textContent.trim();
        return itemName === inputSearch;
    });
}



// Fim - Evento pesquisar pela tarefa

// INICIO - Evento da marcação de datas

//Data Atualizada Diariamente
const d = new Date();
document.getElementById("dia").innerHTML = d.getDate()+" de";


const months = [" Janeiro", " Fevereiro", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

const m = new Date();
let month = months[m.getMonth()];

document.getElementById("mes").innerHTML = month;

// FIM - Evento da marcação de datas