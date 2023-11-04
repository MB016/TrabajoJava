function CalcularTotal() {
    const cant = document.getElementById('Cantidad');
    const valor = document.getElementById('Categoria');
 
 
    if(/^(?!.* $)[A-Z][a-z ]+$/.test(Nombre.value)){
          Nombre.classList.remove("is-invalid");
       }

    else if(Nombre.value==="") {
       Nombre.classList.add("is-invalid");   
       Nombre.focus();
    }
     
    const validarMail = mail =>
    {
       return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(mail.value);
    }
 
    if(!validarMail(mail)){
       mail.classList.add("is-invalid");   
       mail.focus();
    }

    else {
       mail.classList.remove("is-invalid");
    }
   
    if(valor.value==0) {resumenTotal = 200*cant.value;}
    if(valor.value==1) {resumenTotal = (200 - 200*0.8)*cant.value;}
    if(valor.value==2) {resumenTotal = (200 - 200*0.5)*cant.value;}
    if(valor.value==3) {resumenTotal = (200 - 200*0.15)*cant.value;}
 
    document.getElementById('TotalPagar').innerText = resumenTotal;
 }
 
 const BTNCLIK = document.getElementById('BotonResumen');
 BTNCLIK.addEventListener('click',CalcularTotal);