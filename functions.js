function validar(){
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var fone = formuser.fone.value;
    var valor = formuser.valor.value;
    var parcela = formuser.parcela.value;

    if(nome == ""){
        alert('preencha o campo Nome!');
        return false;
    }

    if(email == ""  || email.indexOf('@') == -1 ){
        alert('preencha o campo E_mail!');
        return false;  
    }

    if(fone == ""){
        alert('preencha o campo Telefone!');
        return false;  
    }

    if(valor == ""){
        alert('Preencha o campo Valor Desejado!');
        return false;  
         }else if( valor < 1000){
            alert('O valor minimo R$1000!');
                }else if ( valor > 10000){
                     alert('O valor maximo  R$10000!');
                }
          
    if(parcela == ""){
        alert('Preencha o campo Valor da parcela!');
        return false;  
         }else if( parcela < 1){
            alert('Numero de minimo parcelas 2 vezes!');
                }else if ( parcela > 24){
                     alert('Numero de maximo de parcelas 24vezes!');
                }         
}

