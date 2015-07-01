$(function() {

	var $taskname= $('#task_name');
	
	var $newtask = $('#new_task');

	var $listitem= $('#item'); 

	$newtask.on('submit', function(event) {
		event.preventDefault();
		var UL = $('#taskName').val();
		console.log(UL);

	$taskname.push(UL);

	$listitem.val("");

	$taskname.append('<li class="item">'+UL+'</li>');
});

 $taskname.on('click', '.item', function() {
    // check line 23 out changed the paramater in addClass() from checked to done.
    $(this).addClass('done');
    $(this).animate({opacity: '0.50'}, 1000);
  });

 $( "#item" ).click(function() {
  	$(this).addClass('done');
});



});

var duties=["beer","beer","beer"];