function randomcolor(){
    let red=Math.floor(Math.random()*255)   
    let green=Math.floor(Math.random()*255)  
    let blue=Math.floor(Math.random()*255)  
    let color=(`rgb(${red},${green},${blue})`)
    return color
}

ran=document.querySelector('button')
ran.addEventListener('click',function(){
    let h1=document.querySelector('h1')
    h1.innerText=randomcolor()
    let co=document.querySelector('div')
co.style.backgroundColor=randomcolor()
})
