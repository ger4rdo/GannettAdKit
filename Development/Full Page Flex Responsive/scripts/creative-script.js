define(
    [
        'jquery',
        'underscore',
        'http://www.gannett-cdn.com/ads/scripts/views/full-page-flex-responsive-view.js'
    ],
    function(
        $,
        _,
        FullPageFlexView
    ) {
        var CreativeView = FullPageFlexView.extend({

            /**
             * Destroy is called by the parent view when the ad is 
             * removed from the DOM or before the UIWebView is removed.
             * All timers, animation, ajax calls, and bindings needs to 
             * be removed or stopped.
             */
            destroy: function(removeEl) {
                FullPageFlexView.prototype.destroy.call(this, removeEl);
            },

            /**
             * Any setup work for the ad should be preformed here before 
             * render() is called.
             */
            initialize: function(options) {
                this.config = $.extend({}, options || {
                    dfp : {
                        eaid: '',
                        ecid: '',
                        eenv: '',
                        esid: '',
                        epid: '',
                        eadv: '',
                        ebuy: '',
                        geo: ''
                    }
                });
                FullPageFlexView.prototype.initialize.call(this, options);
                this.render();
            },

            /**
             * This is the kick-off animtion and timers should be started.
             * Any special impression tracking needs to take place on play. 
             * For iPad, play and stop will get called each time the ad 
             * becomes visible.
             */
            play: function() {
                FullPageFlexView.prototype.play.call(this);
            },

            /**
             * Render is where the ad will do any dynamic work in the DOM
             * to generate the ad.
             */
            render: function() {
                //this.triggerReady();
            },

            /**
             * This event is called when the container is resized, we don't
             * rely on JavaScript to get the width and height of the container.
             * When you do a $('.partner-placement').width() or .height() this 
             * will cause a redraw.
             */
            resize: function(w, h) {
                FullPageFlexView.prototype.resize.call(this, w, h);
            },

            /**
             * The stop function is called when the ad becomes hidden from the user.
             * All timers and animtion needs to be stopped.
             */
            stop: function() {
                FullPageFlexView.prototype.stop.call(this);
            }

        });

        return CreativeView;
    }
);