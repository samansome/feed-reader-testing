/* feedreader.js
     *
     * This is the spec file that Jasmine will read and contains
     * all of the tests that will be run against your application.
     */
    

    /* We're placing all of our tests within the $() function,
     * since some of these tests may require DOM elements. We want
     * to ensure they don't run until the DOM is ready.
     */
    $(function() {
        /* This first test suite validates the feed data.
        */
        describe('RSS Feeds', function() {
            /* This test ensures that more than 1 feed is defined.
             */
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });
    

    

            /* This test loops through the list of feeds and
             * url is defined and non blank.
             */
            it('URLS are defined', function() {
                allFeeds.forEach(function(feed){
                    expect(feed.url).toBeDefined();
                    expect(feed.url).not.toBe("");
                    expect(feed.url).toMatch(/^(http|https):\/\//);
                });
            });
    

    

            /* This test loops through the list of feeds and
             name is defined and non blank.
             */
            it('Names are defined', function() {
                for(var i=0; i<allFeeds.length; i++){
                    expect(allFeeds[i].name).toBeDefined();
                    expect(allFeeds[i].name).not.toBe("");
                }
            });
        });
    

            /* Menu test suite
             */
        describe('The menu ', function() {
            var $htmlBody = $(window.document.body);
    

            /* This test ensures the menu element is
             * hidden by default. 
             */
            it('is hidden by default', function() {
                expect($htmlBody.hasClass("menu-hidden")).toBe(true);
            });
    

            /* This test ensures the menu element is shown when clicked
             * and hidden when clicked again. 
             */
            it('is shown and hidden by clicking', function() {
                $(".menu-icon-link")[0].click();
                expect($htmlBody.hasClass("menu-hidden")).toBe(false);
    

                $(".menu-icon-link")[0].click();
                expect($htmlBody.hasClass("menu-hidden")).toBe(true);
            });
        });
    

            /* Feed Enries
             */
        describe('Initial Entries', function() {
    

            var $feedResult;
            beforeEach(function(done) {
              loadFeed(0, function() {
                $feedResult = $(".feed .entry");
                done();
              });
            });
    

            /* Ensures loadFeed loads at least 1 entry.
             */
            it('defined it entry has more.', function() {
                expect($feedResult[0]).toBeDefined();
            });
        });
    

        /* New Feed select */
        describe('New Feed Selection', function() {
            var initHTML;
            beforeEach(function(done) {
              loadFeed(0, function() {
                initHTML = window.document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                  done();
                });
              });
            });
    

            /* Ensures content changes when a new feed is loaded.
             */
            it('content changes.', function() {
              var newHTML = window.document.querySelector(".feed").innerHTML;
              expect(initHTML).not.toBe(newHTML);
            });
        });
    }());

