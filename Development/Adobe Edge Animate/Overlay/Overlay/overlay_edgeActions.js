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
   		'templateType': 'overlay',
   		'number': 0.8
   	};
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      	
      	var currentSymbol = null,
      	    playing = false;
      
         $(document).on('setup', function(event) {
				change(event.message.width, event.message.height);
				window.eventReady();
			});
			
			$(document).on('play', function(event) {
				change(event.message.width, event.message.height);
				playing = true;
				if (currentSymbol) {
					currentSymbol.play();
				}
			});
			
			$(document).on('stop', function() {
				playing = false;
				if (currentSymbol) {
					currentSymbol.stop();
				}
			});
			
			$(document).on('resize', function(event) {
				var w = event.message.width,
					 h = event.message.height;
 					change(w, h);
 					if (playing && currentSymbol) {
					 	currentSymbol.play();
					}
			});
			
			function change(w, h) {
				// remove current symbol
				if (currentSymbol) {
					currentSymbol.deleteSymbol();
				}
				// create new symbol
				var newSymbol = 'Small_Symbol';
				if (w >= 1080 && h >= 810) {
					newSymbol = 'XLarge_Symbol';
				} else if (w >= 936 && h >= 700) {
					newSymbol = 'Large_Symbol';
				} else if (w >= 768 && h >= 576) {
					newSymbol = 'Medium_Symbol';
				}
				var symObj = sym.createChildSymbol(newSymbol, "stage");
				currentSymbol = symObj;
			}
			
			// ENTER VIDEO CONFIG HERE
			
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

   //=========================================================
   
   //Edge symbol: 'XLarge_Symbol'
   (function(symbolName) {   
   
   })("XLarge_Symbol");
   //Edge symbol end:'XLarge_Symbol'

})(jQuery, AdobeEdge, "EDGE-22372932");