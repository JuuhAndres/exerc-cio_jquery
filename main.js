$(document).ready(function(){
 //Abrir Formulário   
    $('#botao-abrir').click(function(){
        $('form').slideDown();
    })
//Fechar Formulário
    $('#botao-fechar').click(function(){
        $('form').slideUp();
    })

//Tirar o Reload da página quando clicado no botão de adicionar
    $('form').on('submit',(e)=>{
        e.preventDefault();
    //Para inserir as novas tarefas
        const receberNovaTarefa = $('#addtarefa').val();
    //Adicionando o formulário com as novas tarefas
        const novaTarefa=$ (`<li></li>`);
        $(`<li>${receberNovaTarefa}</li>`).appendTo(novaTarefa);
    //Adicionando o li na Ul do HTML  
        $(novaTarefa).appendTo('ul');
    //Para limpar a barra de pesquisa
        $('#addtarefa').val('');

    })
    //Riscado
    $('ul').on('click','li', function(){
        $(this).css('text-decoration', 'line-through');
        
    })
    //Apagar lista
    $('#deletar-tabela').on('click', function(){
        $('li').remove();
    })
})
