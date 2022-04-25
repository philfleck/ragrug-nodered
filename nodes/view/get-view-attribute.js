module.exports = function (RED) {
    function GetViewAttributeNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("get-view-attribute", GetViewAttributeNode);
}