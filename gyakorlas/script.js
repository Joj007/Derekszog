function megszerkesztheto(){
    if (Math.abs(Math.pow(document.getElementById("atfogo").value, 2) - Math.pow(document.getElementById("befogo1").value,  2) - Math.pow(document.getElementById("befogo2").value, 2)) < 0.05){
        alert("A derékszögű háromszög megszerkeszthető!");
    }
    else{
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }

}

function veletlen(){
    document.getElementById("befogo1").value = Math.round(Math.random()*90+10);
    document.getElementById("befogo2").value = Math.round(Math.random()*90+10);
    document.getElementById("atfogo").value = Math.round(Math.random()*90+10);
}

function kiszamitas(){
    document.getElementById("atfogo").value = (Math.sqrt(document.getElementById("befogo1").value ** 2 + document.getElementById("befogo2").value ** 2)).toFixed(3);
}