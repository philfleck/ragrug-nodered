module.exports = function (RED) {
    function GetViewNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("get-view", GetViewNode);
}