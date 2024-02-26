var Crafty = require('craftyjs');

Crafty.init(1500,700);
Crafty.background('#283747');

Crafty.e('2D, DOM, Text')
  .text('Ruimte')
  .attr({x:50, y:10, rotation:-3})
  .textFont({size: '30px', family: 'Monaco'})
  .textColor('#DAF7A6')
  .unselectable();
Crafty.e('2D, DOM, Text')
  .text('held')
  .attr({x:90, y:30, rotation:5})
  .textFont({size: '30px', family: 'Monaco', type: 'bold'})
  .textColor('#FF5733')
  .unselectable();

Crafty.sprite("/assets/sun.png", {sun:[0,0,1024,1024]});
Crafty.e("2D, DOM, sun")
  .attr({x:500, y:400, w:256, h:256});
Crafty.e('2D, DOM, Text')
  .text('🠸 Zon 🔥')
  .attr({x:750, y:540, w:150, rotation:10})
  .textFont({size: '30px', family: 'Monaco', type: 'bold'})
  .textColor('#FFC300')
  .unselectable();

Crafty.sprite("/assets/moon.png", {moon:[0,0,96,96]});
Crafty.e("2D, DOM, moon")
  .attr({x:130, y:270, w:48, h:48});
Crafty.e('2D, DOM, Text')
  .text('Maan 🠺')
  .attr({x:50, y:290, w:150, rotation:-5})
  .textFont({size: '20px', family: 'Monaco', type: 'bold'})
  .textColor('#FFC300')
  .unselectable();

Crafty.e('2D, DOM, Text, Fourway')
  .text('🚀')
  .attr({x:750, y:350})
  .textFont({ size: '30px' })
  .unselectable()
  .fourway(3);




