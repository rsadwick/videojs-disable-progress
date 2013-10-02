# Disable Progress

Disable Progress bar from being clicked on.  Useful for preroll videos where you need to disable the user from progressing/scrubbing the video.

## Getting Started
Download [videojs](http://www.videojs.com/)

In your web page:

```html
<link rel="stylesheet" href="video-js.css">
<video id="video"
       class="video-js vjs-default-skin"
       src="movie.mp4"
       controls>
</video>
<script src="video.js"></script>
<script src="dist/videojs.disableUi.min.js"></script>
<script>
videojs('video', {}, function() {
  var player = this;
  player.disableUi(); // initialize the plugin
});
</script>
```

Want to auto disable the controls, use the autoDisable option:

```html
videojs('video', {}, function() {
  var player = this;
  player.disableUi({
    autoDisable: true
  });
});
</script>
```

Use the tiny api to enable/disable through js:

```html
videojs('video', {}, function() {
  var player = this;
  player.disableUi();

  //something changes where you need to disable:
  player.disableProgress.disable();

  //some awesome event happens when you need to enable:
  player.disableProgress.enable()
});
</script>
```


## Example

[jsfiddle example](http://jsfiddle.net/rsadwick/Qmeat/)

## Examples
Check out example.html to see Disable Progress in action.

## Release History
_(Nothing yet)_
