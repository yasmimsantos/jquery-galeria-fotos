$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown()
  })

  $('#botao-cancelar').click(function () {
    $('form').slideUp()
  })

  $('form').on('submit', function (e) {
    e.preventDefault()
    const nomeNovaTarefa = $('#nome-tarefa-nova').val()
    const novoItem = $('<li style="display: none"></li>')
    $(`<p>${nomeNovaTarefa}</p>`).appendTo(novoItem)
    $(`
      <div class = "nova-tarefa">
        <li ${nomeNovaTarefa}"
      </div>
      `).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)

    $('li').click(function () {
      $(this).css('text-decoration', 'line-through')
    })

    $('#nome-tarefa-nova').val('')
  })
})
