/********************* 
 * Wavetrialexp Test *
 *********************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.175, 0.175, 0.175]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'wavetrialexp';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(MorphInstructionsRoutineBegin());
flowScheduler.add(MorphInstructionsRoutineEachFrame());
flowScheduler.add(MorphInstructionsRoutineEnd());
flowScheduler.add(SecondMorphInstructionsRoutineBegin());
flowScheduler.add(SecondMorphInstructionsRoutineEachFrame());
flowScheduler.add(SecondMorphInstructionsRoutineEnd());
const trialsHypodescentLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsHypodescentLoopBegin, trialsHypodescentLoopScheduler);
flowScheduler.add(trialsHypodescentLoopScheduler);
flowScheduler.add(trialsHypodescentLoopEnd);
flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Morphed Face Stimuli/UG70.4.jpg', 'path': 'Morphed Face Stimuli/UG70.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.8.jpg', 'path': 'Morphed Face Stimuli/UG80.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.5.jpg', 'path': 'Morphed Face Stimuli/UG50.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.8.jpg', 'path': 'Morphed Face Stimuli/UG40.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.8.jpg', 'path': 'Morphed Face Stimuli/UG60.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.6.jpg', 'path': 'Morphed Face Stimuli/UG70.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.5.jpg', 'path': 'Morphed Face Stimuli/UG40.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.7.jpg', 'path': 'Morphed Face Stimuli/UG30.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.1.jpg', 'path': 'Morphed Face Stimuli/UG50.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.7.jpg', 'path': 'Morphed Face Stimuli/UG0.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.4.jpg', 'path': 'Morphed Face Stimuli/UG0.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.6.jpg', 'path': 'Morphed Face Stimuli/UG50.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.2.jpg', 'path': 'Morphed Face Stimuli/UG60.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.4.jpg', 'path': 'Morphed Face Stimuli/UG10.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.7.jpg', 'path': 'Morphed Face Stimuli/UG10.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.8.jpg', 'path': 'Morphed Face Stimuli/UG90.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.3.jpg', 'path': 'Morphed Face Stimuli/UG70.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.6.jpg', 'path': 'Morphed Face Stimuli/UG20.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.3.jpg', 'path': 'Morphed Face Stimuli/UG40.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.7.jpg', 'path': 'Morphed Face Stimuli/UG100.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.5.jpg', 'path': 'Morphed Face Stimuli/UG90.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.3.jpg', 'path': 'Morphed Face Stimuli/UG80.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.6.jpg', 'path': 'Morphed Face Stimuli/UG80.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.5.jpg', 'path': 'Morphed Face Stimuli/UG20.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.3.jpg', 'path': 'Morphed Face Stimuli/UG0.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.5.jpg', 'path': 'Morphed Face Stimuli/UG70.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.2.jpg', 'path': 'Morphed Face Stimuli/UG100.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.4.jpg', 'path': 'Morphed Face Stimuli/UG80.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.2.jpg', 'path': 'Morphed Face Stimuli/UG40.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.7.jpg', 'path': 'Morphed Face Stimuli/UG20.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.6.jpg', 'path': 'Morphed Face Stimuli/UG0.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.6.jpg', 'path': 'Morphed Face Stimuli/UG60.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.6.jpg', 'path': 'Morphed Face Stimuli/UG100.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.6.jpg', 'path': 'Morphed Face Stimuli/UG40.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.5.jpg', 'path': 'Morphed Face Stimuli/UG0.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.8.jpg', 'path': 'Morphed Face Stimuli/UG30.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.8.jpg', 'path': 'Morphed Face Stimuli/UG0.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.5.jpg', 'path': 'Morphed Face Stimuli/UG60.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.4.jpg', 'path': 'Morphed Face Stimuli/UG100.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.8.jpg', 'path': 'Morphed Face Stimuli/UG20.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.7.jpg', 'path': 'Morphed Face Stimuli/UG50.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.4.jpg', 'path': 'Morphed Face Stimuli/UG40.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.1.jpg', 'path': 'Morphed Face Stimuli/UG70.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.3.jpg', 'path': 'Morphed Face Stimuli/UG100.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.6.jpg', 'path': 'Morphed Face Stimuli/UG10.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.7.jpg', 'path': 'Morphed Face Stimuli/UG80.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.7.jpg', 'path': 'Morphed Face Stimuli/UG70.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.7.jpg', 'path': 'Morphed Face Stimuli/UG60.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.1.jpg', 'path': 'Morphed Face Stimuli/UG40.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.4.jpg', 'path': 'Morphed Face Stimuli/UG60.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.2.jpg', 'path': 'Morphed Face Stimuli/UG10.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.6.jpg', 'path': 'Morphed Face Stimuli/UG90.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.8.jpg', 'path': 'Morphed Face Stimuli/UG100.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.2.jpg', 'path': 'Morphed Face Stimuli/UG70.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.3.jpg', 'path': 'Morphed Face Stimuli/UG50.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.3.jpg', 'path': 'Morphed Face Stimuli/UG10.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.6.jpg', 'path': 'Morphed Face Stimuli/UG30.6.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.4.jpg', 'path': 'Morphed Face Stimuli/UG90.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.8.jpg', 'path': 'Morphed Face Stimuli/UG10.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.3.jpg', 'path': 'Morphed Face Stimuli/UG20.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.5.jpg', 'path': 'Morphed Face Stimuli/UG80.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.1.jpg', 'path': 'Morphed Face Stimuli/UG20.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.5.jpg', 'path': 'Morphed Face Stimuli/UG100.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.1.jpg', 'path': 'Morphed Face Stimuli/UG0.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.8.jpg', 'path': 'Morphed Face Stimuli/UG50.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.5.jpg', 'path': 'Morphed Face Stimuli/UG30.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.2.jpg', 'path': 'Morphed Face Stimuli/UG50.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.2.jpg', 'path': 'Morphed Face Stimuli/UG20.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG100.1.jpg', 'path': 'Morphed Face Stimuli/UG100.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.7.jpg', 'path': 'Morphed Face Stimuli/UG90.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.1.jpg', 'path': 'Morphed Face Stimuli/UG10.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG70.8.jpg', 'path': 'Morphed Face Stimuli/UG70.8.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.3.jpg', 'path': 'Morphed Face Stimuli/UG60.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.2.jpg', 'path': 'Morphed Face Stimuli/UG80.2.jpg'},
    {'name': 'trialimagestimuli.xlsx', 'path': 'trialimagestimuli.xlsx'},
    {'name': 'Morphed Face Stimuli/UG90.2.jpg', 'path': 'Morphed Face Stimuli/UG90.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG80.1.jpg', 'path': 'Morphed Face Stimuli/UG80.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG10.5.jpg', 'path': 'Morphed Face Stimuli/UG10.5.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.1.jpg', 'path': 'Morphed Face Stimuli/UG30.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG0.2.jpg', 'path': 'Morphed Face Stimuli/UG0.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.4.jpg', 'path': 'Morphed Face Stimuli/UG30.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG60.1.jpg', 'path': 'Morphed Face Stimuli/UG60.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.3.jpg', 'path': 'Morphed Face Stimuli/UG90.3.jpg'},
    {'name': 'Morphed Face Stimuli/UG90.1.jpg', 'path': 'Morphed Face Stimuli/UG90.1.jpg'},
    {'name': 'Morphed Face Stimuli/UG50.4.jpg', 'path': 'Morphed Face Stimuli/UG50.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.2.jpg', 'path': 'Morphed Face Stimuli/UG30.2.jpg'},
    {'name': 'Morphed Face Stimuli/UG40.7.jpg', 'path': 'Morphed Face Stimuli/UG40.7.jpg'},
    {'name': 'Morphed Face Stimuli/UG20.4.jpg', 'path': 'Morphed Face Stimuli/UG20.4.jpg'},
    {'name': 'Morphed Face Stimuli/UG30.3.jpg', 'path': 'Morphed Face Stimuli/UG30.3.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var textPractice;
var key_resp;
var MorphInstructionsClock;
var textInstructions;
var key_resp_3;
var SecondMorphInstructionsClock;
var textMorphInstructions2;
var key_resp_4;
var fixcrossClock;
var fixationcross;
var newimagetrialClock;
var Morphimage;
var key_resp_2;
var textBlack;
var textWhite;
var metacogClock;
var confidenceslider;
var confidenceText;
var Morphimage_metacog;
var EndScreenClock;
var textEnd;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  textPractice = new visual.TextStim({
    win: psychoJS.window,
    name: 'textPractice',
    text: 'Welcome to the experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MorphInstructions"
  MorphInstructionsClock = new util.Clock();
  textInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions',
    text: "For this task, you will be shown a series of faces and will be asked to determine the racial group that each face belongs to, which will either be Black or White. \n\nAlthough some faces will be of mixed-race heritage, please use the racial label that you feel most closely reflects that person's race.\n\nPress 'space' to continue.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SecondMorphInstructions"
  SecondMorphInstructionsClock = new util.Clock();
  textMorphInstructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textMorphInstructions2',
    text: "For each face, you can either press 'f' for Black or 'j' for White. Try your best to move quickly.\n\nYou will now begin the task.\n\nPress 'space' to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixcross"
  fixcrossClock = new util.Clock();
  fixationcross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixationcross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "newimagetrial"
  newimagetrialClock = new util.Clock();
  Morphimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Morphimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.293, 0.4],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textBlack = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlack',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.75), 0.45], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  textWhite = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWhite',
    text: 'White',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.75, 0.45], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "metacog"
  metacogClock = new util.Clock();
  confidenceslider = new visual.Slider({
    win: psychoJS.window, name: 'confidenceslider',
    size: [1.0, 0.1], pos: [0, (- 0.3)], units: 'height',
    labels: ["Not at all confident", "Very confident"], ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 80, 90, 100],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('#006400'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  confidenceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidenceText',
    text: 'How confident do you feel about that categorization decision?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Morphimage_metacog = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Morphimage_metacog', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.293, 0.4],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  textEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEnd',
    text: 'Thank you for participating!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(textPractice);
    WelcomeScreenComponents.push(key_resp);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textPractice* updates
    if (t >= 0.0 && textPractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textPractice.tStart = t;  // (not accounting for frame time here)
      textPractice.frameNStart = frameN;  // exact frame index
      
      textPractice.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'WelcomeScreen'-------
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var MorphInstructionsComponents;
function MorphInstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'MorphInstructions'-------
    t = 0;
    MorphInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    MorphInstructionsComponents = [];
    MorphInstructionsComponents.push(textInstructions);
    MorphInstructionsComponents.push(key_resp_3);
    
    for (const thisComponent of MorphInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MorphInstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'MorphInstructions'-------
    // get current time
    t = MorphInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions* updates
    if (t >= 0.0 && textInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions.tStart = t;  // (not accounting for frame time here)
      textInstructions.frameNStart = frameN;  // exact frame index
      
      textInstructions.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MorphInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MorphInstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'MorphInstructions'-------
    for (const thisComponent of MorphInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "MorphInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var SecondMorphInstructionsComponents;
function SecondMorphInstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SecondMorphInstructions'-------
    t = 0;
    SecondMorphInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    SecondMorphInstructionsComponents = [];
    SecondMorphInstructionsComponents.push(textMorphInstructions2);
    SecondMorphInstructionsComponents.push(key_resp_4);
    
    for (const thisComponent of SecondMorphInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SecondMorphInstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SecondMorphInstructions'-------
    // get current time
    t = SecondMorphInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textMorphInstructions2* updates
    if (t >= 0.0 && textMorphInstructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textMorphInstructions2.tStart = t;  // (not accounting for frame time here)
      textMorphInstructions2.frameNStart = frameN;  // exact frame index
      
      textMorphInstructions2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SecondMorphInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SecondMorphInstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SecondMorphInstructions'-------
    for (const thisComponent of SecondMorphInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "SecondMorphInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialsHypodescent;
var currentLoop;
function trialsHypodescentLoopBegin(trialsHypodescentLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsHypodescent = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trialimagestimuli.xlsx', '0:89'),
    seed: undefined, name: 'trialsHypodescent'
  });
  psychoJS.experiment.addLoop(trialsHypodescent); // add the loop to the experiment
  currentLoop = trialsHypodescent;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialsHypodescent of trialsHypodescent) {
    const snapshot = trialsHypodescent.getSnapshot();
    trialsHypodescentLoopScheduler.add(importConditions(snapshot));
    trialsHypodescentLoopScheduler.add(fixcrossRoutineBegin(snapshot));
    trialsHypodescentLoopScheduler.add(fixcrossRoutineEachFrame(snapshot));
    trialsHypodescentLoopScheduler.add(fixcrossRoutineEnd(snapshot));
    trialsHypodescentLoopScheduler.add(newimagetrialRoutineBegin(snapshot));
    trialsHypodescentLoopScheduler.add(newimagetrialRoutineEachFrame(snapshot));
    trialsHypodescentLoopScheduler.add(newimagetrialRoutineEnd(snapshot));
    trialsHypodescentLoopScheduler.add(metacogRoutineBegin(snapshot));
    trialsHypodescentLoopScheduler.add(metacogRoutineEachFrame(snapshot));
    trialsHypodescentLoopScheduler.add(metacogRoutineEnd(snapshot));
    trialsHypodescentLoopScheduler.add(endLoopIteration(trialsHypodescentLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsHypodescentLoopEnd() {
  psychoJS.experiment.removeLoop(trialsHypodescent);

  return Scheduler.Event.NEXT;
}


var fixcrossComponents;
function fixcrossRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixcross'-------
    t = 0;
    fixcrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixcrossComponents = [];
    fixcrossComponents.push(fixationcross);
    
    for (const thisComponent of fixcrossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixcrossRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixcross'-------
    // get current time
    t = fixcrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixationcross* updates
    if (t >= 0.0 && fixationcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationcross.tStart = t;  // (not accounting for frame time here)
      fixationcross.frameNStart = frameN;  // exact frame index
      
      fixationcross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationcross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixcrossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixcrossRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixcross'-------
    for (const thisComponent of fixcrossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var newimagetrialComponents;
function newimagetrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'newimagetrial'-------
    t = 0;
    newimagetrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Morphimage.setImage(ImageFile);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    textBlack.setText('Black');
    // keep track of which components have finished
    newimagetrialComponents = [];
    newimagetrialComponents.push(Morphimage);
    newimagetrialComponents.push(key_resp_2);
    newimagetrialComponents.push(textBlack);
    newimagetrialComponents.push(textWhite);
    
    for (const thisComponent of newimagetrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function newimagetrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'newimagetrial'-------
    // get current time
    t = newimagetrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Morphimage* updates
    if (t >= 0.0 && Morphimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Morphimage.tStart = t;  // (not accounting for frame time here)
      Morphimage.frameNStart = frameN;  // exact frame index
      
      Morphimage.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textBlack* updates
    if (t >= 0.0 && textBlack.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlack.tStart = t;  // (not accounting for frame time here)
      textBlack.frameNStart = frameN;  // exact frame index
      
      textBlack.setAutoDraw(true);
    }

    
    // *textWhite* updates
    if (t >= 0.0 && textWhite.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWhite.tStart = t;  // (not accounting for frame time here)
      textWhite.frameNStart = frameN;  // exact frame index
      
      textWhite.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of newimagetrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function newimagetrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'newimagetrial'-------
    for (const thisComponent of newimagetrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "newimagetrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var metacogComponents;
function metacogRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'metacog'-------
    t = 0;
    metacogClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    confidenceslider.reset()
    Morphimage_metacog.setImage(ImageFile);
    // keep track of which components have finished
    metacogComponents = [];
    metacogComponents.push(confidenceslider);
    metacogComponents.push(confidenceText);
    metacogComponents.push(Morphimage_metacog);
    
    for (const thisComponent of metacogComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function metacogRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'metacog'-------
    // get current time
    t = metacogClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *confidenceslider* updates
    if (t >= 0.0 && confidenceslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidenceslider.tStart = t;  // (not accounting for frame time here)
      confidenceslider.frameNStart = frameN;  // exact frame index
      
      confidenceslider.setAutoDraw(true);
    }

    
    // Check confidenceslider for response to end routine
    if (confidenceslider.getRating() !== undefined && confidenceslider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *confidenceText* updates
    if (t >= 0.0 && confidenceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidenceText.tStart = t;  // (not accounting for frame time here)
      confidenceText.frameNStart = frameN;  // exact frame index
      
      confidenceText.setAutoDraw(true);
    }

    
    // *Morphimage_metacog* updates
    if (t >= 0.0 && Morphimage_metacog.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Morphimage_metacog.tStart = t;  // (not accounting for frame time here)
      Morphimage_metacog.frameNStart = frameN;  // exact frame index
      
      Morphimage_metacog.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of metacogComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function metacogRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'metacog'-------
    for (const thisComponent of metacogComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('confidenceslider.response', confidenceslider.getRating());
    psychoJS.experiment.addData('confidenceslider.rt', confidenceslider.getRT());
    // the Routine "metacog" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'EndScreen'-------
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(textEnd);
    
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'EndScreen'-------
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEnd* updates
    if (t >= 0.0 && textEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEnd.tStart = t;  // (not accounting for frame time here)
      textEnd.frameNStart = frameN;  // exact frame index
      
      textEnd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textEnd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textEnd.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'EndScreen'-------
    for (const thisComponent of EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
