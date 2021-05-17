$(function () {
  $(document).ready(() => {
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
  });
});
