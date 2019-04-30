
(function() {
    function MostrarSlide( element ) {
        this.elementos = document.querySelector( element );
        this.inicio();
    }

    MostrarSlide.prototype = {
        inicio: function() {
            this.slides = this.elementos.querySelectorAll( ".slide" );
            this.index = 0;
            this.acao();
        },
        proximoSlide: function( slide ) {
            var atualSlide = this.slides[slide];
            atualSlide.style.opacity = 1;
            for( var i = 0; i < this.slides.length; i++ ) {
                var slide = this.slides[i];
                if( slide !== atualSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        acao: function() {
            var eu = this;
            eu.timer = setInterval(function() {
                eu.index++;
                if( eu.index == eu.slides.length ) {
                    eu.index = 0;
                }
                eu.proximoSlide(eu.index );
            }, 4000);
        }
    };
    document.addEventListener( "DOMContentLoaded", function() {
        var slider = new MostrarSlide( "#main-slider" );
    });
})();