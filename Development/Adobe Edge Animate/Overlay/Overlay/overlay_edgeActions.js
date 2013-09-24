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
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         $(document).on('setup', function(event) {
				changeSize(event.message.width, event.message.height);
				window.eventReady();
			});
			
			$(document).on('play', function() {
				sym.play();
			});
			
			$(document).on('stop', function() {
				sym.stop();
			});
			
			$(document).on('resize', function(event) {
				var w = event.message.width,
					h = event.message.height;
					
					changeSize(w, h);			
			});
			
			function changeSize(w, h) {
				console.log('changeSize(' + w + ',' + h + ');');
				sym.$("Small_Stage").hide();
				sym.$("Medium_Stage").hide();
				sym.$("Large_Stage").hide();
				sym.$("XLarge_Stage").hide();
				
				if (w === 1080) {
					sym.$("XLarge_Stage").show();
				} else if (w === 936) {
					sym.$("Large_Stage").show();
				} else if (w === 768) {
					sym.$("Medium_Stage").show();
				} else {
					sym.$("Small_Stage").show();
				}
			}
			
			yepnope({
				nope: [
					'http://i.usatoday.net/adsolutions/_common/event-model/event-model.js'
				]
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