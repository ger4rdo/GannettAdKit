/**
 * @fileoverview PartnerView template for elastic ads
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'http://www.gannett-cdn.com/ads/scripts/views/base-ad-view.js',
    'admanager'
],
function(
    $,
    _,
    Backbone,
    BaseAdView,
    AdManager
) {
        var PartnerView = BaseAdView.extend({

            /**
             * Initializes ad
             * @param  {[Object]} config - contains ad type, height, width, and dfp data
             */
            initialize: function(config) {
                this.config = $.extend({}, config || {});
                _.bindAll(this);
                BaseAdView.prototype.initialize.call(this, config);
                AdManager.logDebug('PartnerView Elastic initialized', this);
                this.triggerReady();
            },
            
            /**
             * Clean up the view
             * @param  {[boolean]} removeEl - Determines if el should be removed from DOM
             */
            destroy: function(removeEl) {
                BaseAdView.prototype.destroy.call(this, removeEl);

            },

            /**
             * Called by framework when ad is displayed
             */
            play: function() {
                BaseAdView.prototype.play.call(this);
                AdManager.logDebug('PartnerView.play(partner:' + this.config.dfp.ecid + ':play)');

            },

            /**
             * Called by framework when ad container changes dimensions
             * @param  {[number]} width  - New width of container
             * @param  {[number]} height - New height of container
             */
            resize: function(width, height) {
                BaseAdView.prototype.resize.call(this, width, height);
                AdManager.logDebug('PartnerView.resize('+width+','+height+')');

            },

            /**
             * Called when ad is closed
             */
            stop: function() {
                BaseAdView.prototype.stop.call(this);
                AdManager.logDebug('PartnerView.onStop(partner:' + this.config.dfp.ecid + ':stop)');

            }
        });
        return PartnerView;
    }
);
