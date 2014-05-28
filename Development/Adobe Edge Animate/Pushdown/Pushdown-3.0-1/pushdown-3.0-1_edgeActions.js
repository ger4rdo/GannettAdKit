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
			'templateType': 'pushdown-16x9',
			'number': '3.0-1'
		};
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         window.play = function() {
				AdobeEdge.getComposition(compId).getStage().play();
			};
			
			window.stop = function() {
				if (window.stopVideos) {
					window.stopVideos();
				}
				AdobeEdge.getComposition(compId).getStage().stop(0);
			};
			
			window.resize = function(w, h) {
				// Special resize code if needed
			};
			
			window.destroy = function() {
				// Any cleanup.
				window.destroyVideos();
			};

			// SETUP VIDEO HERE         
         
			window.compositionReady(this);
			
			if (window.played) {
				window.play();
			}
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         $('body').css('overflow','hidden');
         
         window.defaultVideos = [
         	{'videoId':'dQw4w9WgXcQ'}
         ];
         
         window.creationComplete(this);
      });
      //Edge binding end
      
   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-101948563");