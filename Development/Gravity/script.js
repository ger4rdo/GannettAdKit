/**
 * @fileoverview PartnerView template for elastic ads
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'http://www.gannett-cdn.com/ads/scripts/views/base-ad-view.js',
    'admanager',
    'http://www.gannett-cdn.com/ads/scripts/ad-video/jquery.ad-video.min.js',
    'http://www.gannett-cdn.com/ads/scripts/jquery-ui-1.10.2.min.js'
],
function(
    $,
    _,
    Backbone,
    BaseAdView,
    AdManager
) {
        var PartnerView = BaseAdView.extend({
            events : {
                'mouseenter .volume-control' : 'volumeBarShow',
                'mouseleave .volume-control' : 'volumeBarHide',
                // 'click .video-replay' : 'replay',
                'click .volume-mute' : 'toggleMute'
            },
            firstPlay : true,
            userSetVolume : 75,
            videoRatioX : 16,
            videoRatioY : 9,
            started : false,
            staticFallback : ($('html').hasClass('touch') || $('html').hasClass('lt-ie9')),

            initialize: function(config) {
                this.config = $.extend({}, config || {});
                _.bindAll(this, 'setVolume', 'startVideo', 'seekVideo');

                this.$background = this.$('.background');
                this.$copy = this.$('.copy-block');
                // this.$replay = this.$('.video-replay');
                this.$volume = this.$('.volume-control');
                this.$volumeBar = this.$('.volume-bar');
                this.$video = this.$('.video');

                if(!this.staticFallback) {
                    this.$video.adVideo({
                        autoplay: 1,
                        usatcontrols: 0,
                        video : this.options.videos[0],
                        events : {
                            onEnd : this.seekVideo,
                            onPlay : this.startVideo,
                            onTrigger : this.seekVideo
                        }
                    });
                }

                this.$volumeBar.slider({
                    change: _.bind(function( event, ui ) {
                        var vol = ui.value;
                        this.userSetVolume = vol;
                        this.setVolume(vol);
                    }, this),
                    max: 100,
                    min: 0,
                    orientation: "vertical",
                    slide: _.bind(function( event, ui ) {
                        var vol = ui.value;
                        this.userSetVolume = vol;
                        this.setVolume(vol);
                    }, this),
                    range: "min",
                    value: this.userSetVolume
                });

                var throttleScroll = _.throttle(this.onScrollWindow, 50);
                $(window).on('scroll.' + this.config.dfp.ecid, throttleScroll);

                BaseAdView.prototype.initialize.call(this, config);
                AdManager.logDebug('PartnerView Gravity initialized', this);
                this.triggerReady();
            },
            _calculate: function(containerWidth, containerHeight) {
                var originalImageHeight = this.videoRatioY,
                    originalImageWidth = this.videoRatioX,
                    minWidth = containerHeight/originalImageHeight * originalImageWidth,
                    newWidth = (minWidth<containerWidth) ? containerWidth : minWidth,
                    newHeight = newWidth * (originalImageHeight/originalImageWidth),
                    topOffset = (containerHeight-newHeight)/2,
                    leftOffset = (containerWidth-newWidth)/2;


                return {height : newHeight, left: leftOffset, top: topOffset, width: newWidth};
            },
            destroy: function(removeEl) {
                BaseAdView.prototype.destroy.call(this, removeEl);
                this.$window.off('.' + this.config.dfp.ecid);

                this.$volumeBar.slider('destroy');
                this.$video.adVideo('destroy');

            },
            play: function() {
                BaseAdView.prototype.play.call(this);
                AdManager.logDebug('PartnerView.play(partner:' + this.config.dfp.ecid + ':play)');
                this.resize(this.config.initialWidth, this.config.initialHeight);

            },
            resize: function(width, height) {
                BaseAdView.prototype.resize.call(this, width, height);
                AdManager.logDebug('PartnerView.resize('+width+','+height+')');

                this.windowHeight = height;

                //resize background/video
                var newCss = this._calculate(width, height);
                this.$video.removeAttr('style').css(newCss);
                this.$background.removeAttr('style').css(newCss);

                //set font size
                var fontSize = (width/1680 * 10);
                fontSize = (fontSize < 5.7262) ? 5.7262 : fontSize;
                this.$el.css('font-size', fontSize);

                //vertically center copyblock//copy block
                var copyHeight = this.$copy.height();
                var copyTop = (height - copyHeight) / 4;
                this.$copy.css({top : copyTop});
            },
            replay: function() {
                this.toggleMute('unmute');
                this.seekVideo();
            },
            onResume: function() {
                if(!this.staticFallback) {
                    this.$video.adVideo('play');
                    this.$video.adVideo('mute');
                }
            },
            onPause: function() {
                if(!this.staticFallback) {
                    this.$video.adVideo('pause');
                    this.toggleMute('mute');
                }
            },
            onScrollWindow: function() {
                var scrollTop = $(window).scrollTop(),
                    scrollPercentage = (this.windowHeight - scrollTop) / this.windowHeight,
                    level = (scrollPercentage > 1) ? this.userSetVolume : Math.floor(scrollPercentage * this.userSetVolume);

                level = (level < 0) ? 0 : level;
                this.setVolume(level);
            },
            startVideo: function() {
                if(!this.started) {
                    this.started = true;
                    this.seekVideo();
                    if(!this.$background.hasClass('hidden')) {
                        this.$volume.show();
                        // this.$replay.show();
                        this.$background.fadeOut(500, function() {
                            $(this).addClass('hidden');
                        });
                    }
                }
            },
            seekVideo: function() {
                if(!this.staticFallback) {
                    this.$video.adVideo('seek', 0);
                }
            },
            setVolume: function(level) {
                this.$video.adVideo('volume', level);
            },
            stop: function() {
                BaseAdView.prototype.stop.call(this);
                AdManager.logDebug('PartnerView.onStop(partner:' + this.config.dfp.ecid + ':stop)');
                if(!this.staticFallback) {
                    this.$video.adVideo('pause');
                }
            },
            toggleMute: function(action) {
                if(!this.$volume.hasClass('muted') || action === 'mute') {
                    this.$volume.addClass('muted');
                    this.$video.adVideo('mute');
                } else {
                    this.$volume.removeClass('muted');
                    this.$video.adVideo('unmute');
                }
            },
            volumeBarHide: function() {
                this.$volume.stop(true).animate({opacity: 0.3}, 200);
                this.$volumeBar.stop(true).animate({opacity: 1}, 300).animate({opacity: 0}, 200);
            },
            volumeBarShow: function() {
                this.$volume.stop(true).animate({opacity: 1}, 200);
                this.$volumeBar.stop(true).animate({opacity: 1}, 200);
            }
        });
        return PartnerView;
    }
);
