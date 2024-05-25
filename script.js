$(document).ready(function (){

  //Adicionar tarefa 
  $('#adiciona_nova_tesk').on('click', function() {
      var tarefaText = $('#taskInput').val();
      var input_task = $('#taskInput');
      
      
      if(tarefaText.length > 0){
        addtesk(tarefaText);

        $('#taskInput').val('');
      }

  });



  // Função para adicionar as tarefas
  function addtesk(text){
    $('#taskList').append(
      `<li class="item-list">
        <span >&times;</span>
        <p>${text}</p>
      </li>`
    )
  }

  // Marcar/desmarcar tarefa concluida
  $(document).on('click', 'li', function (){
    $(this).toggleClass('completed');
  })

  // Remover tarefas
  $(document).on('click', 'span', function (e) {

    e.stopPropagation(); // Evita a propagação do evento para o elemento pai (li)
    $(this).parent().fadeOut(500, function () { // Pega o elemento pai do span e da um fadeOut de 500 ms
      $(this).remove();

    })
  })
})