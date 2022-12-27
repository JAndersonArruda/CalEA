const btCalcular = document.getElementById("calc");
const infoForm = document.getElementById("infoForm");


btCalcular.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("infoForm");
    
    console.log(infoForm);
    console.log(btCalcular);

    let list = (peopleForm(form));
    let mens = window.alert(`${list.nome} sua situação é: ${calcStatus(list.media)}`);

    let tabMedia = window.document.getElementById("md");
    tabMedia.innerHTML = `<td>${list.media}</td>`;
    let tabStatus = window.document.getElementById("st");
    tabStatus.innerHTML = `<td>${calcStatus(list.media)}</td>`;


    console.log(list)
});


function peopleForm(form){

    var n1 = parseInt(document.getElementById("nt1").value);
    var n2 = parseInt(document.getElementById("nt2").value);
    var n3 = parseInt(document.getElementById("nt3").value);
    var n4 = parseInt(document.getElementById("nt4").value);
    var media =  (n1 + n2 + n3 + n4) / 4;

    var list = {
        nome: document.getElementById("nome").value,
        nt1: n1,
        nt2: n2,
        nt3: n3,
        nt4: n4,
        media: media,
    } 
    console.log(list.nome);

    return list; 
}

function calcStatus(media){

    console.log(media)

    var status = ""
	if (media >= 70) {
		status = "Aprovado";
		return status;
	} else if (media > 00 && media < 70) {
		status = "Preciza ir para final";
		return status;
	} else if (media < 00) {
		status = "Preterido";
		return status;
    }
}

