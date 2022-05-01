---
id: client_api_v2
title: Client API V2
---

Centrifugo has several client SDKs to establish a real-time connection with a server. Most of our libraries use WebSocket transport and send/receive messages encoded according to our bidirectional protocol. That protocol is built on top of the Protobuf schema (both JSON and binary Protobuf formats are supported). It provides asynchronous communication, sending RPC, multiplexing subscriptions to channels, etc.

For Centrifugo v4 we are introducing a new generation of SDKs for Javascript, Dart, Go, Swift, and Java – all based on new client protocol and client API iteration.

This chapter describes the core concepts of client SDKs API. Here we show examples using our Javascript client (`centrifuge-js`), but all other Centrifugo connectors now have very similar semantics and APIs very close to each other.

### Client connection states

Client connection has 4 states:

* `disconnected`
* `connecting`
* `connected`
* `closed`

:::note

`closed` state is only implemented by SDKs where it makes sense (need to clean up allocated resources when app gracefully shuts down – for example in Java SDK we close thread executors used internally).

:::

When a new Client is created it has a `disconnected` state. To connect to a server `connect()` method must be called. After calling connect Client moves to the `connecting` state. If a Client can't connect to a server it attempts to create a connection with an exponential backoff algorithm (with jitter). If a connection to a server is successful then the state becomes `connected`.

If a connection is lost (due to a missing network for example, or due to reconnect advice received from a server, or due to some client-side error that can't be recovered without reconnecting) Client goes to the `connecting` state again. In this state Client tries to reconnect (again, with an exponential backoff algorithm).

The Client's state can become `disconnected`. This happens when Client's `disconnect()` method was called by a developer. Also, this can happen due to server advice from a server, or due to a terminal problem that happened on the client-side.

Here is a program where we create a Client instance, set callbacks to listen to state updates and establish a connection with a server:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  className="unique-tabs"
  defaultValue="javascript"
  values={[
    {label: 'Javascript', value: 'javascript'},
    {label: 'Dart', value: 'dart'},
    {label: 'Swift', value: 'swift'},
    {label: 'Java', value: 'java'},
    {label: 'Go', value: 'go'},
  ]
}>
<TabItem value="javascript">

```javascript
const client = new Centrifuge('ws://localhost:8000/connection/websocket', {});

client.on('connecting', function(ctx) {
    console.log('connecting');
});

client.on('connected', function(ctx) {
    console.log('connected');
});

client.on('disconnected', function(ctx) {
    console.log('disconnected');
});

client.connect();
```

</TabItem>
<TabItem value="dart">

```dart
final onEvent = (dynamic event) {
    print('client event> $event');
};

final client = centrifuge.createClient(
    'ws://localhost:8000/connection/websocket',
    centrifuge.ClientConfig(),
);

client.connecting.listen(onEvent);
client.connected.listen(onEvent);
client.disconnected.listen(onEvent);

client.connect();
```

</TabItem>
<TabItem value="swift">

```swift
import SwiftCentrifuge

class ClientDelegate : NSObject, CentrifugeClientDelegate {
    func onConnecting(_ c: CentrifugeClient, _ e: CentrifugeConnectingEvent) {
        print("connecting", e.code, e.reason)
    }
    func onConnected(_ client: CentrifugeClient, _ e: CentrifugeConnectedEvent) {
        print("connected with id", e.client)
    }
    func onDisconnected(_ client: CentrifugeClient, _ e: CentrifugeDisconnectedEvent) {
        print("disconnected", e.code, e.reason)
    }
}

let config = CentrifugeClientConfig()
let endpoint = "ws://localhost:8000/connection/websocket"
let client = CentrifugeClient(endpoint: endpoint, config: config, delegate: ClientDelegate())
client.connect()
```

</TabItem>
<TabItem value="java">

```java
EventListener listener = new EventListener() {
    @Override
    public void onConnected(Client client, ConnectedEvent event) {
        System.out.println("connected");
    }
    @Override
    public void onConnecting(Client client, ConnectingEvent event) {
        System.out.printf("connecting: %s%n", event.getReason());
    }
    @Override
    public void onDisconnected(Client client, DisconnectedEvent event) {
        System.out.printf("disconnected %d %s", event.getCode(), event.getReason());
    }
};

Options opts = new Options();

Client client = new Client("ws://localhost:8000/connection/websocket", opts, listener);

client.connect();
```

</TabItem>
<TabItem value="go">

```go
client := centrifuge.NewJsonClient(
    "ws://localhost:8000/connection/websocket",
    centrifuge.Config{},
)
defer client.Close()

client.OnConnecting(func(e centrifuge.ConnectingEvent) {
    log.Printf("Connecting - %d (%s)", e.Code, e.Reason)
})
client.OnConnected(func(e centrifuge.ConnectedEvent) {
    log.Printf("Connected with ID %s", e.ClientID)
})
client.OnDisconnected(func(e centrifuge.DisconnectedEvent) {
    log.Printf("Disconnected: %d (%s)", e.Code, e.Reason)
})

_ = client.connect()
```

</TabItem>
</Tabs>
````

In case of successful connection Client states will transition like this:

`disconnected` (initial) -> `connecting` (`on('connecting')` called) -> `connected` (`on('connected')` called).

In case of already connected Client temporary lost a connection with a server and then successfully reconnected:

`connected` -> `connecting` (`on('connecting')` called) -> `connected` (`on('connected')` called).

In case of already connected Client temporary lost a connection with a server, but got a terminal error upon reconnection:

`connected` -> `connecting` (`on('connecting')` called) -> `disconnected` (`on('disconnected')` called).

In case of already connected Client came across terminal condition (for example, during a connection token refresh application found that user has no permission to connect anymore):

`connected` -> `disconnected` (`on('disconnected')` called).

Both `connecting` and `disconnected` events have numeric `code` and human-readable string `reason` in their context, so you can look at them and find the exact reason why the Client went to the `connecting` state or to the `disconnected` state.

You can also listen for all errors happening internally (which are not reflected by state changes, for example, transport errors happening on initial connect, transport during reconnect, connection token refresh related errors, etc) while the client works by using `error` event:

```javascript
client.on('error', function(ctx) {
    console.log('client error', ctx);
});
```

If you want to disconnect from a server call `.disconnect()` method:

```javascript
client.disconnect();
```

In this case `on('disconnected')` will be called. You can call `connect()` again when you need to establish a connection.

`closed` state implemented in SDKs where resources like internal queues, thread executors, etc must be cleaned up when the Client is not needed anymore. All subscriptions should automatically go to the `unsubscribed` state upon closing. The client is not usable after going to a `closed` state.

### Client common options

There are several common options available when creating Client instance.

* option to set connection token
* option to set connect data
* option to configure operation timeout
* tweaks for reconnect backoff algorithm (min delay, max delay)
* configure private channel prefix
* configure max delay of server pings (to detect broken connection)
* configure headers to send in WebSocket upgrade request (except `centrifuge-js`)
* configure client name and version for analytics purpose

### Client methods

* `connect()`
* `disconnect()`
* `close()`
* `send(data)`
* `rpc(method, data)`

### Client connection token

All SDKs support connecting to Centrifugo with JWT. Connection token can be set in Client option upon initialization. Example:

```javascript
const client = new Centrifuge('ws://localhost:8000/connection/websocket', {
    token: 'JWT-GENERATED-ON-BACKEND-SIDE'
});
```

If the token sets connection expiration then the client SDK will keep the token refreshed. It does this by calling a special callback function. This callback must return a new token. If a new token with updated connection expiration is returned from callback then it's sent to Centrifugo. If your callback returns an empty string – this means the user has no permission to connect to Centrifugo and the Client will move to a disconnected state. In case of error returned by your callback SDK will retry the operation after some jittered time.

An example:

```javascript
function getConnectionToken(url, ctx) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(ctx)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Unexpected status code ${res.statusCode}`);
            }
            return res.json();
        })
        .then(data => {
            resolve(data.token);
        })
        .catch(err => {
            reject();
        });
    });
}

