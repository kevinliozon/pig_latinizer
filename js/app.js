$(document).ready(function(){
	$(document).foundation();
	$('.app').click(
		function() 
		{	
			event.preventDefault(); // prevents the page to refresh
			$('#description, #pig_form').toggle(); // switch between the description and the form
		}
	);
	$('#pig_form .button').click(
		function() 
		{	
			event.preventDefault(); // prevents the page to refresh
			var to_pig = $('input[name="value_to_pig"]').val(); // the value in the input
			var first_letter = to_pig.charAt(0); // retrieve the first character
			var findVowel =  function (first_letter)
			{
					if(first_letter.match(/[aeiouAEIOU]/)) //if the first character is a vowel
					{
						$('#pig_form p').text(to_pig+'way'); //add "way" at the end of the word
					}
					else if(first_letter.match(/[0-9]/)) //if the first character is a number - INVALID
					{
						$('#pig_form p').text('please enter a correct value - this one should only contain letters and no symbol or numbers');
					}
					else //if the first character is a consonant
					{						
						var moved_first = to_pig.replace(first_letter, ''); //remove the first character
						to_pig = moved_first+first_letter; //add the first character again at the end of the word
						$('#pig_form p').text(to_pig+'ay'); //add "ay" at the end of the word
					}
			};
			findVowel(first_letter);
		}
	);
});
