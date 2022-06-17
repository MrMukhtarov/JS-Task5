let btn = document.getElementById('btn')

btn.onclick = function() {

    let input = document.getElementById('input').value
    let div = document.createElement('div')
    let h1 = document.createElement('h1')

    document.body.appendChild(div)
    div.appendChild(h1)
    h1.innerHTML = input
    div.setAttribute('class','div')

    let i = document.createElement('i')
    div.appendChild(i)
    i.setAttribute('class','fa-solid fa-trash-can')

    i.onclick = function() {
        i.parentElement.remove()
    }
}
//TASK-2
  window.addEventListener('contextmenu',function(e){
    e.preventDefault()
  })


  