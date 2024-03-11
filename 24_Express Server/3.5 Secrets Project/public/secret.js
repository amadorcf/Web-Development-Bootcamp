$(document).ready(function () {
    $('#show_password').click(function () {
      if ($('#show_password').is(':checked')) {
        $('#password').attr('type', 'text');
      } else {
        $('#password').attr('type', 'password');
      }
    });
  });