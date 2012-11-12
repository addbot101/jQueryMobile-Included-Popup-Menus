function leftMenu() {
	output = "";
	output += '<li class="remove home"><a data-transition="slide" href="#home" onclick="disabler(\'.home\')">Home</a></li>';	
	output += '<li class="remove taryn"><a data-transition="slide" href="#taryn" onclick="disabler(\'.taryn\')">Taryn Southern</a></li>';
	output += '<li class="remove flula"><a data-transition="slide" href="#flula" onclick="disabler(\'.flula\')">Flula Borg</a></li>';			
	$('.leftMenu').html(output);
}

function rightMenu() {
	output = "";
	output += '<li class="remove monkeys"><a data-transition="slide" href="#monkeys" onclick="disabler(\'.monkeys\')"># of Monkeys</a></li>';	
	$('.rightMenu').html(output);
}

function disabler (id) {
	//remove all instances of link disabler
	$('.remove').removeClass("ui-disabled");	
	//add link disabler to the page user is navigating too
	$(id).addClass("ui-disabled");
}

function firstDisable() {
	var url = window.location.href;
	var check = url.search("#");

	if (check == -1) {
    	disabler('.home');
	} else {
		var id = url.substring(check);
		id = id.replace('#', '.');
		console.log(id);
		disabler(id);
	}	
}

