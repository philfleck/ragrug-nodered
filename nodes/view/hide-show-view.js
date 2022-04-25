module.exports = function (RED) {
    function HideShowNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("hide-show-view", HideShowNode);
}