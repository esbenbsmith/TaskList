$(function() {

	var $taskname= $('#task_name');
	
	var $newtask = $('#new_task');

	var $listitem= $('#item'); 

	var petsTemplate = _.template($('#pets-template').html());

	var $temp= $('#template');

	var pets = [
  {name: "Sprinkles", species: "cat"},
  {name: "Bagel", species: "dog"},
  {name: "Fluffy", species: "dinosaur"}];

  _.each(pets, function (pet, index) {
  var $pet = $(petsTemplate(pet));
  $pet.attr('data-index', index);
  $petsList.append($pet);
});
  
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