const task = document.getElementById('task')
const btnTask = document.getElementById('btnTask')
const cardFooter= document.getElementById('card-footer')


btnTask.addEventListener('click', () =>{

    addTask(task.value)
} )

function addTask(t){
    let id = t
    let icon = document.createElement('input')
    icon.setAttribute('type', 'checkbox')
    icon.setAttribute('id', `${id}`)
    
    let tas = document.createElement('label')
    tas.setAttribute('for', `${id}`)


    tas.innerText=t
    cardFooter.appendChild(tas)
    cardFooter.append(icon)

    
}