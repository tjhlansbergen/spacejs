var Crafty = require('craftyjs');

Crafty.init(1500,700);
Crafty.background('#283747');

Crafty.sprite("/assets/sun.png", {sun:[0,0,1024,1024]});
Crafty.e("2D, DOM, sun")
  .attr({x:600, y:500, w:128, h:128});

Crafty.e('2D, DOM, Text, Fourway')
  .text('🚀')
  .attr({x:750, y:350})
  .textFont({ size: '30px' })
  .unselectable()
  .fourway(3);




