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
            id:'bbq-background2',
            type:'image',
            rect:['-297px','-272px','199%','220.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bbq-background.jpg",'50%','50%','1194px','993px']
         },
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
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "min-width", '600px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", '1080px'],
            ["style", "width", '100%']
         ],
         "${_bbq-background2}": [
            ["style", "top", '-272px'],
            ["style", "left", '-297px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
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
      rect: ['270px','0px','331px','169px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['277px','102px','323px','67px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'Text',
      text: 'Every Wednesday<br>8 to 11 PM<br>(sign up sheet 7:30)',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','600px','450px','auto','auto'],
      type: 'rect',
      id: 'Small_Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'good-smoke',
      type: 'image',
      rect: ['-462px','-10px','739px','515px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/good-smoke.jpg','0px','0px']
   },
   {
      id: 'dino-bbq-logo',
      type: 'image',
      rect: ['75px','292px','127px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dino-bbq-logo.png','0px','0px']
   },
   {
      id: 'the-sly-fox',
      type: 'image',
      rect: ['312px','20px','248px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/the-sly-fox.jpg','0px','0px']
   },
   {
      rect: ['289px','401px','137px','37px','auto','auto'],
      id: 'visit-website',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/visit-website.png','0px','0px']
   },
   {
      rect: ['289px','320px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','900','none','normal'],
      id: 'Text2',
      text: 'DINOSAUR BAR-B-QUE',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['289px','338px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      id: 'Text3',
      text: '99 Court St<br>Rochester, NY 14604<br>585-325-7090',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['291px','258px','50px','50px','auto','auto'],
      id: 'icon-facebook',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-facebook.png','0px','0px']
   },
   {
      rect: ['351px','258px','50px','50px','auto','auto'],
      id: 'icon-twitter',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-twitter.png','0px','0px']
   },
   {
      rect: ['411px','257px','50px','51px','auto','auto'],
      id: 'icon-instagram',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-instagram.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dino-bbq-logo}": [
            ["style", "left", '75px'],
            ["style", "top", '292px']
         ],
         "${_good-smoke}": [
            ["style", "left", '-462px'],
            ["style", "top", '-10px']
         ],
         "${_Text3}": [
            ["style", "top", '338px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '289px']
         ],
         "${_visit-website}": [
            ["style", "top", '401px'],
            ["style", "left", '289px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '289px'],
            ["style", "top", '320px']
         ],
         "${_the-sly-fox}": [
            ["style", "left", '312px'],
            ["style", "top", '20px']
         ],
         "${_icon-instagram}": [
            ["style", "top", '257px'],
            ["style", "left", '411px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "height", '67px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '16px'],
            ["style", "left", '277px'],
            ["style", "width", '323px']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '600px']
         ],
         "${_icon-facebook}": [
            ["style", "top", '258px'],
            ["style", "left", '291px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '169px']
         ],
         "${_icon-twitter}": [
            ["style", "top", '258px'],
            ["style", "left", '351px'],
            ["style", "cursor", 'pointer']
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
      rect: ['0px','0px','768px','576px','auto','auto'],
      type: 'rect',
      id: 'Medium_Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'good-smoke2',
      type: 'image',
      rect: ['-515px','0px','827px','576px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/good-smoke.jpg','0px','0px']
   },
   {
      id: 'dino-bbq-logo2',
      type: 'image',
      rect: ['94px','408px','127px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dino-bbq-logo.png','0px','0px']
   },
   {
      rect: ['312px','0px','456px','169px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['319px','102px','448px','67px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'Text',
      text: 'Every Wednesday<br>8 to 11 PM<br>(sign up sheet 7:30)',
      align: 'center',
      type: 'text'
   },
   {
      id: 'the-sly-fox',
      type: 'image',
      rect: ['419px','18px','248px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/the-sly-fox.jpg','0px','0px']
   },
   {
      rect: ['327px','525px','137px','37px','auto','auto'],
      id: 'visit-website',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/visit-website.png','0px','0px']
   },
   {
      rect: ['327px','444px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','900','none','normal'],
      id: 'Text2',
      text: 'DINOSAUR BAR-B-QUE',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['327px','462px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      id: 'Text3',
      text: '99 Court St<br>Rochester, NY 14604<br>585-325-7090',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['329px','382px','50px','50px','auto','auto'],
      id: 'icon-facebook',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-facebook.png','0px','0px']
   },
   {
      rect: ['389px','382px','50px','50px','auto','auto'],
      id: 'icon-twitter',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-twitter.png','0px','0px']
   },
   {
      rect: ['449px','381px','50px','51px','auto','auto'],
      id: 'icon-instagram',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-instagram.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_icon-facebook}": [
            ["style", "top", '382px'],
            ["style", "left", '329px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle}": [
            ["style", "height", '169px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '312px'],
            ["style", "width", '456px']
         ],
         "${_Text3}": [
            ["style", "top", '462px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '327px']
         ],
         "${_visit-website}": [
            ["style", "top", '525px'],
            ["style", "left", '327px'],
            ["style", "cursor", 'pointer']
         ],
         "${_icon-instagram}": [
            ["style", "top", '381px'],
            ["style", "left", '449px'],
            ["style", "cursor", 'pointer']
         ],
         "${_the-sly-fox}": [
            ["style", "left", '419px'],
            ["style", "top", '18px']
         ],
         "${_Medium_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '576px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '768px']
         ],
         "${_dino-bbq-logo2}": [
            ["style", "left", '94px'],
            ["style", "top", '408px']
         ],
         "${_Text}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "width", '448px'],
            ["style", "height", '67px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '319px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '576px'],
            ["style", "width", '768px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '327px'],
            ["style", "top", '444px']
         ],
         "${_icon-twitter}": [
            ["style", "top", '382px'],
            ["style", "left", '389px'],
            ["style", "cursor", 'pointer']
         ],
         "${_good-smoke2}": [
            ["style", "top", '0px'],
            ["style", "height", '576px'],
            ["style", "left", '-515px'],
            ["style", "width", '827px']
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
      rect: ['0px','0px','936px','700px','auto','auto'],
      type: 'rect',
      id: 'Large_Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'good-smoke2',
      type: 'image',
      rect: ['-632px','0px','1005px','700px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/good-smoke.jpg','0px','0px']
   },
   {
      id: 'dino-bbq-logo2',
      type: 'image',
      rect: ['94px','408px','127px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dino-bbq-logo.png','0px','0px']
   },
   {
      rect: ['373px','0px','569px','169px','auto','auto'],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['374px','102px','561px','67px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'Every Wednesday<br>8 to 11 PM<br>(sign up sheet 7:30)',
      align: 'center',
      type: 'text'
   },
   {
      id: 'the-sly-foxCopy',
      type: 'image',
      rect: ['534px','18px','248px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/the-sly-fox.jpg','0px','0px']
   },
   {
      rect: ['394px','643px','137px','37px','auto','auto'],
      id: 'visit-websiteCopy',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/visit-website.png','0px','0px']
   },
   {
      rect: ['394px','562px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','900','none','normal'],
      id: 'Text2Copy',
      text: 'DINOSAUR BAR-B-QUE',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['394px','580px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      id: 'Text3Copy',
      text: '99 Court St<br>Rochester, NY 14604<br>585-325-7090',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['396px','500px','50px','50px','auto','auto'],
      id: 'icon-facebookCopy',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-facebook.png','0px','0px']
   },
   {
      rect: ['456px','500px','50px','50px','auto','auto'],
      id: 'icon-twitterCopy',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-twitter.png','0px','0px']
   },
   {
      rect: ['516px','499px','50px','51px','auto','auto'],
      id: 'icon-instagramCopy',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-instagram.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_visit-websiteCopy}": [
            ["style", "top", '643px'],
            ["style", "left", '394px'],
            ["style", "cursor", 'pointer']
         ],
         "${_icon-twitterCopy}": [
            ["style", "top", '500px'],
            ["style", "left", '456px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3Copy}": [
            ["style", "top", '580px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '394px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '394px'],
            ["style", "top", '562px']
         ],
         "${_TextCopy}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px'],
            ["style", "height", '67px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '374px'],
            ["style", "width", '561px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "height", '169px'],
            ["style", "left", '373px'],
            ["style", "width", '569px']
         ],
         "${_icon-facebookCopy}": [
            ["style", "top", '500px'],
            ["style", "left", '396px'],
            ["style", "cursor", 'pointer']
         ],
         "${_dino-bbq-logo2}": [
            ["style", "left", '94px'],
            ["style", "top", '408px']
         ],
         "${_the-sly-foxCopy}": [
            ["style", "left", '534px'],
            ["style", "top", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '700px'],
            ["style", "width", '936px']
         ],
         "${_Large_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '700px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '936px']
         ],
         "${_icon-instagramCopy}": [
            ["style", "top", '499px'],
            ["style", "left", '516px'],
            ["style", "cursor", 'pointer']
         ],
         "${_good-smoke2}": [
            ["style", "height", '700px'],
            ["style", "top", '0px'],
            ["style", "left", '-632px'],
            ["style", "width", '1005px']
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
      rect: ['0px','0px','1080px','810px','auto','auto'],
      type: 'rect',
      id: 'XLarge_Rectangle_Symbol',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['0px','0px','936px','700px','auto','auto'],
      type: 'rect',
      id: 'Large_Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'good-smoke2Copy',
      type: 'image',
      rect: ['-596px','0px','1005px','700px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/good-smoke.jpg','0px','0px']
   },
   {
      id: 'dino-bbq-logo2Copy',
      type: 'image',
      rect: ['141px','434px','127px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dino-bbq-logo.png','0px','0px']
   },
   {
      rect: ['0px','643px','409px','169px','auto','auto'],
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['1px','745px','408px','67px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'TextCopy2',
      text: 'Every Wednesday<br>8 to 11 PM<br>(sign up sheet 7:30)',
      align: 'center',
      type: 'text'
   },
   {
      id: 'the-sly-foxCopy2',
      type: 'image',
      rect: ['81px','661px','248px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/the-sly-fox.jpg','0px','0px']
   },
   {
      rect: ['429px','726px','236px','64px','auto','auto'],
      id: 'visit-websiteCopy2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/visit-website.png','0px','0px']
   },
   {
      rect: ['429px','606px','316px','31px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','900','none','normal'],
      id: 'Text2Copy2',
      text: 'DINOSAUR BAR-B-QUE',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['429px','643px','263px','76px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','400','none','normal'],
      id: 'Text3Copy2',
      text: '99 Court St<br>Rochester, NY 14604<br>585-325-7090',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['429px','506px','86px','86px','auto','auto'],
      id: 'icon-facebookCopy2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-facebook.png','0px','0px']
   },
   {
      rect: ['535px','506px','86px','86px','auto','auto'],
      id: 'icon-twitterCopy2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-twitter.png','0px','0px']
   },
   {
      rect: ['642px','505px','86px','88px','auto','auto'],
      id: 'icon-instagramCopy2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/icon-instagram.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_good-smoke2Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '700px'],
            ["style", "left", '-596px'],
            ["style", "width", '1005px']
         ],
         "${_Large_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '700px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '936px']
         ],
         "${_the-sly-foxCopy2}": [
            ["style", "left", '81px'],
            ["style", "top", '661px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "height", '169px'],
            ["style", "top", '643px'],
            ["style", "left", '0px'],
            ["style", "width", '409px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '643px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "height", '76px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '429px'],
            ["style", "width", '263px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '745px'],
            ["style", "text-align", 'center'],
            ["style", "width", '408px'],
            ["style", "height", '67px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '1px'],
            ["style", "font-size", '16px']
         ],
         "${_dino-bbq-logo2Copy}": [
            ["style", "left", '141px'],
            ["style", "top", '434px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '606px'],
            ["style", "font-size", '24px'],
            ["style", "text-align", 'left'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '429px'],
            ["style", "width", '316px']
         ],
         "${_icon-instagramCopy2}": [
            ["style", "top", '505px'],
            ["style", "height", '88px'],
            ["style", "left", '642px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '86px']
         ],
         "${_icon-twitterCopy2}": [
            ["style", "top", '506px'],
            ["style", "height", '86px'],
            ["style", "left", '535px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '810px'],
            ["style", "width", '1080px']
         ],
         "${_visit-websiteCopy2}": [
            ["style", "top", '726px'],
            ["style", "height", '64px'],
            ["style", "left", '429px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '236px']
         ],
         "${_icon-facebookCopy2}": [
            ["style", "top", '506px'],
            ["style", "height", '86px'],
            ["style", "left", '429px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '86px']
         ],
         "${_XLarge_Rectangle_Symbol}": [
            ["style", "top", '0px'],
            ["style", "height", '810px'],
            ["style", "display", 'none'],
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
            { id: "eid5", tween: [ "style", "${_Large_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
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
