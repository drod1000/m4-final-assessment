class HotReads {
  static top10() {
    var hotReadsUrl = 'https://dr-hot-reads.herokuapp.com'

    return $.ajax({
      url: hotReadsUrl + '/api/v1/links',
      type: 'GET'
    })
  }

  static createReadRecord(linkUrl) {
    $.ajax({
      type: "POST",
      url: "https://dr-hot-reads.herokuapp.com/api/v1/links",
      data: { url: linkUrl }
    })
  }
}
