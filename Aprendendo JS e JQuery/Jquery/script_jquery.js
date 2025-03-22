//Simplificando jQuery

// $(function(){
//     $('button').click(function(){
//         $('h1').hide();
//     });
// });

$(document).ready(function () {
    // $('button').click(function(){
    //     // $('h1').hide();
    //     // $('h1').css("color","red");
    //     // $('#unico').css("color","blue"); 
    // });
    $('#azul').click(function () {
        // $('p').css("color","blue");
        // $('p').css("font-size","25px");

        //Efeito Fade
        // $('p').css("background-color","blue");
        // $('p').fadeOut();
        // $('p').delay(1000);
        // $('p').fadeIn();

        //Delay
        // $('p').css("background-color", "blue");
        // $('p').fadeOut(3000);
        // // $('p').fadeIn('fast');
        // $('p').fadeIn(3000);

        //Gravando mensagens
        // $('p').css("background-color", "blue");
        // $('#mensagem').text("Cor alterada com sucesso");
        // $('#mensagem').css('color','red');
        // $('#mensagem').css('border','1px solid blue');
        // $('#mensagem').delay(3000);
        // $('#mensagem').fadeOut('fast');
    })

    $('#vermelho').click(function () {
        // $('p').css("color","red");
        // $('p').css("font-size","25px");

        //Efeito Fade
        // $('p').css("background-color","red");
        // $('p').fadeOut('slow');
        // $('p').delay(1000);
        // $('p').fadeIn('slow');

        //Delay
        // $('p').css("background-color", "red");
        // $('p').fadeOut(3000);
        // // $('p').fadeIn('fast');
        // $('p').fadeIn(3000);

        //Gravando mensagens
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color','red');
        $('#mensagem').css('border','1px solid red');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    })
});