const client = new Centrifuge(
    'ws://localhost:8000/connection/websocket',
    {
        token: 'JWT-GENERATED-ON-BACKEND-SIDE',
        getConnectionToken: function (ctx) {
            return getToken('/centrifuge/connection_token', ctx);
        }
    }
);
```

### Client-server PING/PONG

PINGs sent by a server, a client should answer with PONGs upon receiving PING. If a client does not receive PING from a server for a long time (ping interval + configured delay) – the connection is considered broken and will be re-established.

### Subscription states

Client allows subscribing on channels. This can be done by creating `Subscription` object.

```javascript
const sub = centrifuge.newSubscription(channel);
sub.subscribe();
```

When a`newSubscription` method is called Client allocates a new Subscription instance and saves it in the internal subscription registry. Having a registry of allocated subscriptions allows SDK to manage resubscribes upon reconnecting to a server. Centrifugo connectors do not allow creating two subscriptions to the same channel – in this case, `newSubscription` can throw an exception.

Subscription has 3 states:

* `unsubscribed`
* `subscribing`
* `subscribed`

When a new Subscription is created it has an `unsubscribed` state.

To initiate the actual process of subscribing to a channel `subscribe()` method of Subscription instance should be called. After calling `subscribe()` Subscription moves to `subscribing` state.

If subscription to a channel is not successful then depending on error type subscription can automatically resubscribe (with exponential backoff) or go to an `unsubscribed` state (upon non-temporary error). If subscription to a channel is successful then the state becomes `subscribed`.

```javascript
const sub = client.newSubscription(channel);

