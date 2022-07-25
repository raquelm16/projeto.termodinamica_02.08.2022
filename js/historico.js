var hist = [];

function eficienciaCalc(){
    if(localStorage.meuArr){
        hist = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoItem = document.getElementById("res").value;
    hist.push(novoItem);
    localStorage.meuArr = JSON.stringify(hist);
}

function historiColando(){
    let resultDIV = document.getElementById("cookies");
    //resultDIV.innerHTML = "";
    if (localStorage.meuArr){
        hist = JSON.parse(localStorage.getItem('meuArr'));
    }
    resultDIV.innerHTML = (res.value)
}
