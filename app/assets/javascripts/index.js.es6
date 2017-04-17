$(document).ready(function() {

  HotReads.top10().done(function(response) {
    checkAgainstHotReads(response)
  })
})

function checkAgainstHotReads(hotReads) {
  var hotReads = hotReads
  var links = $('.link')

  for(var i = 0; i < links.length; i++ ) {
      var link = $(links[i])
      var linkUrl = $(links[i]).children('td:nth-child(2)').text()

    for(var j = 0; j < hotReads.length; j++) {
      var hotReadUrl = hotReads[j].url

      if(linkUrl == hotReadUrl && j == 0) {
        link.css('background-color', 'red');
      }
      else if(linkUrl == hotReadUrl) {
        link.css('background-color', 'yellow')
      }
    }
  }
}
