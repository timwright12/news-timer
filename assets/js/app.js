(function ($, w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var App = {};

  // Namespace
  App.ns = "NewsTimer";

  // Start defining methods here
  App.init = function() {
    
    $('#start').on('click', function() {
      var target = $('#time');
      App.startTimer(5, target);
    });
    
  };
  
  // Stop a timer
  App.stopTimer = function(timerName) {
    clearInterval(timerName);
  };
  
  // start a timer
  App.startTimer = function(mins, target) {

    var totalTime = 60 * mins,
        display = target,
        mins, seconds;
 
    var timer = setInterval(function() {
    
      mins = parseInt(totalTime / 60)
      seconds = parseInt(totalTime % 60);
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      display.text(mins + ":" + seconds);
      totalTime--;
      
      if (totalTime < 0) {
        App.stopTimer(timer);
      }
    
    }, 1000);

  };
  
  // move to next news item
  App.nextItem = function(prev, next) {
    
  };
  
  // Start the application
  App.init();

} )( jQuery, this, this.document );