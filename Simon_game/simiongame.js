let gameseq=[]
let userseq=[]

stater=false

let level=0
h2=document.querySelector('h2')
document.addEventListener('keypress',function(){
    if(stater==false){
        console.log('game started ')
        stater= true
        levelup()
        cheakans()
        
    }
})

function levelup(){
    level=level+1
    h2.innerText=`Level  ${level}`
    flash()
}
function flash(){
    let randomindex=Math.floor(Math.random()*4)
    console.log(randomindex)
    let btn=['yellow','red','purpule','green']
    random_color=btn[randomindex]
    random_button=document.querySelector(`.${random_color}`)
    random_button.classList.add('flash')
    setTimeout(function(){
        random_button.classList.remove('flash')
        },300)
    gameseq.push(random_color)
    console.log(gameseq)
}



btn_click=document.querySelectorAll('.card')
for(btn_click of btn_click){

    btn_click.addEventListener('click',userflash)
}
function flash2(event){
    event.classList.add('flashgreen')
    setTimeout(function(){
        event.classList.remove('flashgreen')
    },300)


}
function userflash(){
    console.log(this)
    flash2(this)
    this1=this
    ids=this1.getAttribute('id')
    userseq.push(ids)
    console.log(userseq)
    cheakans()
}

function cheakans(){
    let index=levelup-1
    if(gameseq[index]===userseq[index]){
        console.log()
        if(gameseq.length==userseq.length){
            levelup()
        }
    }else
    console.log('game over')
}