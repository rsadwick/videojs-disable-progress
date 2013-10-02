# Disable Progress

disable Progress bar from being clicked on.  Useful for preroll videos.

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

## Documentation
_(Coming soon)_

## Examples
Check out example.html to see Disable UI in action.

## Release History
_(Nothing yet)_
