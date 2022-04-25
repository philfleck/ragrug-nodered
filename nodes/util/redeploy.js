module.exports = function (RED) {
    function Node(config) {
        RED.nodes.createNode(this, config);
        this.flowId = config.flowId;

        this.on('input', function (msg, send, done) {
            msg.payload = this.flowId;
            send(msg);
            done();
        });
    }

    RED.nodes.registerType("redeploy", Node);
}