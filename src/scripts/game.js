const cell1=document.querySelector('#cell1');
const cell2=document.querySelector('#cell2');
const cell3=document.querySelector('#cell3');
const cell4=document.querySelector('#cell4');
const cell5=document.querySelector('#cell5');
const cell6=document.querySelector('#cell6');
const cell7=document.querySelector('#cell7');
const cell8=document.querySelector('#cell8');
const cell9=document.querySelector('#cell9');

const result=document.querySelector('#result')

result.addEventListener('click', ()=>{
    

if (cell1.innerHTML=='X'&&
cell2.innerHTML=='X'&&
cell3.innerHTML=='X'){
    alert('Вы победили')
}
if (cell1.innerHTML=='X'&&
cell5.innerHTML=='X'&&
cell9.innerHTML=='X'){
    alert('Вы победили')
}
if (cell3.innerHTML=='X'&&
cell5.innerHTML=='X'&&
cell8.innerHTML=='X'){
    alert('Вы победили')
}
if (cell4.innerHTML=='X'&&
cell5.innerHTML=='X'&&
cell6.innerHTML=='X'){
    alert('Вы победили')
}
if (cell7.innerHTML=='X'&&
cell8.innerHTML=='X'&&
cell9.innerHTML=='X'){
    alert('Вы победили')
}
if (cell3.innerHTML=='X'&&
cell5.innerHTML=='X'&&
cell7.innerHTML=='X'){
    alert('Вы победили')
}
if (cell1.innerHTML=='X'&&
cell4.innerHTML=='X'&&
cell7.innerHTML=='X'){
    alert('Вы победили')
}
if (cell2.innerHTML=='X'&&
cell5.innerHTML=='X'&&
cell8.innerHTML=='X'){
    alert('Вы победили')
}
if (cell3.innerHTML=='X'&&
cell6.innerHTML=='X'&&
cell9.innerHTML=='X'){
    alert('Вы победили')
}
})

export default ()=>{}