

$(document).ready(function() {
    //pulsar();
    menu();
});

function pulsar (){
    
    var elem = $("#click1");
    
    $('#click1').click(function mostrar(){
        
        console.log('lalala')
    });
}


// Mostrar y ocultar menu


function menu () {
    var i = 1;
    
    $('.menu_bar, nav li:not(.submenu) a').click(function(){
        
        console.log("clicked");
        
        if (i == 1) {
            $('nav').animate({
                left: '0'
            });
            i = 0;
        } else {
            i = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    

    // Mostramos y ocultamos submenus

    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}