sub.on('subscribing', function(ctx) {
    console.log('subscribing');
});

sub.on('subscribed', function(ctx) {
    console.log('subscribed');
});

sub.on('unsubscribed', function(ctx) {
    console.log('unsubscribed');
});

sub.subscribe();
```

Subscriptions also go to `subscribing` state when Client connection (i.e. transport) becomes unavailable. Upon connection re-establishement all subscriptions which are not in `unsubscribed` state will resubscribe automatically.

In case of successful subscription states will transition like this:

`unsubscribed` (initial) -> `subscribing` (`on('subscribing')` called) -> `subscribed` (`on('subscribed')` called).

In case of connected and subscribed Client temporary lost a connection with a server and then succesfully reconnected and resubscribed:

`subscribed` -> `subscribing` (`on('subscribing')` called) -> `subscribed` (`on('subscribed')` called).

Both `subscribing` and `unsubscribed` events have numeric `code` and human-readable string `reason` in their context, so you can look at them and find the exact reason why Subscription went to subscribing state or to unsubscribed state.

You can listen for all errors happening internally in Subscription (which are not reflacted by state changes, for example, temporary subscribe errors, subscription token related errors, etc) by using `error` event:

```javascript
sub.on('error', function(ctx) {
    console.log("subscription error", ctx);
});
```

If you want to unsubscribe from a channel call `.unsubscribe()` method:

```javascript
sub.unsubscribe();
```

In this case `on('unsubscribed')` will be called. Subscription still kept in Client's registry, but no resubscription attempts will be made. You can call `subscribe()` again when you need Subscription again. Or you can remove Subscription from Client's registry (see below).

### Subscription management

The client SDK provides several methods to manage the internal registry of client-side subscriptions.

`newSubscription(channel, options)` allocates a new Subscription in the registry or throws an exception if the Subscription is already there. We will discuss common Subscription options below. 

`getSubscription(channel)` returns the existing Subscription by a channel from the registry (or null if it does not exist).

`removeSubscription(sub)` removes Subscription from Client's registry. Subscription is automatically unsubscribed before being removed. Use this to free resources if you don't need a Subscription to a channel anymore.

`subscriptions()` returns all registered subscriptions, so you can iterate over all and do some action if required (for example, you want to unsubscribe/remove all subscriptions).

### Listen to channel publications

Of course the main point of having Subscriptions is the ability to listen for publications (i.e. messages published to a channel).

```javascript
sub.on('publication', function(ctx) {
    console.log("received publication", ctx);
});
```

Publication context has several fields:

* `data` - publication payload, this can be JSON or binary data
* `offset` - optional offset inside history stream, this is an incremental number
* `tags` - optional tags, this is a map with string keys and string values
* `info` - optional information about client connection who published this (only exists if publication comes from client-side `publish()` API).

So minimal code where we connect to a server and listen for messages published into `example` channel may look like:

```javascript
const client = new Centrifuge('ws://localhost:8000/connection/websocket', {});

const sub = client.newSubscription('example').on('publication', function(ctx) {
    console.log("received publication from a channel", ctx.data);
});

sub.subscribe();

client.connect();
```

Note, that we can call `subscribe()` before making a connection to a server – and this will work just fine, subscription goes to `subscribing` state and will be subscribed upon succesfull connection.

### Subscription recovery state

Subscriptions to channels with `recover` option enabled maintain stream position information internally. On every publication received this information updated and used to recover missed publications upon resubscribe (caused by reconnect for example).

When you call `unsubscribe()` Subscription position state is not cleared. So it's possible to call `subscribe()` later and catch up a state.

The recovery process result – i.e. whether all missed publications recovered or not – can be found in `on('subscribed')` event context. Centrifuge protocol provides two fields:

* `wasRecovering` - boolean flag that tells whether recovery was used during subscription process resulted into subscribed state. Can be useful if you want to distinguish first subscribe attempt (when subscription does not have any position information yet)
* `recovered` - boolean flag that tells whether Centrifugo thinks that all missed publications can be successfully recovered and there is no need to load state from the main application database. It's always `false` when `wasRecovering` is `false`.

### Subscription common options

There are several common options available when creating Subscription instance.

* option to set subscription `token` (for private channels, see [below more details](#subscription-token))
* option to set subscription `data` (attached to every subscribe/resubscribe request)
* options to tweak resubscribe backoff algorithm
* option to start Subscription `since` known Stream Position (i.e. attempt recovery on first subscribe)
* option to ask server to make subscription `positioned`
* option to ask server to make subscription `recoverable`

### Subscription methods

* `subscribe()`
* `unsubscribe()`
* `publish(data)`
* `history(options)`
* `presence()`
* `presenceStats()`

### Subscription token

All SDKs support subscribing to Centrifugo private channels with JWT. Private channel subscription token can be set as a Subscription option upon initialization. Example:

```javascript
const sub = centrifuge.newSubscription(channel, {
    token: 'JWT-GENERATED-ON-BACKEND-SIDE'
});
sub.subscribe();
```

If token sets subscription expiration client SDK will keep token refreshed. It does this by calling special callback function. This callback must return a new token. If new token with updated subscription expiration returned from a calbback then it's sent to Centrifugo. If your callback returns an empty string – this means user has no permission to subscribe to a channel anymore and subscription will be unsubscribed. In case of error returned by your callback SDK will retry operation after some jittered time. 

An example:

```javascript
function getToken(url, ctx) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(ctx)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Unexpected status code ${res.statusCode}`);
            }
            return res.json();
        })
        .then(data => {
            resolve(data.token);
        })
        .catch(err => {
            reject();
        });
    });
}

const client = new Centrifuge(
    'ws://localhost:8000/connection/websocket',
    {
        token: 'JWT-GENERATED-ON-BACKEND-SIDE',
        getConnectionToken: function (ctx) {
            return getToken('/centrifuge/connection_token', ctx);
        },
        getSubscriptionToken: function (ctx) {
            // ctx has channel in the Subscription token case.
            return getToken('/centrifuge/subscription_token', ctx);
        },
    }
);

const sub = centrifuge.newSubscription(channel, {
    token: 'JWT-GENERATED-ON-BACKEND-SIDE'
});
sub.subscribe();
```

