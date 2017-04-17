$(document).ready(function() {
  $('.show-read').on('click', function() {

    $('.link').each(function() {
      $(this).show()
    })

    $('.link').each(function() {
      var readStatus = $(this).children('td.read-status').text()

      if(readStatus == 'false') {
        $(this).hide()
      }
    })
  })
})
