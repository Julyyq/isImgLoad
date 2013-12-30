isImgLoad.js
==============

Cross domain detect when image loaded.

Rely on jQuery.

Usage
--------------

`isImgLoad(src, timeout, callback);`

Example
--------------

    isImgLoad("http://flickr.com/xxx.jpg", 15, function() {
      console.log("image loaded!");
    });

