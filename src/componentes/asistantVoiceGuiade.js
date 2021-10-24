// import { start } from "../componentes/main.js";


export function asistantVoice() {

    const view = `
    <style>

    .containerAsistant{
        height: 93.64vh; 
        display: flex;
        flex-direction:column;
        background: #004481;
        margin:0;
        padding:0;
    }

    #conteinerMain{
        margin:0;
        padding:0;
        display: flex;
        flex-direction: column;
    }

    #containerHeader{
        z-index: 0;
        display: flex;
    }

    #containerHeader img:first-child {
        width: 100%;
        height: 25vh;
        }
    
    
    .containerLogo {
        display:flex;
        justify-content: space-around;
    }

    .containerLogo p {
        margin-top: 2em;
        color: white;  
        
    }

    .containerLogo img {
        width: 5em;
    }

    .containerMic{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:#004481 ;
        height: 40vh;
    }

    
.containerMic button {
    color: white;
    font-size: 4em;
    border: #1a7db3 solid 0.1px;
    padding: 0.5em;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 10px #1fa4d5;
    background: linear-gradient(100deg, rgba(35,196,241,1) 0%, rgba(19,70,130,1) 60%, rgba(2,0,36,1) 89%);
    cursor:pointer;
 }

 .containerMic button:hover {
    box-shadow: 0px 0px 10px 10px  rgba(2,0,36,1);
 }

    
    .containerMic p {
       color: white;
       margin-top: 3.5em;
       font-size: 1.2em;
    }

  .containerCreateAccount{
    background-color:#223f58;
    height: 12vh;
    text-align: center;
    color: #6c7985;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1.5em;
    width: 23.8vw;
}

.containerCreateAccount a{
    font-size: 1.2em;
    font-weight: bolder;
    text-decoration: none;
    color: #6c7985;
    margin-left: 0.2em;
}

.containerCreateAccount a:hover{
    color: white;
}

#conteinerFooter{
    margin:0;
    height:8vh;
    bottom:0;
    background-color:#004481;
    width: 23.8vw;
}

#ImageFooter{
    height:8vh;
    width: 100%;
}

 
    </style>

          <header id="containerHeader">
            <img id="ImageHeader" src="./assests/logo2.png">
          </header>

          <main id="conteinerMain">
             <div class="containerLogo">
                <img src="./assests/logoBBVA.png" alt="">
                <p> Español(México) </p>
             </div>
             <div class="containerMic">
                <button type="button" id="buttonAsistance"><i class="fas fa-microphone"></i></button>
                <p> Hablar ahora </p>
             </div>
            <div class="containerCreateAccount">
                <span>¿Quieres usar la app de BBVA?</span>
                <a href="https://www.bbva.mx/personas/registro.html">¡Regístrate!</a>
            </div>
          </main>
          <footer id="conteinerFooter">
            <img id="ImageFooter" src="./assests/logo3.png">
          </footer>  
        `;
  
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    divElement.className = ("containerAsistant");
    divElement.setAttribute("id", "containerAsistantGuide")
    return divElement;
  }


function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        let data = document.getElementById("containerAsistantGuide") 
        console.log(data)
}
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("containerAsistant").style.display="block"
        setTimeout(() => {
            voz('Hola soy Frida tu asistente virtual, como puedo ayudarte?')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {
    // SALUDO
    "Hola Frida": () => {
        voz("Hola, en que puedo ayudarte?");
    },

    "Como estas Frida": () => {
        voz("Hola, en que puedo ayudarte?");
    },

    "Buenos días Frida": () => {
        voz("Buenos dias, en que puedo ayudartee?");
    },

    "Buenas tardes Frost": () => {
        voz("Buenas tardes, en que puedo ayudartee?");
    },

    "Buenas noches Frost": () => {
        voz("Buenas noches, en que puedo ayudarte?");
    },

    // DESPEDIDA

    "Gracias Frida": () => {
        voz("Con gusto, que tengas un buen dia");
        annyang.abort()
    },

    "Hasta luego Frida": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "Adios Frida": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('son las ' + strTime)
    },

    "quién te creo": () => {
        voz("El team rocket code");
    },

    "qué eres": () => {
        voz("soy tu asistente virtual");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Frida");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "cuéntame un chiste": () => {
        var chistes = ["Hace un par de años, una pareja de caracoles se fue a dar un paseo en el parque, Se la estan pasando genial",
            "¡Recuerda siempre las dos palabras magicas que te abriran muchas puertas!, Empuje y Jale",
            "Un amigo se encuentra a otro:, Esta es mi hija la menor, el otro le contesta este es mi hijo fa sostenido ",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¿Cuál es la fruta más divertida?, la naranja ja ja"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    

    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte");
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que tu tambien lo estés')
    },


    // LLAMADA A LA ACCIÓN
    
    "Frida": () => {
        voz("aquí estoy, en que te puedo ayudar");
    },

    "Hey": () => {
        voz("aquí estoy, en que te puedo ayudar");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("aquí estoy, en que te puedo ayudar");
    },

    "Estás ahí": () => {
        voz("aquí estoy, en que te puedo ayudar");
    },

    //Información de cuenta
    "Cual es el saldo de mi cuenta": () => {
        voz("el saldo de su cuenta es:" )
    },

    "Cual son mis ultimos movimientos": () => {
        voz("tus ultimos movimientos son:" )
    },

    "Cual es el balance de mi cuenta": () => {
        voz("El balance de tu cuenta es:" )
    },

    //transacciones
    "Deseo hacer una transacción": () => {
        voz("De cuenta de ahorros o cuenta corriente" )
    },

    "De cuenta de ahorros": () => {
        voz("ok, que tipo de transacción: transferencia, pago servicios, pagos" )
    },

    "Deseo hacer una transferencia": () => {
        voz("ok, a que numero de cuenta y porque valor" )
    },


    "A la cuenta de pepito perez, , por 50000": () => {
        voz("ok, acabas de hacer una transferencia a pepito peres, por 50000" )
    },

    //Reclamación 

    "Quiero reportar perdida de mi tarjeta,": () => {
        voz("Me confirma su numero de identificación" )
    },
    
    "me confirma el codigo de la reclamacion por favor,": () => {
        voz("El codigo de su reclamacion es " )
    },

    //Promociones
    "Quiero conocer las promociones a las que puedo acceder,": () => {
        voz("Claro, sus promociones activas son " )
    },

    "Cuantos puntos tengo acumulados,": () => {
        voz("Tiene puntos acumulados " )
    },

    //educacion financiera
    "Quiero saber mas de educación financiera,": () => {
        voz("Mira la informacion que solicitas es " )

    },
}

function voz(texto) {
    // document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.7;
    mensaje.pitch = 1;
    // ¡Parla!
    // document.getElementById("all").style.visibility = "visible";
    // setTimeout(() => {
    //     document.getElementById("all").style.visibility = "hidden";  
    //     document.getElementById("all2").style.visibility = "visible";      
    // }, 4000);
    speechSynthesis.speak(mensaje);
}



console.log("soy la asistencia" + start())

export function openAsistance() { document.getElementById("buttonAsistance").addEventListener("click", () =>{
   console.log(start)
})} 




 