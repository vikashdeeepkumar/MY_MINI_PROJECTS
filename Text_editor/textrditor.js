input=document.querySelector('input')
input.addEventListener('input',function(){
    let a=input.value
    let para=document.querySelector('p')
    para.innerText=a
})