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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
         * This test make sure that the allFeeds object has define ULR and URL is not empty.
         */
        it('url is defined and it is not empty', function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();

                expect(feed.url.length).not.toBe(0);
            });
        });

        /*
         * This test make suer that the allFeeds object has define name and name is not empty
         */

         it('name is defined and it is not empty', function(){
             allFeeds.forEach(feed => {
                 expect(feed.name).toBeDefined();

                 expect(feed.name.length).not.toBe(0);
             })
         })
    });


    /* This test is all about "The menu" */
    describe('The menu', function() {
        /* 
         * This test ensures the menu element is hidden or showing
         */
        it('menu is hidden by default', function() {
            expect($('.menu-hidden').length).toBe(1);
        });

        /* 
          * This test ensures the menu changes visibility when the menu icon is clicked
          */
        it('menu changes visibility after click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });
    
     /* "Initial Entries" */
    describe('Initial Entries', function() {
        /* 
         * This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * 
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('is a single .entry element', function(done) {
            expect($('.entry').parents($('.feed')).length).not.toBe(0);
            done();
        });
    });

     /* "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* 
         * This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * 
         */
        let oldFeed;
        let newFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                oldFeed = $('.feed').html();
                done();
            });
        })

        it('new feed loads', function(done) {
           loadFeed(2, function(){
                newFeed = $('.feed').html();
           });

            expect(newFeed).not.toBe(oldFeed);
            done();
        })        
    });
}());
