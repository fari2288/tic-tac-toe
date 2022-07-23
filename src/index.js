
let cell1=document.querySelector('#cell1');
let cell2=document.querySelector('#cell2');
let cell3=document.querySelector('#cell3');
let cell4=document.querySelector('#cell4');
let cell5=document.querySelector('#cell5');
let cell6=document.querySelector('#cell6');
let cell7=document.querySelector('#cell7');
let cell8=document.querySelector('#cell8');
let cell9=document.querySelector('#cell9');
let cell10=document.querySelector('#cell10');
let cell11=document.querySelector('#cell11');
let cell12=document.querySelector('#cell12');
let cell13=document.querySelector('#cell13');
let cell14=document.querySelector('#cell14');
let cell15=document.querySelector('#cell15');
let cell16=document.querySelector('#cell16');
let cell17=document.querySelector('#cell17');
let cell18=document.querySelector('#cell18');
let cell19=document.querySelector('#cell19');
let cell20=document.querySelector('#cell20');
let cell21=document.querySelector('#cell21');
let cell22=document.querySelector('#cell22');
let cell23=document.querySelector('#cell23');
let cell24=document.querySelector('#cell24');
let cell25=document.querySelector('#cell25');

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
    
if (cell1.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell10.innerHTML='o';
}
if (cell2.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell9.innerHTML='o';
}
if (cell3.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell15.innerHTML='o';
}
if (cell4.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell6.innerHTML='o';
}
if (cell5.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell22.innerHTML='o';
}
if (cell6.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell2.innerHTML='o';
}
if (cell7.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell21.innerHTML='o';
}
if (cell8.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell18.innerHTML='o';
}
if (cell9.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell12.innerHTML='o';
}
if (cell10.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell13.innerHTML='o';
}
if (cell11.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell8.innerHTML='o';
}
if (cell12.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell6.innerHTML='o';
}
if (cell13.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell7.innerHTML='o';
}
if (cell14.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell1.innerHTML='o';
}
if (cell15.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell14.innerHTML='o';
}
if (cell16.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell4.innerHTML='o';
}
if (cell17.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell11.innerHTML='o';
}
if (cell18.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell3.innerHTML='o';
}
if (cell19.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell5.innerHTML='o';
}
if (cell20.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell9.innerHTML='o';
}
if (cell21.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell17.innerHTML='o';
}
if (cell22.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell25.innerHTML='o';
}
if (cell23.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell24.innerHTML='o';
}
if (cell24.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell23.innerHTML='o';
}
if (cell25.innerHTML==player){
    document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    cell20.innerHTML='o';
}
showResult()
}




// const result=document.querySelector('#result');
// result.addEventListener('click', showResult)
function showResult(){
    
// const array=[
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// // ]
//     for (let i=0;i<array.length;i++){
//     if (cell[array[i][0]].innerHTML=='x' && cell[array[i][1]].innerHTML=='x' && cell[array[i][2]].innerHTML=='x'){
//         alert('крестики победили');
//         refreshPage()
//     } else if(cell[array[i][0]].innerHTML=='o' && cell[array[i][1]].innerHTML=='o' && cell[array[i][2]].innerHTML=='o'){
//         alert('нолики победили');
//         refreshPage()
//     }
//     else if
//         (cell[array[i][0]].innerHTML=='o' && cell[array[i][1]].innerHTML=='x' && cell[array[i][2]].innerHTML=='o')
    
//     {alert('ничья')}
    
    
}

