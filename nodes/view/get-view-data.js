module.exports = function (RED) {
    function GetViewDataNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("get-view-data", GetViewDataNode);
}