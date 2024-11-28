//variables globales
const d = document;

//imagenes del juego
let imgN1 = [
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"},
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"}
];

let imgN2 = [
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"},
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"},
    {nombre: "Shao Khan", url:"./IMAGENES/ShaoKahn.webp"},
    {nombre: "Shao khan", url:"./IMAGENES/ShaoKahn.webp"},
    {nombre: "nightwolf", url:"./IMAGENES/nightwolf.jpg"},
    {nombre: "nightwolf", url:"./IMAGENES/nightwolf.jpg"}
];

let imgN3 = [
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"},
    {nombre: "Sub Zero", url:"./IMAGENES/SubZero.jfif"},
    {nombre: "Liu Kang", url:"./IMAGENES/liuKang.jfif"},
    {nombre: "Kung Lao", url:"./IMAGENES/KungLao.jfif"},
    {nombre: "Baraka", url:"./IMAGENES/Baraka.jfif"},
    {nombre: "Raiden", url:"./IMAGENES/Raiden.webp"},
    {nombre: "Scorpion", url:"./IMAGENES/scorpion.webp"},
    {nombre: "shaoKahn", url:"./IMAGENES/ShaoKahn.webp"},
    {nombre: "shaoKahn", url:"./IMAGENES/ShaoKahn.webp"},
    {nombre: "nightwolf", url:"./IMAGENES/nightwolf.jpg"},
    {nombre: "nightwolf", url:"./IMAGENES/nightwolf.jpg"},
    {nombre: "Quan Chi", url:"./IMAGENES/quanChi.webp"},
    {nombre: "Quan Chi", url:"./IMAGENES/quanChi.webp"},
    {nombre: "Ermac", url:"./IMAGENES/Ermac.webp"},
    {nombre: "Ermac", url:"./IMAGENES/Ermac.webp"}
];

//seleccionar el tablero del HTML
let tablero = d.querySelector(".tablero");
let nombreImg = [];//Guargar los nombres de la imagen
let idImg = []; //guardar las posiciones de la imagen

let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTranscurrido ;
let btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;

// setTimeout()//se ejecuta una vez cuando pasa determinado tiempo
// setInterval()//SE EJECUTA EN DETERMINADO TIEMPO INFINITAMENTE

//agregar evento al boton para iniciar el juego
btn_iniciar.addEventListener("click", function(){

    //comprobar que el juego esté activo
    if(estoyJugando == false && nivel == 1){
        estoyJugando = true;
        nivel1();
    }else if(estoyJugando == false && nivel == 2){
        estoyJugando = true;
        nivel2();
    }else if(estoyJugando == false && nivel == 3){
        estoyJugando = true;
        nivel3();
    }
})


//FUNCIÓN PARA AGREGAR LAS IMAGENES AL TABLERO

function agregarImagenes(){
    //agregar imagenes dependiendo el nivel
    if(nivel == 1 ){
        imagenNivel = imgN1;
    }else if (nivel == 2){
        imagenNivel = imgN2;
    }else if (nivel == 3){
        imagenNivel = imgN3;
    }

    //poner imagenes aleatorias
    imagenNivel.sort(()=>Math.random() -0.5)

    //recorrer con un foreach las imagenes del array
    imagenNivel.forEach((img, i)=>{
        let div = d.createElement("div");//Crear div
        div.className = "col-3"; //Agregar clase al div
        let imagen = d.createElement("img"); //crear imagen
        imagen.src = "./IMAGENES/ocultar.jfif"; //agregar la ubicación de la imagen
        imagen.className = "img-fluid altura"; //Agregar clases a la imagen
        imagen.id = i; //Agregar identificador a cada imagen
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen); //agregar la imagen al div
        tablero.appendChild(div); //agregar el div al tablero
    });
};

//función para mostrar las imagenes ocultas
function mostrarImagenes(){
    let imgID = this.getAttribute("id");
    // alert("imagen #" + imgID);
    this.src = imagenNivel[imgID].url;
    //guardar los nombres de imagen
    nombreImg.push(imagenNivel[imgID].nombre);
    //guardar los id de las imagenes
    idImg.push(imgID);

    //activar la función para comparar imagenes
    if(nombreImg.length == 2){
        //simular o esperar un tiempo
        setTimeout(()=>{
            compararImagenes();
        }, 100)
        
    }
}

//funcion para comparar imagenes
function compararImagenes(){
    let allImg = d.querySelectorAll(".tablero .col-3 img")
    //verificar si las imagenes son iguales
    if(nombreImg[0] == nombreImg[1]){
        if(idImg[0] != idImg[1] ){
            // alert("Muy bien descubriste la imagen");
            allImg[idImg[0]].src = "./IMAGENES/ok2.jpg"
            allImg[idImg[1]].src = "./IMAGENES/ok2.jpg"
            allImg[idImg[0]].removeEventListener("click", mostrarImagenes )
            allImg[idImg[1]].removeEventListener("click", mostrarImagenes )
            aciertos++
            mostrarAciertos.textContent = aciertos;
        }else{
            alert("Debes elegir otra imagen");
            allImg[idImg[0]].src = "./IMAGENES/ocultar.jfif"
            intentos++
            mostrarIntentos.textContent = intentos;
        }


    } else{
        alert("sigue intentando");
        allImg[idImg[0]].src = "./IMAGENES/ocultar.jfif"
        allImg[idImg[1]].src = "./IMAGENES/ocultar.jfif"
        intentos++
        mostrarIntentos.textContent = intentos;
    }
    //reiniciar las variables
    nombreImg = [];
    idImg = [];

    //comprobar si se adivinaron todas las imagenes

    if(nivel == 1 && aciertos == 6){
        alert("FELICITACIONES, PASASTE AL SIGUIENTE NIVEL 😁😀");
        //recargar la pagina
        // location.reload();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg()

    } else if(nivel == 2 && aciertos == 8){
        alert("FELICITACIONES, PASASTE AL SIGUIENTE NIVEL 😁😀");
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg()
    } else if(nivel == 3 && aciertos == 10){
        alert("FELICITACIONES, GANASTE EL JUEGO 😀😀")
        Location.reload
    }
}

function nivel1(){
        //agregar las imagenes al tablero
        agregarImagenes();
        mostrarNivel.textContent = nivel;
        tiempoDeJuego()
}

function nivel2(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego()
}

function nivel3(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego()
}


function tiempoDeJuego(){
    //controlar el tiempo del juego
    tiempoTranscurrido = setInterval(()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
            alert("¡RÁPIDO, SE TE ESTÁ AGOTANDO EL TIEMPO! 😨")
            mostrarTiempo.style.color="red"
            mostrarTiempo.style.fontWeight="bold"
            mostrarTiempo.style.fontSize="20px"
            
        } else if(tiempo == 0){
            alert("TU TIEMPO SE AGOTÓ ¡¡HAS PERDIDO!!")
            clearInterval(tiempoTranscurrido)//Para el tiempo para que no se reduzca a número negativos
            location.reload();
        }
    }, 1000);
}

function quitarImg(){
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();
    })
}

