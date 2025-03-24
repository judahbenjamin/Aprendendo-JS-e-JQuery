//Simplificando jQuery

// $(function(){
//     $('button').click(function(){
//         $('h1').hide();
//     });
// });

// $(document).ready(function () {
//     // $('button').click(function(){
//     //     // $('h1').hide();
//     //     // $('h1').css("color","red");
//     //     // $('#unico').css("color","blue"); 
//     // });
//     $('#azul').click(function () {
//         // $('p').css("color","blue");
//         // $('p').css("font-size","25px");

//         //Efeito Fade
//         // $('p').css("background-color","blue");
//         // $('p').fadeOut();
//         // $('p').delay(1000);
//         // $('p').fadeIn();

//         //Delay
//         // $('p').css("background-color", "blue");
//         // $('p').fadeOut(3000);
//         // // $('p').fadeIn('fast');
//         // $('p').fadeIn(3000);

//         //Gravando mensagens
//         // $('p').css("background-color", "blue");
//         // $('#mensagem').text("Cor alterada com sucesso");
//         // $('#mensagem').css('color','red');
//         // $('#mensagem').css('border','1px solid blue');
//         // $('#mensagem').delay(3000);
//         // $('#mensagem').fadeOut('fast');

//         //Encadeamento em bloco
//         // $('p').css("background-color", "blue");
//         // $('#mensagem')
//         //     .text("Cor alterada com sucesso")
//         //     .css('color','red')
//         //     .css('border','1px solid blue')
//         //     .delay(3000)
//         //     .fadeOut('fast');

//         //Declaração múltipla de CSS
//         $('p').css("background-color", "blue");
//         $('#mensagem')
//             .text("Cor alterada com sucesso")
//             .css({ color: 'red', border: '1px solid blue' })
//             .delay(3000)
//             .fadeOut('fast');
//     })

//     $('#vermelho').click(function () {
//         // $('p').css("color","red");
//         // $('p').css("font-size","25px");

//         //Efeito Fade
//         // $('p').css("background-color","red");
//         // $('p').fadeOut('slow');
//         // $('p').delay(1000);
//         // $('p').fadeIn('slow');

//         //Delay
//         // $('p').css("background-color", "red");
//         // $('p').fadeOut(3000);
//         // // $('p').fadeIn('fast');
//         // $('p').fadeIn(3000);

//         //Gravando mensagens
//         // $('p').css("background-color", "red");
//         // $('#mensagem').text("Cor alterada com sucesso");
//         // $('#mensagem').css('color','red');
//         // $('#mensagem').css('border','1px solid red');
//         // $('#mensagem').delay(3000);
//         // $('#mensagem').fadeOut('fast');

//         //Encadeamento em bloco
//         // $('p').css("background-color", "red");
//         // $('#mensagem')
//         //     .text("Cor alterada com sucesso")
//         //     .css('color', 'red')
//         //     .css('border', '1px solid red')
//         //     .delay(3000)
//         //     .fadeOut('fast');

//         //Declaração múltipla de CSS
//         // $('p').css("background-color", "red");
//         // $('#mensagem')
//         //     .text("Cor alterada com sucesso")
//         //     .css({ color: 'red', border: '1px solid red', backgroundColor: '#F08080' })
//         //     .delay(3000)
//         //     .fadeOut('fast');

//         //Adicionando e removendo classes
//         $('p').css("background-color", "red");
//         $('#mensagem')
//             .text("Cor alterada com sucesso")
//             .css({ color: 'red', border: '1px solid red'})
//             .delay(3000)
//             .addClass('green')

//         $('button').removeClass('red');
//     })
// });

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    })

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    })

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    })

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    })
});
