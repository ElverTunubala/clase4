let juan;
let alberto;
let ana;
let madre;

juan = Number(prompt("Cual es la edad de Juan"));

function edadAlberto(juan){
    alberto = parseInt( (juan*2)/3 )
    return alberto;
}
edadAlberto(juan)

function edadAna(juan){
    ana = parseInt( (juan*4)/3)
    return ana;
}
edadAna(juan)

function edadMadre(juan){
    madre = parseInt(juan+alberto+ana)
    return madre;
}
edadMadre(juan)

document.write("La edad de Alberto es :" + edadAlberto(juan) + "<br>"+ 
"La edad de Ana es :" + edadAna(juan) + "<br>"+
"La edad de la madre es :" + edadMadre(juan) + "<br>"+
"La edad de Juan es :" + juan )
