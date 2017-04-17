$(document).ready(function() {

  HotReads.top10().done(function(response) {
    checkAgainstHotReads(response)
  })
})

function checkAgainstHotReads(links) {
  var hotReads = links
  var links = $('.link')

  for(var i = 0; i < links.length; i++ ) {
      var linkUrl = $(links[i]).children('td:nth-child(2)').text()

    for(var j = 0; j < hotReads.length; j++) {
      var hotReadUrl = hotReads[j].url

      if(linkUrl == hotReadUrl) {
        console.log("We got a hot read!!!")
      }
    }
  }
}
