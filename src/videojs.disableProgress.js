/*
 * disableProgress
 * https://github.com/SadwickR/videojs-disable-ui
 *
 * Copyright (c) 2013 Ryan Sadwick
 * Licensed under the MIT license.
 */

(function(vjs) {

  var
    /**
     * Copies properties from one or more objects onto an original.
     */
    extend = function(obj /*, arg1, arg2, ... */) {
      var arg, i, k;
      for (i = 1; i < arguments.length; i++) {
        arg = arguments[i];
        for (k in arg) {
          if (arg.hasOwnProperty(k)) {
            obj[k] = arg[k];
          }
        }
      }
      return obj;
    },

    // define some reasonable defaults for this sweet plugin
    defaults = {
      autoDisable: false
    },

    // plugin initializer
    disableProgress = function(options) {
      var
        // save a reference to the player instance
        player = this,
        state = false,

        // merge options and defaults
        settings = extend({}, defaults, options || {});

      // disable / enable methods
      player.disableProgress = {
        disable: function() {
            state = true;
            player.controlBar.progressControl.seekBar.off("mousedown");
            player.controlBar.progressControl.seekBar.off("touchstart");
            player.controlBar.progressControl.seekBar.off("click");
        },
        enable: function() {
            state = false;
            player.controlBar.progressControl.seekBar.on("mousedown",  player.controlBar.progressControl.seekBar.handleMouseDown);
            player.controlBar.progressControl.seekBar.on("touchstart", player.controlBar.progressControl.seekBar.handleMouseDown);
            player.controlBar.progressControl.seekBar.on("click", player.controlBar.progressControl.seekBar.handleClick);
        },
        getState: function(){
          return state;
        }
      };

      if(settings.autoDisable)
      {
        player.disableProgress.disable();
      }
    };

  // register the plugin with video.js
  vjs.plugin('disableProgress', disableProgress);

}(window.videojs));
