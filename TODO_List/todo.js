
btn=document.querySelector('button')
btn.addEventListener('click',function(){
    let inp=document.querySelector('input')
    data=inp.value
    inp.value=''
    console.log(data)
    let element=document.createElement('li')
    element.innerText=data
    console.dir(element)
    let ul=document.querySelector('ul')
    ul.appendChild(element)
    let deletbtn=document.createElement('button')
    deletbtn.classList='remove'
    deletbtn.innerText='delet'
    element.appendChild(deletbtn)
    remove=document.querySelectorAll('.remove')
    for (remove of remove){
        remove.addEventListener('click',function(){
            let par=this.parentElement
            par.remove()
    })
}
})
