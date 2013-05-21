define(
    [
        'jquery',
        'underscore',
        'fullpageflexview'
    ],
    function(
        $,
        _,
        FullPageFlexView
    ) {
        var CreativeView = FullPageFlexView.extend({

            _createInstagramPost: function(item) {
                console.log(item);

                var postData = {
                    'instagramUrl': 'gdaup:///open?url=' + encodeURIComponent(this.options.clickUrl + item.link),
                    'instagramPhoto': item.images.thumbnail.url,
                    'instagramText': item.caption.text,
                    'instagramLikeCount': item.likes.count,
                    'instagramCommentCount': item.comments.count
                };

                var html = '<li class="instagram-post"><a href="<%= instagramUrl %>" target="_blank"><img src="<%= instagramPhoto %>" alt="Instagram Photo" class="instagram-post-photo"/></a><p class="instagram-post-text"><%= instagramText %></p><p class="instagram-post-meta"><span class="instagram-post-like"><%= instagramLikeCount %></span> <span class="instagram-post-comments"><%= instagramCommentCount %></span></p></li>';

                this.$instagramPhotoContainer.append(_.template(html, postData));

            },

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
                this.$instagramPhotoContainer = this.$('.instagram-photos');
                this.render();
                FullPageFlexView.prototype.initialize.call(this, options);
            },

            /**
             * This is the kick-off animtion and timers should be started.
             * Any special impression tracking needs to take place on play. 
             * For iPad, play and stop will get called each time the ad 
             * becomes visible.
             */
            play: function() {
            },

            /**
             * Render is where the ad will do any dynamic work in the DOM
             * to generate the ad.
             */
            render: function() {
                $.ajax({
                    'url': 'https://api.instagram.com/v1/tags/dinobbq/media/recent?client_id=b81c05fba4b34d2ba4b024ea7941f1d9',
                    'type': 'GET',
                    'dataType': 'jsonp',
                    'cache': false,
                    'success': _.bind(function(data) {
                        console.log(data);
                        for (var i = 0; i < 2; i++) {
                            this._createInstagramPost(data.data[i]);
                        }
                    }, this)
                });
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
            }

        });

        return CreativeView;
    }
);