
window.onload = function() {
  
    var url = window.location.href;

    var urlParams = new URLSearchParams(window.location.search);

   
    var cpf = urlParams.get('cpf'); 
    var data = urlParams.get('data'); 
    
   
    var divCpf = document.getElementById('cpf');
    if (divCpf) {
        divCpf.innerHTML = cpf;
    }
    var divData = document.getElementById('data');
    if (divData) {
        divData.innerHTML = data;
    }

 
    
}