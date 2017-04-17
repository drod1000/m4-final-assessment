$(document).ready(function() {
  $('.link-filter').on('keyup', function() {

    $('.link').each(function() {
      $(this).show()
    })

    var input = $('input[name=link-filter]').val().toLowerCase()

    $('.link').each(function() {
      var linkTitle = $(this).children('td:nth-child(1)').text().toLowerCase()
      var linkUrl = $(this).children('td:nth-child(2)').text().toLowerCase()

      if(!linkTitle.includes(input) && !linkUrl.includes(input)) {
        $(this).hide()
      }
    })
  })
})
