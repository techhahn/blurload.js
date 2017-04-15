var filter = require('lodash/filter');
var difference = require('lodash/difference');
var concat = require('lodash/concat');

class Blurload {
    constructor(el) {
        if(!el) {
            console.error('No Element Passed');
            return;
        }
        this.images = el.length ? el : [el];
        this.og_images = [];

        window.onscroll = this.reveal.bind(this);
        window.onresize = this.reveal.bind(this);

        this.render();
    }

    reveal() {
      
        let inview = filter(this.images, (image) => {

            var windowTop = window.scrollY || window.pageYOffset,
                windowHeight = windowTop + window.innerHeight,
                elementTop = image.offsetTop,
                elementTopnHeight = elementTop + image.height;
                return elementTopnHeight >= windowTop && elementTop <= windowHeight;
        });

        this.images = difference(this.images, inview);
        this.og_images = concat(this.og_images, inview);

        this.lazyLoadImage(inview);
        // !images.length ? $w.off("scroll resize lookup", reveal) : '';
    }

    lazyLoadImage($images = null) {
        $images.map((img) => {
            console.log(img);
        });
    }

    render() {
        
    }

}

window.Blurload = Blurload;