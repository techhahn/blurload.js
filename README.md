# blurload.js
## Lazy load your images medium style.

Vanilla js, no dependences.
BAckground image or image tag will work.

~~~~
<img data-url="image.jpg" src="image-thumb.jpg" alt="" class="image">
<div class="image" data-url="image.jpg" style="background-image: url(image-thumb.jpg); width: 100%; height: 120px; background-size: cover;"></div>



var img = document.getElementsByClassName('image');
new Blurload(img)
~~~~

you can also pass blur value, default is 50
