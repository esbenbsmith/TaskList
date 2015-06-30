$(function() {

  var $newtask = $('#newtask');

  var $taskname = $('#task_name');

  var $list = $('#task_list');

  $taskname.on('submit', function(event) {
    event.preventDefault();
    var listtask = $('#task_name').val();
    console.log(listtask);

    // store our new shopping list item
    dutylist.push(listtask);

    // clear the form
    $list.val("");

    // append our new item to the page's shopping list
    $newtask.append('<li class="item">' + listItem + '</li>');
  });

  $newtask.on('click', '.item', function() {
    $(this).addClass('purchased');
    $(this).animate({opacity: '0.50'}, 1000);
  });

});