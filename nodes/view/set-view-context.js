module.exports = function (RED) {
    function SetViewContextNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("set-view-context", SetViewContextNode);
}