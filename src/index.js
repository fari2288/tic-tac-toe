
const message = document.querySelector('#message');
const div = document.createElement('div');

let cross=`<i class="fa-solid fa-xmark"></i>`;
let circle=`<i class="fa-solid fa-o"></i>`
let cells=document.querySelectorAll('#cell');
for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click', click)
}
const reset = document.querySelector('#reset');
reset.addEventListener('click', refreshPage)

function refreshPage() {
    window.location.reload();
}

function click(){
if(this.innerHTML==''){
    this.innerHTML=cross;
}
else {
    alert('ячейка занята')
}

cross = cross == `<i class="fa-solid fa-xmark"></i>` ? `<i class="fa-solid fa-o"></i>` : `<i class="fa-solid fa-xmark"></i>`;
changeColor();
result();
}


function changeColor(){
    if (this.innerHTML == cross) {
    document.querySelector('#circle').style.backgroundColor = 'pink';
    document.querySelector('#cross').style.backgroundColor = 'white';
} 
if (this.innerHTML == circle) {
    document.querySelector('#circle').style.backgroundColor = 'white';
    document.querySelector('#cross').style.backgroundColor = 'yellow';
}
}


function result(){
    
let array=[
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
]

for(let i=0;i<array.length;i++){
    if (cells[array[i][0]].innerHTML===cross && cells[array[i][1]].innerHTML===cross && cells[array[i][2]].innerHTML===cross && cells[array[i][3]].innerHTML===cross && cells[array[i][4]].innerHTML===cross)
        {
        message.appendChild(div);
        div.innerHTML = ` крестики победили`;
        document.querySelector('#message').style.zIndex = "1";
    }
    
    else if (cells[array[i][0]].innerHTML===circle && cells[array[i][1]].innerHTML===circle && cells[array[i][2]].innerHTML===circle && cells[array[i][3]].innerHTML===circle && cells[array[i][4]].innerHTML===circle)
        {
            
        message.appendChild(div);
                div.innerHTML = `нолики победили`;
                document.querySelector('#message').style.zIndex = "1";
    }

}}
