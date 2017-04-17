class HotReads {
  static top10() {
    var hotReadsUrl = 'https://dr-hot-reads.herokuapp.com'

    return $.ajax({
      url: hotReadsUrl + '/api/v1/links',
      type: 'GET'
    })
  }
}
