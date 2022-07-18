const reset=document.querySelector('#reset');

reset.addEventListener('click', refreshPage)

function refreshPage(){
    window.location.reload();
}

const button=document.querySelector('#button');

button.addEventListener('click', ()=>{
document.querySelector('#startmessage').innerHTML=' ';
const startMessage= document.querySelector('#startmessage');
const newElement = document.createElement('div');
newElement.innerHTML='Начните игру';
startMessage.appendChild(newElement)
});

let player ='x';



let cell = document.querySelectorAll('.cell');
for (let i=0;i<cell.length;i++){    
    cell[i].addEventListener('click', cellClick)
}


function cellClick(){
    if (!this.innerHTML){
    this.innerHTML=player
    }
    else{
        alert('ячейка занята')
    }
    player=player=='x'?'o':'x';
if (this.innerHTML=='x'){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
}
if (this.innerHTML=='o'){
    document.querySelector('#cross').style.backgroundColor='yellow';
    document.querySelector('#circle').style.backgroundColor='white';
}
let array=[];

let winner=[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[3, 5, 7]
]
    for(let i in cell){
        if(cell[i].innerHTML==player){
        array.push(parseInt(cell[i].getAttribute('pos')))}
    }
    console.log(array)

}
