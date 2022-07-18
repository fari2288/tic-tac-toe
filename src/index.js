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
}


const result=document.querySelector('#result');
result.addEventListener('click', showResult)
function showResult(){
    
const array=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
    for (let i=0;i<array.length;i++){
    if (cell[array[i][0]].innerHTML=='x' && cell[array[i][1]].innerHTML=='x' && cell[array[i][2]].innerHTML=='x'){
        alert('крестики победили')
    } else if(cell[array[i][0]].innerHTML=='o' && cell[array[i][1]].innerHTML=='o' && cell[array[i][2]].innerHTML=='o'){
        alert('нолики победили')
    }
    
    
}
}