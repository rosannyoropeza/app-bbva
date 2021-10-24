import login from "./../fetch.js";
// import login from "../login.css"

export function loginTemplate() {

    const view = `
    <style>
    .screenLogIn{
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
  }
  
  #containerHeader{
      width: 100%;
      z-index: 0;
      display: flex;
  }
  
  #containerHeader img:first-child {
  width: 100%;
  height: auto;
  }
  
  #voz{
      z-index: 2;
      height: 5vh;
      position: absolute;
      margin: 8vh 0 0 4vw;
  }
  
  .containerLogIn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color:#004481 ;
      /* margin: 0 5vw 0 5vw;
      width: 90%; */
  } 
  
  #signIn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color:#004481 ;
      padding: 5%;
      width: 100%;
  }
  
  p {
      margin: 2% 5% 5% 5%;
      color: white;
  }
  
  .containerCreateAccount {
      background-color:#004481 ;
      padding: 4% 0% 4% 0%;
      margin: 4% 5% 4% 5%;
      text-align: center;
      width: 100%;
      color: white;
  }
  
  .button{
      background-color: #46759f;
      color: #F9F4F4;
      font-family: 'Yusei Magic', sans-serif;
      width: 131px;
      height: 50px;
      border:none;
      margin: 3% 0% 4% 0%;
      cursor: pointer;
  }
   
  .button:hover{
      background-color:#c997c0;
      color: white;
      border: 2px solid #c997c0;
  }
  
  .input {
      color:white;
      width: 239px;
      height: 35px;
      left: 81px;
      top: 277px;    
      background: #004481;
      border-bottom:2px solid #46759f;
      border-top: 1px solid #004481;
      border-left: 1px solid #004481;
      border-right: 1px solid #004481;
      box-sizing: border-box;
      padding: 3%;
      margin: 2% 1% 1% 1%;
  }
  
  a{
      text-decoration: none;
      color:white;
    }
  
  #conteinerFooter{
      position: absolute;
      margin:0;
      width: 23.9vw;
      height:8vh;
      bottom:0;
      background-color:#004481;
  }
  
  #ImageFooter{
    height:8vh;
    width: 23.9vw;
  }
  
    </style>


     
          <header id="containerHeader">
            <img id="ImageHeader" src="./assests/logo2.png">
            <img id="voz" src="./assests/voz.png">
          </header>

          <main id="conteinerMain">
            <div class="containerLogIn">
              <form id="signIn">
                <input type="tel" id="signInPhone" placeholder="Número celular" class="input" value="3123904846" required>
                <input type="password" id="signInpassword" placeholder="Contraseña" class="input" value="123456" required>
                <p class="errorMessage" id="errorPassword"></p>
                <p class="message" id="message">Olvidé mi contraseña</p>
                <button type= "button" class="button" id="btnLogIn">Entrar</button><br>
              </form>

            <div class="containerCreateAccount">
                <span>¿Quieres usar la app de BBVA?</span>
                <a href="https://www.bbva.mx/personas/registro.html">¡Regístrate!</a>
            </div>
            </div>
          </main>
        
          <footer id="conteinerFooter">
            <img id="ImageFooter" src="./assests/logo3.png">
          </footer>  
        `;
  
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    divElement.className = ("screenLogIn");
  
    return divElement;
  }
  
  // Función Iniciar sesión
  export function logIn() {
    const btnLogIn = document.getElementById('btnLogIn');
    btnLogIn.addEventListener('click', () => {
      const phone = document.getElementById('signInPhone').value;
      const password = document.getElementById('signInpassword').value;
      const error = document.getElementById('errorPassword');
      console.log("diste click", phone, password)
  
      login(phone, password)
        .then((res) => {
            console.log('res',res)
            if(res.message === 'Login correcto'){
              window.location = '#/homepage';
              console.log('Estas logueado')
            }
            else{
               error.innerHTML=res.error;
            }
        })
        return true;
    });
  }
  