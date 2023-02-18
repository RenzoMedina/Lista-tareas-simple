
const task = document.getElementById('task')
const btnTask = document.getElementById('btnTask')
const cardFooter= document.getElementById('card-footer')


btnTask.addEventListener('click', () =>{

    addTask(task.value)
} )

function addTask(t){
    let id = t
    const cardTask = document.createElement('div')
    cardTask.classList.add('cardTask')

    const icon = document.createElement('button')
    icon.classList.add('btnDelete')
    icon.setAttribute('id',`${id}`)
    icon.innerText="X"
    
    
    const tas = document.createElement('label')
    tas.setAttribute('for', `${id}`)
    
    
    tas.innerText=t
    cardTask.appendChild(tas)
    cardTask.appendChild(icon)
    
    cardFooter.appendChild(cardTask)
    
    deletTask(icon.getAttribute('id', `${id}`), cardTask)
}


//function delete de tarea
function deletTask(id, task){
    id = document.getElementById(id)
    id.addEventListener('click', ()=>{
        cardFooter.removeChild(task)
    })
}

