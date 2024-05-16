$(function() {
    //função para fecha menu
    $('.nav-item').each(function() {
        $(this).on('click', function() {
            $('#menu').removeClass('show');
        });
    });

    //função para animação ao secrola a pagina
    const sections = $("section");

    const sizeWindows = $(window).height() * 0.6;

    function animateScroll(){
        sections.each((index, item) => {
            const itemTop = $(item).offset().top - $(window).scrollTop();
            const getSection = itemTop - sizeWindows < 0;
            if(getSection) {
                $(item).addClass('active');
            }else {
                $(item).removeClass('active');
            }
        });
    }

    $(window).scroll(function() {
        animateScroll();
    });

    //pega produto cado cliente queira 
    $(".card").on("click", function() {
        const getProduct = $(this).closest(".card").find("h4.card-title").text()
        $("#produto").val(getProduct)
    })

    //Enviar formulario

    $("#contato-mensagem").submit(function (event) {
        event.preventDefault()

        handleForm();
    })
    
    function handleForm() {
        alert("formulario enviado");
        $("#nome").val("");
        $("#email").val("");
        $("#produto").val("");
        $("#mensagem").val("");
    }
})




