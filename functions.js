function validar() {
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var fone = formuser.fone.value;
    var valor = formuser.valor.value;
    var parcela = formuser.parcela.value;

    if (nome == "") {
        alert('preencha o campo Nome!');
        formeuser.nome.focus();
        return false;
    }

    if (email == "" || email.indexOf('@') == -1) {
        alert('preencha o campo E_mail!');
        formeuser.email.focus();
        return false;
    }

    if (fone == "") {
        alert('preencha o campo Telefone!');
        formeuser.fone.focus();
        return false;
    }

    if (valor == "") {
        alert('Preencha o campo Valor Desejado!');
        formeuser.valor.focus();
        return false;

        if (valor < 1000) {
            alert('O valor minimo R$1000!');
        }

        if (valor > 10000) {
            alert('O valor maximo  R$10000!');
        }
    }

    if (parcela == "") {
        alert('Preencha o campo Valor da parcela!');
        formeuser.valor.focus();
        return false;

        if (parcela < 2) {
            alert('Numero de minimo parcelas 2 vezes!');
        }

        if (parcela > 24) {
            alert('Numero de maximo de parcelas 24vezes!');
        }
    }
}