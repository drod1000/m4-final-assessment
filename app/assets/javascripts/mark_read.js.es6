$(document).ready(function() {
  $('.mark-as-read').on('click', function() {

    var link = $(this).parent('.link')
    var linkId = link.attr('id')
    var linkUrl = link.children('td:nth-child(2)').text()

    $.ajax({
      type: "PATCH",
      url: "/api/v1/links/" + linkId,
      data: { read: true}
    }).done(function(response) {
      updateLinkStatus(response)
    })

    HotReads.createReadRecord(linkUrl)
  })
})

function updateLinkStatus(link) {
  $(`.link[id=${link.id}]`).find('.read-status').text(link.read)
}
