$(function(){

    $('#containerBotoesMenu').click(function(){
        $('#containerMenuAbsoluto').css('display','block')
    }) 

    $('#menuAbsoluto .material-symbols-outlined').click(function(){
        $('#containerMenuAbsoluto').css('display','none')
    })

    $('#containerMenuAbsoluto').click(function(event) {
        if (event.target === this) {
            $('#containerMenuAbsoluto').css('display','none')
        }
    });

    $('header > .material-symbols-outlined').click(function(){
        if($('#boxPesquisa').css('display') == 'none'){
            $('#boxPesquisa').css('display','flex').css('position','absolute').css('width','93%').css('top','90px').css('height','40px');
        }else{
            $('#boxPesquisa').css('display','none').css('position','static').css('width','300px').css('height','50px');
        }
    })

    $(window).resize(function(){
        if($(window).innerWidth() > 1200){
            $('#boxPesquisa').css('display','flex').css('position','relative').css('width','300px').css('height','50px').css('color','black').css('top','0');
        }else{
            $('#boxPesquisa').css('display','none').css('position','static').css('width','300px').css('height','50px');
        }
    })

})