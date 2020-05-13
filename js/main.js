/*******************************************
 Configuration
 *******************************************/

/*******************************************
 Global variable
 *******************************************/
var questions = [];

/*******************************************
 Execute when document is ready
 *******************************************/
$(document).ready(function() {
   
  // -------------------------------
  // Populate topic dropdown
  // ------------------------------- 
  // Get topic dropdown list 
  var $dropdown = $("#topic");
  // Empty the list
  //$dropdown.empty();
  // Populate it with topics  
  $.each(Object.keys(questions_by_topic), function(index, value) {
    $dropdown.append("<option>" + value + "</option>");
  });

  // -------------------------------
  // Handle change action
  // ------------------------------- 
  $("#topic").change(function() {
    // Get the dropdown
    var $dropdown = $(this);
    // Get value
    var topic = $dropdown.val();
    // Set varible questions
    questions = questions_by_topic[topic];
  });

});


/*******************************************
 Helper methods
 *******************************************/
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min; 
}

/*******************************************
 Main methods
 *******************************************/
function next() {

  // Select a random question
  var idx = getRandomInteger(0, questions.length);

  // Display the question in the div
  document.getElementById('question').innerHTML = questions[idx];

  // Delete previous progress bar
  document.getElementById('progressbar').innerHTML = ''

  // Get the loading bar duration
  var duration = document.getElementById('duration').value

  // Create a progress bar
  var bar = new ProgressBar.Line(progressbar, {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: duration*1000,
    color: '#ffbb99',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '100%'}
  });

  // Animate
  bar.animate(1.0);
}


function start() {
  setInterval(function() {
    console.log('start')
  }, 5000)
}


function stop() {}



