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
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'Medium_Stage',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'Large_Stage',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'XLarge_Stage',
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
         },
         {
            id:'XLarge_Stage',
            symbolName:'XLarge_Symbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '600px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", '1080px'],
            ["style", "width", '100%']
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
"Small_Symbol": {
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
      type: 'rect',
      rect: ['0px','0px','600px','450px','auto','auto'],
      overflow: 'hidden',
      id: 'Small_Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '600px']
         ],
         "${_Small_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '450px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
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
            { id: "eid1", tween: [ "style", "${_Small_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
   dom: [
   {
      type: 'rect',
      rect: ['0px','0px','768px','576px','auto','auto'],
      id: 'Medium_Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Medium_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '576px'],
            ["style", "left", '0px'],
            ["style", "width", '768px']
         ],
         "${symbolSelector}": [
            ["style", "height", '576px'],
            ["style", "width", '768px']
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
            { id: "eid2", tween: [ "style", "${_Medium_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
   dom: [
   {
      type: 'rect',
      rect: ['0px','0px','936px','700px','auto','auto'],
      id: 'Large_Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '700px'],
            ["style", "width", '936px']
         ],
         "${_Large_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '700px'],
            ["style", "left", '0px'],
            ["style", "width", '936px']
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
            { id: "eid3", tween: [ "style", "${_Large_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"XLarge_Symbol": {
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
      type: 'rect',
      rect: ['0px','0px','1080px','810px','auto','auto'],
      id: 'XLarge_Rectangle_Symbol',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '810px'],
            ["style", "width", '1080px']
         ],
         "${_XLarge_Rectangle_Symbol}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '810px'],
            ["style", "left", '0px'],
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
            { id: "eid4", tween: [ "style", "${_XLarge_Rectangle_Symbol}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
