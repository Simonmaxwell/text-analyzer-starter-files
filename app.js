
function averageSentence(text){
	var sentences = text.split(".");
	var total = 0;
	for(i = 0; i < sentences.length; i++){
		total += sentences[i].length;
	}
	var average = total / sentences.length;
	$("#average-sentence").append(average);
}

function submissionListener() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}
