$(function() {

	var $taskname= $('#task_name');
	
	var $newtask = $('#new_task');

	var $listitem= $('#list_items'); 

	$newtask.on('submit', function(event) {
		event.preventDefault();
		var UL = $('#list_items').val();
		console.log(UL);

	duties.push(UL);

	$listitem.val("");

	$taskname.append('<li class="item">'+UL+'</li>');
});

 $taskname.on('click', '.item', function() {
    $(this).addClass('check');
    $(this).animate({opacity: '0.50'}, 1000);
  });

});

