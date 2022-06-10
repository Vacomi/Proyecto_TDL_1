const $btn   = document.getElementById('form__button');
const $input = document.getElementById('form__input');
const $lista = document.getElementById('task-list');

let idCounter = 0;

//

const addTask = () => {
    idCounter++;

    let valorInput = $input.value;

    $lista.innerHTML += `
    <div class="task-list__task-container" id="${idCounter}">
        <label for="" class=task-list__task-info>
            <input type="checkbox">
            ${valorInput}
        </label>
        <img src="img/trash-bin.png" class="task-list__delete-button">
    </div>`
    $input.value = '';
    $input.autofocus;

    updateStats();
}


const updateStats = () => {
    let elementos = $lista.querySelectorAll('div');
    let checkbox  = $lista.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = ` <p>Tareas: ${elementos.length} Completadas: ${checkbox.length}.</p> `
}


const deleteTask = (id) => {
    let tareadeleted = document.getElementById(id)
    $lista.removeChild(tareadeleted);
    updateStats()

}

    $btn.addEventListener('click', ( e) => {
        e.preventDefault();
        // console.log('Haz presionado el Input');
        addTask();
    })

    $lista.addEventListener('click', (e) => {
        if( e.target.nodeName == 'INPUT') {
            updateStats()
        } else if( e.target.nodeName == 'IMG' ) {
            deleteTask(e.target.parentElement.id)
        }
  
    })


    
