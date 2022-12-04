const speechRecognition = new webkitSpeechRecognition();
speechRecognition.onresult = function (event) {
  var results = event.results;
  if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
};
speechRecognition.continuous = true;
speechRecognition.start();
