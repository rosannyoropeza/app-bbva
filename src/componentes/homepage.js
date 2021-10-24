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



            <a href="#/aliados" id="traslados">
            
            
            </a>




 <div class="oportunities">
        <h4> Oportunidades </h4>
        
            <div class="divImg">
            <a href="#/aliados"><div class="oportunitiesOptionText"> <span>viajes</span> </div> </a>
            </div>
     
            <div class="divImg1">
                <div class="oportunitiesOptionText"> <span></span> </div>
            </div>
</div>





    <div class="welfare">


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



// if(document.querySelector('#container-slider')){
//     setInterval('fntExecuteSlide("next")',5000);
//  }
//  //------------------------------ LIST SLIDER -------------------------
//  if(document.querySelector('.listslider')){
//     let link = document.querySelectorAll(".listslider li a");
//     link.forEach(function(link) {
//        link.addEventListener('click', function(e){
//           e.preventDefault();
//           let item = this.getAttribute('itlist');
//           let arrItem = item.split("_");
//           fntExecuteSlide(arrItem[1]);
//           return false;
//        });
//      });
//  }
 
//  function fntExecuteSlide(side){
//      let parentTarget = document.getElementById('slider');
//      let elements = parentTarget.getElementsByTagName('li');
//      let curElement, nextElement;
 
//      for(var i=0; i<elements.length;i++){
 
//          if(elements[i].style.opacity==1){
//              curElement = i;
//              break;
//          }
//      }
//      if(side == 'prev' || side == 'next'){
 
//          if(side=="prev"){
//              nextElement = (curElement == 0)?elements.length -1:curElement -1;
//          }else{
//              nextElement = (curElement == elements.length -1)?0:curElement +1;
//          }
//      }else{
//          nextElement = side;
//          side = (curElement > nextElement)?'prev':'next';
 
//      }
//      //RESALTA LOS PUNTOS
//      let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
//      elementSel[curElement].classList.remove("item-select-slid");
//      elementSel[nextElement].classList.add("item-select-slid");
//      elements[curElement].style.opacity=0;
//      elements[curElement].style.zIndex =0;
//      elements[nextElement].style.opacity=1;
//      elements[nextElement].style.zIndex =1;
//  }


//  <a href="javascript: fntExecuteSlide('prev');" class="arrowPrev"><i class="fas fa-chevron-circle-left"></i></a>
//         <a href="javascript: fntExecuteSlide('next');" class="arrowNext"><i class="fas fa-chevron-circle-right"></i></a>