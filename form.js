function alterarTipoDeInput(){
    const senha_input = document.getElementById('senha');
    if(senha_input.type == 'password'){
        senha_input.type = 'text';
    }else{
        senha_input.type = 'password';
    }
}
