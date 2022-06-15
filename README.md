Adds nodes for Node-RED that interact with IATK on the RagRug client. Many of the included nodes do not have server-side code and are only executed on the RagRug client.

There are several examples available that can be imported into Node-RED directly by selecting Import > Examples > @ragrug/ragrug-nodered in the Node-RED menu.

![](https://raw.githubusercontent.com/philfleck/ragrug-nodered/main/importExample.png)

RagRug is available here: https://github.com/philfleck/ragrug

### Nodes with Special Behavior on the RagRug Client

Most default Node-RED nodes do not work on the client, only those listed here have any effect.

#### Inject

Must use either inject once or repeat to have any effect. Always returns current timestamp regardless of node settings.

#### Debug

Works as normal. Only supports printing the complete message, or one attribute.

#### Function

Executes contained code on the client, does not support initialize and finalize parts of function.

#### MQTT In

Works as normal. Always uses RagRug's MQTT server. Ignores all settings except the topic.

#### MQTT Out

Works as normal. Always uses RagRug's MQTT server. Ignores all settings except the topic.

#### HTTP Request

Works as normal. Only supports raw text and JSON outputs. Only supports ignoring payload and sending as request body. Ignores all other settings except for method and headers, headers need to be set through the incoming message like normal.

#### Button

On load, creates a floating button in the scene. When clicked sends a message to any nodes connected to its output, this message is client-side only. Ignores all other settings except for the label.

### TODOs

- Support more features of already supported nodes. Examples:
    -  Custom messages for Inject.
    -  Initialize and finalize for Function.
    -  Arbitrary server for MQTT.
    -  Colors and icons for Button.
-  Support more Node-RED default nodes. Examples:
    -  Complete and Catch for better flow control and error handling.
    -  Switch, Change, and Range for more intuitive message manipulation.
    -  Delay and Trigger for timing control.
    -  Split, Join, Sort, and Batch for multi-message operations.
    -  Various database and communication protocol nodes.
