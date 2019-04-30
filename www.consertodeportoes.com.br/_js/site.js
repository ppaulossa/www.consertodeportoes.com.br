var validacao = [true,true,true,true,true,true,true,false];
var porcentagemTotal;
var elemento;
var x ;

function paginaCarregada() {

    document.getElementById("carregando").style.display = "none";
    document.getElementsByTagName("HEADER")[0].style.display = "block";
    document.getElementById("main-slider").style.display = "block";
    document.getElementById("main-slider").style.animation = "transparencia 5s";
    document.getElementsByTagName("SECTION")[0].style.display = "block";
    document.getElementsByTagName("MAIN")[0].style.display = "block";
    document.getElementsByTagName("FOOTER")[0].style.display = "block";

    var fundoModal = document.getElementsByClassName('janela-conteudo')[0];
    var modal = document.getElementsByClassName('janela')[0];
    setTimeout(function () {
        modal.style.animation = "fundoModal 4s";
        fundoModal.style.animation = "fadeModal 4s";
    }, 50000);

    window.scrollTo(0,document.body.scrollHeight);
    porcentagemTotal =  document.body.scrollTop;
    if(porcentagemTotal == 0 ){
        porcentagemTotal = document.documentElement.scrollTop;
    }
    window.scrollTo(0,0);
    validacao[7] = true;
}

function aparecerContato(numero){
    var image = document.getElementsByClassName("texto");
    var x ;
    if(image[numero].style.animation.toString() == "contato 20s"){
        image[numero].style.animation = "contato2 2s";
    }else {
        image[numero].style.animation = "contato 20s";
        for (x = 0; x < image.length; x++) {
            if (x != numero) {
                image[x].style.animation = "contato3 0.01s";
            }
        }
    }
}

function mostrarDesenvolvedor() {
    var dev = document.getElementById("desenvolvedor");
    dev.className = "mostrar";
    setTimeout(function(){dev.className = "";}, 10000);
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-98405286-1', 'auto'); ga('send', 'pageview');

function scrollBar() {

    if(validacao[7]) {
        if (document.body.scrollTop > ((10 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((10 * porcentagemTotal) / 100)) {
            if (validacao[0]) {
                elemento = document.getElementsByClassName("apresentacao-horizontal2")[0];
                elemento.style.opacity = "1";
                elemento.style.animation = "transicao3 2s,transparencia 6s";
                validacao[0] = false;
            }
        }

        if (document.body.scrollTop > ((20 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((20 * porcentagemTotal) / 100)) {
            if (validacao[1]) {
                var contador = 3.5;
                elemento = document.getElementsByClassName("servicos-container")[0];
                elemento.style.opacity = "1";
                elemento.style.animation = "transicao2 2s";
                elemento = document.getElementsByClassName("servicos")[0];
                elemento.style.animation = "transparencia 20s";
                elemento = document.getElementsByClassName("lista-image")[0];
                elemento.style.animation = "transparencia 20s";
                elemento = document.getElementsByClassName("lista-servico");
                for (x = 0; x < elemento.length; x++) {
                    contador += 0.5;
                    elemento[x].style.animation = "flipInX2 " + contador + "s";
                }
                validacao[1] = false;
            }
        }

        if (document.body.scrollTop > ((45 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((45 * porcentagemTotal) / 100)) {
            if (validacao[2]) {
                elemento = document.getElementsByClassName("container-marcas")[0];
                elemento.style.opacity = "1";
                elemento.style.animation = "transicao3 1s,transparencia 6s";
                elemento = document.getElementsByClassName("imagem-marcas");
                for (x = 0; x < elemento.length; x++) {
                    elemento[x].style.animation = "transicaoImagem 50s linear infinite 0s alternate";
                }
                validacao[2] = false;
            }
        }


        if (document.body.scrollTop > ((50 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((50 * porcentagemTotal) / 100)) {
            if (validacao[3]) {
                elemento = document.getElementById("bloco-manutencao");
                elemento.style.animation = "bounceIn 2s";
                elemento.style.opacity = "1";
                elemento = document.getElementById("bloco-portao");
                elemento.style.animation = "bounceIn 3s";
                elemento.style.opacity = "1";
                elemento = document.getElementById("bloco-controle");
                elemento.style.animation = "bounceIn 4s";
                elemento.style.opacity = "1";
                validacao[3] = false;
            }
        }


        if (document.body.scrollTop > ((55 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((55 * porcentagemTotal) / 100)) {
            if (validacao[4]) {
                elemento = document.getElementById("bloco-engrenagem");
                elemento.style.animation = "bounceIn 2s";
                elemento.style.opacity = "1";
                elemento = document.getElementById("bloco-central");
                elemento.style.animation = "bounceIn 3s";
                elemento.style.opacity = "1";
                validacao[4] = false;
            }
        }

        if (document.body.scrollTop > ((65 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((65 * porcentagemTotal) / 100)) {
            if (validacao[5]) {
                elemento = document.getElementById("bloco-aco");
                elemento.style.animation = "bounceIn 2s";
                elemento.style.opacity = "1";
                validacao[5] = false;
            }
        }

        if (document.body.scrollTop > ((75 * porcentagemTotal) / 100) || document.documentElement.scrollTop > ((75 * porcentagemTotal) / 100)) {
            if (validacao[6]) {
                elemento = document.getElementById("rede-social");
                elemento.style.opacity = "1";
                elemento.style.animation = "transicao3 3s,transparencia 5s";
                elemento = document.getElementsByClassName("gostou")[0];
                elemento.style.opacity = "1";
                elemento.style.animation = "transicao3 6s,transparencia 5s";
                elemento = document.getElementsByClassName("link-final");
                for (x = 0; x < 3; x++) {
                    elemento[x].style.animation = "fadeInUp 8s";
                    elemento[x].style.opacity = "1";
                }
            }
        }
    }

}



