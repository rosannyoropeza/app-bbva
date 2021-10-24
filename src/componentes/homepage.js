export function homePage() {
    const homepage = `
    <div class="header">
    <div class="options">
        <button> <img src="./assests/voz.png" alt=""></button>
        <button><i class="fas fa-bell"></i></button>
        <button><i class="fas fa-bars"></i></button>
    </div>
    <div class="user">
        <h2> Hola <span> Juan </span></h2> 
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
 <section id="container-slider" class="slider">
    <ul class="listslider">
        <li><a itlist="itList_0" href="#" class="item-select-slid"></a></li>
        <li><a itlist="itList_1" href="#"></a></li>
        <li><a itlist="itList_2" href="#"></a></li>
    </ul>

    <ul id="slider">
        <li style="background-image:url('./assests/compras-exterior.jpg'); z-index:0; opacity: 1;">
        <div class="content_slider" >
            <div>
            <p> Conoce todos lo beneficios que BBVA tiene para ti </>
            <h2>Todo lo que necesitas en un solo lugar </h2>
        <a href="#" class="btnSlider">Ver más</a>
        </div>
        </div>
        </li>
        <li style="background-image: url('https://cdn.pixabay.com/photo/2018/02/20/10/28/business-3167295_960_720.jpg'); ">
        <div class="content_slider" >
            <div>
            <p> Te acompañamos en tu dia a dia </>
            <h2> Enterate como </h2>
        <a href="#" class="btnSlider">Ver más</a>
        </div>
        </div>
        </li>
        <li style="background-image: url('https://cdn.pixabay.com/photo/2015/07/17/22/42/typing-849806_960_720.jpg'); ">
        <div class="content_slider" >
            <div>
            <p> Queremos ser mas que tu banco, tua aliado por eso tenemos nuestros productos </>
            <h2> Conocelos </h2>
        <a href="#" class="btnSlider">Ver más</a>
        </div>
        </div>
        </li>
    </ul>
    </section>
    <div class="oportunities">
    <h4> Oportunidades </h4>
        <div class="divImg">
           <div class="oportunitiesOptionText"> <span>viajes</span> </div>
        </div>
        <div class="divImg1">
            <div class="oportunitiesOptionText"> <span></span> </div>
        </div>
    </div>
    <div class="welfare">
      <h4 class="title_w">Pensando en tu bienestar</h4>
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
    </div>  


    <div class="menu">
        <button><img src="./assests/home.png" alt=""></button>
        <button><img src="./assests/tarjeta-de-credito.png" alt=""></button>
        <button><img src="./assests/estrella.png" alt=""></button>
        <button><img src="./assests/dinero.png" alt=""></button>
        <button><img src="./assests/imagen-de-perfil.png" alt=""></button>
   </div>

   `;

    const divPerfil = document.createElement('div');
    divPerfil.innerHTML = homepage;
    divPerfil.className = ("containerHomepage");
    return divPerfil;
}



if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }


//  <a href="javascript: fntExecuteSlide('prev');" class="arrowPrev"><i class="fas fa-chevron-circle-left"></i></a>
//         <a href="javascript: fntExecuteSlide('next');" class="arrowNext"><i class="fas fa-chevron-circle-right"></i></a>