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
                <button id="buttonAsistance"><i class="fas fa-microphone"></i></button>
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
  
    return divElement;
  }
  


 