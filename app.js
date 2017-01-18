$(document).ready(function(){

	function numberOfSentences(text) {
		//var splitRegex = new RegExp(".!?");
		var sentences = text.split(".");
		return sentences;
	}

	function averageSentence(text){
		var sentences = numberOfSentences(text);
		var total = 0;
		for(i = 0; i < sentences.length; i++){
			total += sentences[i].length;
		}
		var average = total / sentences.length;
		$("#average-sentence").append(average);
	}

	function countWords(text){
		var words = text.split(" ");
		var wordCount = words.length;
		var mySet = new Set(words);
	    var uniqueWords = mySet.size();
		
		var wordTotal = 0;
		for(i = 0; i < words.length; i++){
			wordTotal += words[i].length;
			}
		var averageWord = wordTotal / wordCount;
	    

		
	    $("#unique-words").append(uniqueWords);
		$("#average-word").append(averageWord);
		$("#word-count").append(wordCount);
	}

	$('#text-form').submit(function(event) {
		event.preventDefault();
		var text = $('#user-text').val();
		averageSentence(text);
		countWords(text);
		$('.text-report').removeClass('hidden');

	});

});