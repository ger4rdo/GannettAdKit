/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
   
   	window.version = {
   		'templateType': 'pushdown',
   		'number': 0.1
   	}
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      	
      	sym.$('Stage').css('display','none');
      	
      	sym.$("Small_Stage").css({
      		'position': 'absolute',
      		'left': '50%',
      		'margin-left': '-420px'
      	});
			sym.$("Medium_Stage").css({
      		'position': 'absolute',
      		'left': '50%',
      		'margin-left': '-540px'
      	});
			sym.$("Large_Stage").css({
      		'position': 'absolute',
      		'left': '50%',
      		'margin-left': '-590px'
      	});
      	
      	var currentStage = 'None';
      	var playing = false;
      
         $(document).on('setup', function(event) {
				changeSize(event.message.width, event.message.height);
				sym.$('Stage').css('display','block');
				window.eventReady();
			});
			
			$(document).on('play', function() {
				playing = true;
				sym.getSymbol(currentStage).play();
			});
			
			$(document).on('stop', function() {
				playing = false;
				sym.getSymbol(currentStage).stop();
			});
			
			$(document).on('resize', function(event) {
				var w = event.message.width,
					h = event.message.height;
					
					changeSize(w, h);			
			});
			
			function changeSize(w, h) {
				if (w === 1180) {
					if ('Large_Stage' === currentStage) {
						return;
					}
					if (sym.getSymbol(currentStage)) {
						sym.getSymbol(currentStage).stop();
					}
					sym.$("Small_Stage").css('display','none');
					sym.$("Medium_Stage").css('display','none');
					sym.$("Large_Stage").css('display','block');
					if (playing) {
						sym.getSymbol('Large_Stage').play();
					}
					currentStage = 'Large_Stage';
				} else if (w === 1080) {
					if ('Medium_Stage' === currentStage) {
						return;
					}
					if (sym.getSymbol(currentStage)) {
						sym.getSymbol(currentStage).stop();
					}
					sym.$("Small_Stage").css('display','none');
					sym.$("Medium_Stage").css('display','block');
					sym.$("Large_Stage").css('display','none');
					if (playing) {
						sym.getSymbol('Medium_Stage').play();
					}
					currentStage = 'Medium_Stage';
				} else {
					if ('Small_Stage' === currentStage) {
						return;
					}
					if (sym.getSymbol(currentStage)) {
						sym.getSymbol(currentStage).stop();
					}
					sym.$("Small_Stage").css('display','block');
					sym.$("Medium_Stage").css('display','none');
					sym.$("Large_Stage").css('display','none');
					if (playing) {
						sym.getSymbol('Small_Stage').play();
					}
					currentStage = 'Small_Stage';
				}
				
			}
			
			function complete() {
			
			}
			
			yepnope({
				load: [
					'http://i.usatoday.net/adsolutions/templates/edge/event-model.js'
				],
				complete: complete
			});
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Small_Rectangle_Symbol'
   (function(symbolName) {   
   
   })("Small_Symbol");
   //Edge symbol end:'Small_Symbol'

   //=========================================================
   
   //Edge symbol: 'Medium_Rectangle_Symbol'
   (function(symbolName) {   
   
   })("Medium_Symbol");
   //Edge symbol end:'Medium_Symbol'

   //=========================================================
   
   //Edge symbol: 'Large_Rectangle_Symbol'
   (function(symbolName) {   
   
   })("Large_Symbol");
   //Edge symbol end:'Large_Symbol'

})(jQuery, AdobeEdge, "EDGE-22372932");