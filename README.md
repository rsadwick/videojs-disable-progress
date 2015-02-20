# Disable Progress

This videojs plugin allows you to disable video progress.  Useful for preroll videos where you need to disable the user from progressing/scrubbing the video.

## Getting Started
Download [videojs](http://www.videojs.com/)

In your web page:

```javascript
var enabled = false;

videojs("example_video_1").ready(function () {
    this.disableProgress();

    if(enabled){
       this.disableProgress.enable();
    }
    else{
        this.disableProgress.disable();
    }
});
```

Want to auto disable the controls, use the autoDisable option:

```javascript
videojs("example_video_1").ready(function () {
  var player = this;
  player.disableProgress({
    autoDisable: true
  });
});

```

Use the tiny api to enable/disable through js:

```javascript
videojs("example_video_1").ready(function () {
  var player = this;
  player.disableProgress();

  //something changes where you need to disable:
  player.disableProgress.disable();

  //some awesome event happens when you need to enable:
  player.disableProgress.enable()
});
```

## Example

[jsfiddle example](http://jsfiddle.net/rsadwick/1ghw7w4y/)

## Examples
Check out example.html to see Disable Progress in action.