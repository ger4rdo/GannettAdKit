/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Small_Stage',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'Medium_Stage',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'Large_Stage',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Small_Stage',
            symbolName:'Small_Symbol'
         },
         {
            id:'Medium_Stage',
            symbolName:'Medium_Symbol'
         },
         {
            id:'Large_Stage',
            symbolName:'Large_Symbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '840px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '665px'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_Medium_Stage}": [
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Large_Stage}": [
            ["style", "top", '50px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Small_Stage}": [
            ["style", "top", '50px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid17", tween: [ "style", "${_Medium_Stage}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Medium_Stage}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Small_Stage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Small_Stage}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_Large_Stage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_Medium_Stage}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Large_Stage}", "top", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Large_Stage}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Small_Symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '615px'],
            ["style", "width", '840px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Medium_Symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '615px'],
            ["style", "width", '1080px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Large_Symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '615px'],
            ["style", "width", '1180px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-22372932");
