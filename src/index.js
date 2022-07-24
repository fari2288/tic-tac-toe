let cell1 = document.querySelector('#cell1');
let cell2 = document.querySelector('#cell2');
let cell3 = document.querySelector('#cell3');
let cell4 = document.querySelector('#cell4');
let cell5 = document.querySelector('#cell5');
let cell6 = document.querySelector('#cell6');
let cell7 = document.querySelector('#cell7');
let cell8 = document.querySelector('#cell8');
let cell9 = document.querySelector('#cell9');
let cell10 = document.querySelector('#cell10');
let cell11 = document.querySelector('#cell11');
let cell12 = document.querySelector('#cell12');
let cell13 = document.querySelector('#cell13');
let cell14 = document.querySelector('#cell14');
let cell15 = document.querySelector('#cell15');
let cell16 = document.querySelector('#cell16');
let cell17 = document.querySelector('#cell17');
let cell18 = document.querySelector('#cell18');
let cell19 = document.querySelector('#cell19');
let cell20 = document.querySelector('#cell20');
let cell21 = document.querySelector('#cell21');
let cell22 = document.querySelector('#cell22');
let cell23 = document.querySelector('#cell23');
let cell24 = document.querySelector('#cell24');
let cell25 = document.querySelector('#cell25');



const reset = document.querySelector('#reset');
reset.addEventListener('click', refreshPage)

function refreshPage() {
    window.location.reload();
}
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    document.querySelector('#startmessage').innerHTML = ' ';
    const startMessage = document.querySelector('#startmessage');
    const newElement = document.createElement('div');
    newElement.innerHTML = 'Начните игру';
    startMessage.appendChild(newElement)
});

let player = 'x';
let cells = document.querySelectorAll('.cell');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClick)
}

function cellClick() {
    if (!this.innerHTML) {
        this.innerHTML = player;
        
    } else {
        alert('ячейка занята')
    }
    player = player == 'x' ? 'o' : 'x';
    if(this.innerHTML=='x'){
        document.querySelector('#circle').style.backgroundColor='pink';
    document.querySelector('#cross').style.backgroundColor='white';
    }
    else {
        document.querySelector('#circle').style.backgroundColor='white';
        document.querySelector('#cross').style.backgroundColor='yellow';
    }
    checkResult();
}


const field=[
    [cell1,cell2,cell3,cell4, cell5],
    [cell6,cell7,cell8,cell9, cell10],
    [cell11,cell12,cell13,cell14, cell15],
    [cell16,cell17,cell18,cell19, cell20],
    [cell21,cell22,cell23,cell24, cell25],
    [cell1,cell6,cell11,cell16, cell21],
    [cell2,cell7,cell12,cell7, cell22],
    [cell3,cell8,cell13,cell18, cell23],
    [cell4,cell9,cell14,cell19, cell24],
    [cell5,cell10,cell15,cell20, cell25],
    [cell1,cell7,cell13,cell19, cell25],
    [cell5,cell9,cell13,cell17, cell21]
]

function checkResult() {
for (let i=0;i<field.length;i++){
    for (let j=0; j<field.length;j++){
        const current=field[i][j].innerHTML;
        if (current!=='' && current===field[i][j+1].innerHTML && current === field[i][j+2].innerHTML && current===field[i][j+3].innerHTML && current === field[i][j+4].innerHTML){
            alert(`${current} победили`)
        }
        const current1=field[i+1][j].innerHTML;
        if (current1!=='' && current1===field[i+1][j+1].innerHTML && current1 === field[i+1][j+2].innerHTML && current1===field[i+1][j+3].innerHTML && current1 === field[i+1][j+4].innerHTML){
            alert(`${current1} победили`)
        }
        const current2=field[i+2][j].innerHTML;
        if (current2!=='' && current2===field[i+2][j+1].innerHTML && current2 === field[i+2][j+2].innerHTML &&current2===field[i+2][j+3].innerHTML && current2 === field[i+2][j+4].innerHTML){
            alert(`${current2} победили`)
        }
        const current3=field[i+3][j].innerHTML;
        if (current3!=='' && current3===field[i+3][j+1].innerHTML && current3 === field[i+3][j+2].innerHTML && current3===field[i+3][j+3].innerHTML && current3 === field[i+3][j+4].innerHTML){
        alert(`${current3} победили`)
        }
        const current4=field[i+4][j].innerHTML;
        if (current4!=='' && current4===field[i+4][j+1].innerHTML && current4 === field[i+4][j+2].innerHTML &&current4===field[i+4][j+3].innerHTML && current4 === field[i+4][j+4].innerHTML){
            alert(`${current4} победили`)
        }
        const current5=field[i][j].innerHTML;
        if (current5!=='' && current5===field[i+1][j].innerHTML && current5 === field[i+2][j].innerHTML && current5===field[i+3][j].innerHTML && current5 === field[i+4][j].innerHTML){
            alert(`${current5} победили`)
        }
        const current6=field[i][j+1].innerHTML;
        if (current6!=='' && current6===field[i+1][j+2].innerHTML && current6 === field[i+2][j+2].innerHTML &&current6===field[i+3][j+2].innerHTML && current6 === field[i+4][j+2].innerHTML){
            alert(`${current6} победили`)
        }
        const current7=field[i][j+2].innerHTML;
        if (current7!=='' && current7===field[i+1][j+2].innerHTML && current7 === field[i+2][j+2].innerHTML && current7===field[i+3][j+2].innerHTML && current7 === field[i+4][j+2].innerHTML){
            alert(`${current7} победили`)
        }
        const current8=field[i][j+3].innerHTML;
        if (current8!=='' && current8===field[i+1][j+3].innerHTML && current8 === field[i+2][j+3].innerHTML &&current8===field[i+3][j+3].innerHTML && current8 === field[i+4][j+3].innerHTML){
            alert(`${current8} победили`)
        }
        const current9=field[i][j+4].innerHTML;
        if (current9!=='' && current9===field[i+1][j+4].innerHTML && current9 === field[i+2][j+4].innerHTML && current9===field[i+3][j+4].innerHTML && current9 === field[i+4][j+4].innerHTML){
            alert(`${current9} победили`)
        }
        const current10=field[i][j].innerHTML;
        if (current10!=='' && current10===field[i+1][j+1].innerHTML && current10===field[i+2][j+2].innerHTML && current10 === field[i+3][j+3].innerHTML && current10===field[i+4][j+4].innerHTML){
            alert(`${current10} победили`)
        }
        const current11=field[i][j+4].innerHTML;
        if (current11!=='' && current11===field[i+1][j+3].innerHTML && current11===field[i+2][j+2].innerHTML && current11 === field[i+3][j+1].innerHTML && current11===field[i+4][j].innerHTML){
            alert(`${current11} победили`)
        }
    }
}
}