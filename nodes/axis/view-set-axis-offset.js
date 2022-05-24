module.exports = function (RED) {
    function Node(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            send(msg);
            done();
        });
    }

    RED.nodes.registerType("view-set-axis-offset", Node);
}