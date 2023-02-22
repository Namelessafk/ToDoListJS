let input = document.getElementById("inputTarefa"); //Separa a variavel para o valor do input
let btnAdd = document.getElementById("adicionar"); //Registra o botão de adicionar.
let main = document.getElementById("areaLista") //Separa a variavel da area onde sera colocada no html

function addTarefa() {
    //Pega o Valor Digitado no Input
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `
        <div class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>
        `;
        // Adicionar Item na main
        main.innerHTML += novoItem;

        //Zerar o Campo de input
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
        }
    }
)




//Data Atualizada Diariamente
const d = new Date();
document.getElementById("diabrabo").innerHTML = d.getDate();


const months = [" Janeiro", " Fevereiro", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

const m = new Date();
let month = months[m.getMonth()];

document.getElementById("mesbrabo").innerHTML = month;