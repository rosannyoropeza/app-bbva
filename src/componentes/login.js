export function inicio() {
    const form = `   
    <div class="container">
    <h2>Hagamos tu presupuesto mensual</h2>
    <p>**VA te apoya es por eso que te compartimos una base para que hagas tu presupuesto mensual. <br /> Llena y/ o modifica los siguientes campos para establecer tu presupuesto mensual.</p>
    </div>
   `;

    const divPerfil = document.createElement('div');
    divPerfil.innerHTML = form;
    return divPerfil;
}