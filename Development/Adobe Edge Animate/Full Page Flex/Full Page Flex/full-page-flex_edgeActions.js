/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
window.version = {
	'templateType': 'full-page-flex',
	'number': 0.4
};
(function($, Edge, compId){
	var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
	//Edge symbol: 'stage'
   (function(symbolName) {
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var currentSymbol = null,
             playing = false;
			$(document).on('setup', function(event) {
				change(event.message.width, event.message.height);
				window.eventReady();
			});
			$(document).on('play', function(event) {
				change(event.message.width, event.message.height);
				playing = true;
				sym.play();
				if (currentSymbol) {
					currentSymbol.play();
				}
			});
			$(document).on('stop', function() {
				playing = false;
				sym.stop();
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
				var newSymbol = '_240x240',
					 size = 240;
				if (w >= 768 && h >= 768) {
					newSymbol = '_768x768';
					size = 768;
				} else if (w >= 600 && h >= 600) {
					newSymbol = '_600x600';
					size = 600;
				} else if (w >= 480 && h >= 480) {
					newSymbol = '_480x480';
					size = 480;
				} else if (w >= 405 && h >= 405) {
					newSymbol = '_405x405';
					size = 405;
				} else if (w >= 320 && h >= 320) {
					newSymbol = '_320x320';
					size = 320;
				}
				var symObj = sym.createChildSymbol(newSymbol, "stage");
				currentSymbol = symObj;

				// center
				var mt = (h - size) / 2;
				symObj.getSymbolElement().css({
					'margin': mt + 'px auto 0 auto'
				});
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
   
   //Edge symbol: '_240x240'
   (function(symbolName) {   
   
   })("_240x240");
   //Edge symbol end:'_240x240'

   //=========================================================
   
   //Edge symbol: '_320x320'
   (function(symbolName) {   
   
   })("_320x320");
   //Edge symbol end:'_320x320'

   //=========================================================
   
   //Edge symbol: '_405x405'
   (function(symbolName) {   
   
   })("_405x405");
   //Edge symbol end:'_405x405'

   //=========================================================
   
   //Edge symbol: '_480x480'
   (function(symbolName) {   
   
   })("_480x480");
   //Edge symbol end:'_480x480'

   //=========================================================
   
   //Edge symbol: '_600x600'
   (function(symbolName) {   
   
   })("_600x600");
   //Edge symbol end:'_600x600'

   //=========================================================
   
   //Edge symbol: '_768x768'
   (function(symbolName) {   
   
   })("_768x768");
   //Edge symbol end:'_768x768'

})(jQuery, AdobeEdge, "EDGE-591991892");