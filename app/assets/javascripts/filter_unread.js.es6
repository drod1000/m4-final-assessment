$(document).ready(function() {
  $('.show-unread').on('click', function() {

    $('.link').each(function() {
      $(this).show()
    })

    $('.link').each(function() {
      var readStatus = $(this).children('td.read-status').text()

      if(readStatus == 'true') {
        $(this).hide()
      }
    })
  })
})
