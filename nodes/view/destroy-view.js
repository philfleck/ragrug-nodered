module.exports = function (RED) {
    function DestroyViewNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("destroy-view", DestroyViewNode);
}