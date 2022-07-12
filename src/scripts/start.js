const button=document.querySelector('#button');

button.addEventListener('click', ()=>{
document.querySelector('#startmessage').innerHTML=' ';
const startMessage= document.querySelector('#startmessage');
const newElement = document.createElement('div');
newElement.innerHTML='Начните игру';
startMessage.appendChild(newElement)
});


export default ()=>{}