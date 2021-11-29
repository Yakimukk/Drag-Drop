const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    //console.log('drag start', event.target)
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend() {
    event.target.classList.remove('hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag e')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag l')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}