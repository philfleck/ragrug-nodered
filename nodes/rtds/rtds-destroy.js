module.exports = function (RED) {
    function Node(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("rtds-destroy", Node);
}