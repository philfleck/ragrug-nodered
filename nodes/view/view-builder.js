module.exports = function (RED) {
    function ViewBuilderNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', function (msg, send, done) {
            done();
        });
    }

    RED.nodes.registerType("view-builder", ViewBuilderNode);
}