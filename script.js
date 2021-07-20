function relogio()
{
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();

    var tempo1 = hr + ":" + min + ":" + s + "s";
    var tempo = window.document.getElementById('relogio')
    tempo.innerHTML = tempo1;

}

setInterval(relogio,500)