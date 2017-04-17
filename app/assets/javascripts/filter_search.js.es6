$(document).ready(function() {
  $('.link-filter').on('keyup', function() {

    var input = $('input[name=link-filter]').val().toLowerCase()

    $('.link').each(function() {
      var linkTitle = $(this).children('td:nth-child(1)').text().toLowerCase()
      var linkUrl = $(this).children('td:nth-child(2)').text().toLowerCase()
    })
  })
})
