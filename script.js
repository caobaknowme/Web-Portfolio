let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


function select(){
    //oculta el menu una vez que se selecciona la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function sendToWhatsapp(){
    let number="+50685019391";
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
    let topic = document.getElementById('topic').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
    + "Phone : " +phone+ "%0a"
	+ "Email : " +email+ "%0a"
    + "Topic : " +topic+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}