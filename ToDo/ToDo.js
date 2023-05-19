$(document).ready(function () {
  handleCheck();
  handleDelete();

  $('.txtb').keypress(function (key) {
    if (key.which == 13 && $('.txtb').val() != '') {
      notCompletedTask();
    }
  });
});

function notCompletedTask() {
  var task = $("<div class='task'></div>");
  task.text($('.txtb').val());
  var dellIcon = $("<i class='icon fas fa-trash-alt'></i>");
  var checkIcon = $("<i class='icon fas fa-check'></i>");
  task.append(dellIcon, checkIcon);
  $('.not-complete').append(task);
  $('.txtb').val('');
}

function handleCheck() {
  $(document).on('click', '.fa-check', function () {
    var temp = $(this).parent();
    $(this).parent().remove();
    $('.complete').append(temp);
    $(this).remove();
  });
}

function handleDelete() {
  $(document).on('click', '.fa-trash-alt', function () {
    $(this).parent().remove();
  });
}
