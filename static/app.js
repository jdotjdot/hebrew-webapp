$(function() {
  $('#input').on('input', function() {
    var url;
    if (Number.isNaN(+$('#input').val())) {
      url = '/decode';
      $("#input").addClass('hebrew');
      $("#output").removeClass('hebrew');
    } else {
      url = '/encode';
      $("#input").removeClass('hebrew');
      $("#output").addClass('hebrew');
    }

    $.ajax(url, {
      data: {
        input: $('#input').val()
      },
      success: function(response) {
        $('#output').val(response);
      },
      error: function(error) {
        $('#output').val("");
      }
    });
  });
});