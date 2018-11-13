
var form = $('#Form1'),
    url = 'https://script.google.com/a/newschool.edu/macros/s/AKfycbwDxuK5RcF8YvR2h-lX3uFHR9zxyd9Crd9M0dp343vepzhYN5U/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject()
  }).success(
    // do something
  );
})
