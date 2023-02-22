let input = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("adicionar");
let main = document.getElementById("areaLista")

function addTarefa() {
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
        main.innerHTML += novoItem
    }
    
    
}








//Data Atualizada Diariamente
const d = new Date();
document.getElementById("diabrabo").innerHTML = d.getDate();


const months = [" Janeiro", " Fevereiro", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

const m = new Date();
let month = months[m.getMonth()];

document.getElementById("mesbrabo").innerHTML = month;