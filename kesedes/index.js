function gerarSenha() {
    var comprimento = document.getElementById("comprimento").value;
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    var senha = "";
    for (var i = 0; i < comprimento; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(randomIndex);
    }
    document.getElementById("senhaGerada").value = senha;
}
