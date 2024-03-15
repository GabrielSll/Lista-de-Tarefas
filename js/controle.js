let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;
         
        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
                <i id="delete" class="mdi mdi-delete"></i>
            </button>
        </div>
      </div>`;

        //adicionar novo item no main
        main.innerHTML += novoItem

        //zerar os campos de input
        input.value = "";
        input.focus();
        
    }

}

//Função para Deletar um item
function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

//Função para marcar tarefa como FEITA
function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');
    
    if (classe=="item") {
        item.classList.add('clicado')
        let icone = document.getElementById('icone_'+ id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle-outline')   
        
        item.parentNode.appendChild(item)
        
    } else {
        item.classList.remove('clicado')
        let icone = document.getElementById('icone_'+ id)
        icone.classList.remove('mdi-check-circle-outline')
        icone.classList.add('mdi-circle-outline')  

    }
}

//Função para ativar o botão ADICIONAR
input.addEventListener("keydown", (e) => {
    //SE TECLOU ENTER
    if (e.key === "Enter") {
        btnAdd.click();
    }
})