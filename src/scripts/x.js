let cells = document.querySelectorAll('.cell');
for (let i=0;i<cells.length;i++){    
    cells[i].addEventListener('click', cell, false)
}

function cell(){
    alert('hello!')
}

export default cell