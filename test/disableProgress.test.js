(function(vjs) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var isHtmlSupported;

  module('videojs.disableProgress', {
    // This will run before each test in this module.
    setup: function() {
      // grab a reference to the video
      var video = document.querySelector('#qunit-fixture video');
      isHtmlSupported = videojs.Html5.isSupported;

      if (/phantomjs/gi.test(window.navigator.userAgent)) {
        // PhantomJS doesn't have a video element implementation
        // force support here so that the HTML5 tech is still used during
        // command-line test runs
        videojs.Html5.isSupported = function() {
          return true;
        };

        // provide implementations for any video element functions that are
        // used in the tests
        video.load = function() {};
      }

      this.player = vjs(video);
    },

    teardown: function() {
      // restore the original html5 support test
      videojs.Html5.isSupported = isHtmlSupported;
    }
  });

    test('is registered', function() {
        expect(1);
        ok(this.player.disableProgress, 'the disableProgress plugin is present');
    });

    test('plugin api methods exist', function() {
        expect(2);
        this.player.disableProgress();
        ok(this.player.disableProgress.disable, 'disable exists');
        ok(this.player.disableProgress.enable, 'enable exists');
    });

    test('autoDisable option can be overridden to true', function() {
        expect(1);
        this.player.disableProgress({
          autoDisable: true
        });

        strictEqual(this.player.disableProgress.getState(), true, 'returns true');
    });

    test('autoDisable option can be overridden to false', function() {
        expect(1);
        this.player.disableProgress({
          autoDisable: false
        });

        strictEqual(this.player.disableProgress.getState(), false, 'returns false');
    });

}(window.videojs));