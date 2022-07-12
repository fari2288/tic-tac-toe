const reset=document.querySelector('#reset');

reset.addEventListener('click', refreshPage)

function refreshPage(){
    window.location.reload();
}

export default refreshPage;