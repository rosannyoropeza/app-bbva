export function homePage() {
    const homepage = `   
    <div class="containerHomepage">
    <div class="header">
        <div class="options">
            <button> <img src="./assests/voz.png" alt=""></button>
            <button><i class="fas fa-bell"></i></button>
            <button><i class="fas fa-bars"></i></button>
        </div>
        <div class="user">
            <h2> Hola </h2>
        </div>
     </div>
     <div class="containerOperations">
        <h3>¿Que deseas hacer hoy?</h3>
       <div class="operations">
         <div class="operation">
             <img src="./assests/icon4.png" alt="">
             <small>Transferencias</small>
         </div>
         <div class="operation">
             <img src="./assests/icon6.png" alt="">
             <small>Documentos</small>
         </div>
         <div class="operation">
             <img src="./assests/icon1.png" alt="">
             <small>Retiros sin tarjeta</small>
         </div>
         <div class="operation">
             <img src="./assests/icon5.png" alt="">
             <small>Pagar Tarjeta</small>
         </div>
         <div class="operation">
             <img src="./assests/icon3.png" alt="">
             <small>Pagar servicios</small>
         </div>
         <div class="operation">
             <img src="./assests/icon2.png" alt="">
             <small>Recargas y paquetes</small>
         </div>
       </div>
     </div>
     <div class="slider">
        <img src="./assests/compras-exterior.jpg" alt="">
        <h4> Conoce todos lo beneficios que BBVA tiene para ti </h4>
        <h2> Todo lo que necesitas en un solo lugar </h2>
      </div>
        <div class="oportunities">
            <h4> Oportunidades </h4>
                <div class="divImg">
                    <img src="./assests/viajeA.jpg" alt="">
                    <div class="oportunitiesOptionText"> <span>viajes</span> <div/>
                </div>
            </div>
        </div>
        </div>
        <div class="welfare">
          <h4>Pensando en tu bienestar</h4>
          <img src="./assests/imagen1.png" alt="">
          <div class="welfareOptions">
              <div class="welfareLeft">
                  <p>Hemos habilitado dos nuevos canales de contacto</p>
                  <h4>Contactanos</h4>
              </div>
              <div class="welfareRight">
                  <div class="welfareOption">
                     <img src="./assests/llamada.png" alt="">
                      <p>Linea Telefonica</p>
                  </div>
                  <div class="welfareOption">
                      <p>Asistente de voz</p>
                      <img src="./assests/chat-en-vivo.png" alt="">
                  </div>
                  <div class="welfareOption">
                      <img src="./assests/sobre.png" alt="">
                      <p>Correo electronico</p>
                  </div>
              </div>
           </div>
           <div class="menu">
            <button><img src="./assests/home.png" alt=""></button>
            <button><img src="./assests/tarjeta-de-credito.png" alt=""></button>
            <button><img src="./assests/estrella.png" alt=""></button>
            <button><img src="./assests/dinero.png" alt=""></button>
            <button><img src="./assests/imagen-de-perfil.png" alt=""></button>
       </div>
        </div>
</div>

   `;

    const divPerfil = document.createElement('div');
    divPerfil.innerHTML = homepage;
    return divPerfil;
}