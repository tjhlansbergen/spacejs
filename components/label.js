Crafty.c("Label", {
    // This function will be called when the component is added to an entity
    // So it sets up the things that both our entities had in common
    init: function() {
        this.addComponent('2D, DOM, Text')
            .attr({ rotation: 10 })
            .textFont({ size: '30px', family: 'Monaco', type: 'bold' })
            .textColor('#FFC300')
            .unselectable();
        this.w = 150;
    },
    
    place: function(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }
});