$(function () {
  $.ajax({
    url: '/user',
    method: 'GET',
    success: (response) => {
      response.forEach((user) => {
        let time = new Date(user.createdAt);
        $('#user').append(
          '<tr><td>' +
            user.name +
            '</td><td>' +
            user.email +
            '</td><td>' +
            time +
            '</td></tr>',
        );
      });
    },
  });

  $('#buttonS').on('click', () => {
    let name = $('#name');
    let email = $('#email');
    $.ajax({
      url: '/create',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name.val(),
        email: email.val(),
      }),
      success: function (response) {
        console.log(response);
        name.val('');
        email.val('');
        let time = new Date(response.createdAt);
        $('#user').append(
          '<tr><td>' +
            response.name +
            '</td><td>' +
            response.email +
            '</td><td>' +
            time +
            '</td></tr>',
        );
      },
    });
  });
});
