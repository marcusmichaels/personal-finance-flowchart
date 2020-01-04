var intro         = document.getElementById('intro'),
    phaseOne      = document.getElementById('phase-one'),
    phaseTwo      = document.getElementById('phase-two'),
    phaseThree    = document.getElementById('phase-three'),
    phaseFour     = document.getElementById('phase-four'),
    phaseFive     = document.getElementById('phase-five'),
    phaseSix      = document.getElementById('phase-six'),
    phaseSeven    = document.getElementById('phase-seven'),
    phaseEight    = document.getElementById('phase-eight'),
    phaseNine     = document.getElementById('phase-nine'),
    phaseTen      = document.getElementById('phase-ten'),
    phaseEleven   = document.getElementById('phase-eleven'),
    phaseTwelve   = document.getElementById('phase-twelve'),
    phaseThirteen = document.getElementById('phase-thirteen'),
    phaseFourteen = document.getElementById('phase-fourteen'),
    phaseFourteenA= document.getElementById('phase-fourteen-a'),
    phaseFourteenB= document.getElementById('phase-fourteen-b'),
    phaseFifteen  = document.getElementById('phase-fifteen'),
    phaseSixteen  = document.getElementById('phase-sixteen'),

    endpointOne   = document.getElementById('endpoint-one'),

    q1 = q2 = q3 = q4 = q5 = q6 = q7 = q8 = q9 = q10 = q11 = q12 = false;

    flowPath = [intro];

function addArrow(q,x) {
  var qs = "#" + x + " .choices";
  if (!q) {
    document.getElementById(x).classList.add("arrow-down");
    q = true;
  }
}

function hideLaterPhases(q, phase) {
  resetQuestions(phase);
  i = flowPath.indexOf(phase) + 1;
  if (i < 0) return;
  
  noPhases = flowPath.length
  for (i; i < noPhases; i++) {
    e = flowPath.pop();
    resetQuestions(e);
    e.style.display = "none";
    e.style.opacity = 0;
  }

  q.classList.add("selected");
}

function resetQuestions(phase){
  allChildren = phase.getElementsByTagName('div');
  for (var i = 0; i < allChildren.length; i++) {
    div = allChildren[i];
    if (div.classList.contains("choice")) div.classList.remove("selected");
    if (div.id.search("question") == 0 ||
        div.classList.contains('active')) div.classList.remove("arrow-down");
  }
}

function continueFlow(e, phase){
  e.classList.add('arrow-down', 'active');
  showPhase(phase);
}

function showPhase(phase) {
  flowPath.push(phase);
  phase.style.display="block";

  switch(phase) {
    
    case phaseOne: 
      intro.outerHTML = "";
      break;

    case phaseTwo:
      addArrow(q1, 'question-1');
      break;

    case phaseThree:
      addArrow(q1, 'question-1');
      break;

    case phaseFour:
      addArrow(q2, 'question-2');
      break;

    case phaseFive:
      addArrow(q2, 'question-2');
      break;

    case phaseSix:
      addArrow(q3, 'question-3');
      break;

    case phaseSeven:
      addArrow(q3, 'question-3');
      break;

    case phaseEight:
      addArrow(q4, 'question-4');
      break;

    case phaseNine:
      addArrow(q4, 'question-4');
      break;

    case phaseTen:
      addArrow(q5, 'question-5');
      break;

    case phaseEleven:
      addArrow(q6, 'question-6');
      break;

    case phaseTwelve:
      addArrow(q7, 'question-7');
      break;

    case phaseThirteen:
      addArrow(q7, 'question-7');
      break;

    case phaseFourteen:
      addArrow(q8, 'question-8');
      addArrow(q9, 'question-9');
      break;

    case phaseFourteenA:
      addArrow(q10, 'question-10');
      break;

    case phaseFourteenB:
      addArrow(q10, 'question-10');
      addArrow(q11, 'question-11');

      break;

    case phaseFifteen:
      addArrow(q6, 'question-6');
      addArrow(q8, 'question-8');
      addArrow(q9, 'question-9');
      addArrow(q11, 'question-11');
      addArrow(q12, 'question-12');
      break;

    case phaseSixteen:
      addArrow(q8, 'question-8');
      addArrow(q9, 'question-9');
      break;
  }

  setTimeout(function(){
    phase.style.opacity = "1";
  },100);
}