### Server-side subscriptions

We encourage using client-side subscriptions where possible as they provide a better control and isolation from connection. But in some cases you may want to use server-side subscriptions (i.e. subscriptions created by server upon connection establishment).

Technically, client SDK keeps server-side subscriptions in internal registry (similar to client-side subscriptions but without possibility to control them).

To listen for server-side subscription events use callbacks as shown in example below:

```javascript
const client = new Centrifuge('ws://localhost:8000/connection/websocket', {});

client.on('subscribed', function(ctx) {
    // Called when subscribed to a server-side channel upon Client moving to
    // connected state or during connection lifetime if server sends Subscribe
    // push message.
    console.log('subscribed to server-side channel', ctx.channel);
});

client.on('subscribing', function(ctx) {
    // Called when existing connection lost (Client reconnects) or Client
    // explicitly disconnected. Client continue keeping server-side subscription
    // registry with stream position information where applicable.
    console.log('subscribing to server-side channel', ctx.channel);
});

client.on('unsubscribed', function(ctx) {
    // Called when server sent unsubscribe push or server-side subscription
    // previously existed in SDK registry disappeared upon Client reconnect.
    console.log('unsubscribed from server-side channel', ctx.channel);
});

client.on('publication', function(ctx) {
    // Called when server sends Publication over server-side subscription.
    console.log('publication receive from server-side channel', ctx.channel, ctx.data);
});

client.connect();
```

Server-side subscription events mostly mimic events of client-side subscriptions. But again – they do not provide control to the client and managed entirely by a server side.

Additionally, Client has several top-level methods to call with server-side subscription related operations:

* `publish(channel, data)`
* `history(channel, options)`
* `presence(channel)`
* `presenceStats(channel)`

### Error codes

Server can return error codes in range 100-1999. Error codes in interval 0-399 reserved by Centrifuge/Centrifugo server. Codes in range [400, 1999] may be returned by application code built on top of Centrifuge/Centrifugo.

Server errors contain a `temporary` boolean flag which works as a signal that error may be fixed by a later retry.

Errors with codes 0-100 can be used by client-side implementation. Client-side errors may not have code attached at all since in many languages error can be distinguished by its type.

### Unsubscribe codes

Server may return unsubscribe codes. Server unsubscribe codes must be in range [2000, 2999].

Unsubscribe codes >= 2500 coming from server to client result into automatic resubscribe attempt (i.e. client goes to `subscribing` state). Codes < 2500 result into going to `unsubscribed` state.

Client implementation can use codes <2000 for client-side specific unsubscribe reasons. 

### Disconnect codes

Server may send custom disconnect codes to a client. Custom disconnect codes must be in range [3000, 4999].

Client automatically reconnects upon receiving code in range 3000-3499, 4000-4499 (i.e. Client goes to `connecting` state). Other codes result into going to `disconnected` state.

Client implementation can use codes <3000 for client-side specific disconnect reasons. 

### SDK common best practices

* Callbacks must be fast. Avoid blocking operations inside event handlers.
* Do not blindly rely on current Client or Subscription state when making client API calls – state can change at any moment, so don't forget to handle errors. 
* Disconnect from a server when mobile application goes to background since mobile OS can kill the connection at some point without any callbacks called.