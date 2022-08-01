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
const div = document.querySelector('#message');
const message = document.createElement('div');


const reset = document.querySelector('#reset');
reset.addEventListener('click', refreshPage)

function refreshPage() {
    window.location.reload();
}


let player = `<i class="fa-solid fa-xmark"></i>`;
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
    player = player == `<i class="fa-solid fa-xmark"></i>` ? `<i class="fa-solid fa-o"></i>` : `<i class="fa-solid fa-xmark"></i>`;
    if (this.innerHTML == `<i class="fa-solid fa-xmark"></i>`) {
        document.querySelector('#circle').style.backgroundColor = 'pink';
        document.querySelector('#cross').style.backgroundColor = 'white';
    } else {
        document.querySelector('#circle').style.backgroundColor = 'white';
        document.querySelector('#cross').style.backgroundColor = 'yellow';
    }
    checkResult();
}


const field = [
    [cell1, cell2, cell3, cell4, cell5],
    [cell6, cell7, cell8, cell9, cell10],
    [cell11, cell12, cell13, cell14, cell15],
    [cell16, cell17, cell18, cell19, cell20],
    [cell21, cell22, cell23, cell24, cell25],
    [cell1, cell6, cell11, cell16, cell21],
    [cell2, cell7, cell12, cell17, cell22],
    [cell3, cell8, cell13, cell18, cell23],
    [cell4, cell9, cell14, cell19, cell24],
    [cell5, cell10, cell15, cell20, cell25],
    [cell1, cell7, cell13, cell19, cell25],
    [cell5, cell9, cell13, cell17, cell21]
]

function checkResult() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            const current = field[i][j].innerHTML;
            if (current !== '' && current === field[i][j + 1].innerHTML && current === field[i][j + 2].innerHTML && current === field[i][j + 3].innerHTML && current === field[i][j + 4].innerHTML) {
                document.querySelector('#cell1').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell2').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell3').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell4').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell5').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current1 = field[i + 1][j].innerHTML;
            if (current1 !== '' && current1 === field[i + 1][j + 1].innerHTML && current1 === field[i + 1][j + 2].innerHTML && current1 === field[i + 1][j + 3].innerHTML && current1 === field[i + 1][j + 4].innerHTML) {
                document.querySelector('#cell6').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell7').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell8').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell9').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell10').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current1} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current2 = field[i + 2][j].innerHTML;
            if (current2 !== '' && current2 === field[i + 2][j + 1].innerHTML && current2 === field[i + 2][j + 2].innerHTML && current2 === field[i + 2][j + 3].innerHTML && current2 === field[i + 2][j + 4].innerHTML) {
                document.querySelector('#cell11').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell12').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell13').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell14').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell15').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current2} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current3 = field[i + 3][j].innerHTML;
            if (current3 !== '' && current3 === field[i + 3][j + 1].innerHTML && current3 === field[i + 3][j + 2].innerHTML && current3 === field[i + 3][j + 3].innerHTML && current3 === field[i + 3][j + 4].innerHTML) {
                document.querySelector('#cell16').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell17').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell18').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell19').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell20').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current3} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current4 = field[i + 4][j].innerHTML;
            if (current4 !== '' && current4 === field[i + 4][j + 1].innerHTML && current4 === field[i + 4][j + 2].innerHTML && current4 === field[i + 4][j + 3].innerHTML && current4 === field[i + 4][j + 4].innerHTML) {
                document.querySelector('#cell21').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell22').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell23').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell24').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell25').style.backgroundColor = `rgb(176, 189, 216)`;
                div.appendChild(message);
                message.innerHTML = `${current4} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            
            if (current !== '' && current === field[i + 1][j].innerHTML && current === field[i + 2][j].innerHTML && current === field[i + 3][j].innerHTML && current === field[i + 4][j].innerHTML) {
                document.querySelector('#cell1').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell6').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell11').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell16').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell21').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current} победили`;
                document.querySelector('#message').style.zIndex = "1";

            }
            const current6 = field[i+1][j + 1].innerHTML;
            if (current6 !== '' && current6 === field[i][j + 1].innerHTML && current6 === field[i + 2][j + 1].innerHTML && current6 === field[i + 3][j + 1].innerHTML && current6 === field[i + 4][j + 1].innerHTML) {
                document.querySelector('#cell2').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell7').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell12').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell17').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell22').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current6} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current7 = field[i][j + 2].innerHTML;
            if (current7 !== '' && current7 === field[i + 1][j + 2].innerHTML && current7 === field[i + 2][j + 2].innerHTML && current7 === field[i + 3][j + 2].innerHTML && current7 === field[i + 4][j + 2].innerHTML) {
                document.querySelector('#cell3').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell8').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell13').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell18').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell23').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current7} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current8 = field[i][j + 3].innerHTML;
            if (current8 !== '' && current8 === field[i + 1][j + 3].innerHTML && current8 === field[i + 2][j + 3].innerHTML && current8 === field[i + 3][j + 3].innerHTML && current8 === field[i + 4][j + 3].innerHTML) {
                document.querySelector('#cell4').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell9').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell14').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell19').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell24').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current8} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            const current9 = field[i][j + 4].innerHTML;
            if (current9 !== '' && current9 === field[i + 1][j + 4].innerHTML && current9 === field[i + 2][j + 4].innerHTML && current9 === field[i + 3][j + 4].innerHTML && current9 === field[i + 4][j + 4].innerHTML) {
                document.querySelector('#cell5').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell10').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell15').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell20').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell25').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current9} победили`;
                document.querySelector('#message').style.zIndex = "1";
            }
            
            if (current !== '' && current === field[i + 1][j + 1].innerHTML && current === field[i + 2][j + 2].innerHTML && current === field[i + 3][j + 3].innerHTML && current === field[i + 4][j + 4].innerHTML) {
                document.querySelector('#cell1').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell7').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell13').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell19').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell25').style.backgroundColor = `rgb(176, 189, 216)`;

                div.appendChild(message);
                message.innerHTML = `${current} победили`;
                document.querySelector('#message').style.zIndex = "1";

            }
            if (current4 !== '' && current4 === field[i][j + 4].innerHTML && current4 === field[i + 2][j + 2].innerHTML && current4 === field[i + 3][j + 1].innerHTML && current4 === field[i + 1][j+3].innerHTML) {
                document.querySelector('#cell5').style.backgroundColor = `rgb(176, 189, 216)`;
                document.querySelector('#cell9').style.backgroundColor = 'rgb(176, 189, 216)';
                document.querySelector('#cell13').style.backgroundColor = 'rgb(176, 189, 216)';
                document.querySelector('#cell17').style.backgroundColor = 'rgb(176, 189, 216)';
                document.querySelector('#cell21').style.backgroundColor = 'rgb(176, 189, 216)';

                div.appendChild(message);
                message.innerHTML = `${current4} победили`;
                document.querySelector('#message').style.zIndex = "1";

            }
        }
    }
}