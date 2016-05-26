/**
 * Created by Agus Edme on 26/05/16.
 */
game.Enemy = me.Entity.extend({
    init: function (x, y) {
        this._super(me.Entity, "init", [10, 10, {
            image : "ships",
            width : 32,
            height : 32
        }]);
        this.chooseShipImage();
    },

    chooseShipImage: function () {
        var frame = ~~(Math.random() * 3);
        this.renderable.addAnimation("idle", [frame], 1);
        this.renderable.setCurrentAnimation("idle");
    }
});