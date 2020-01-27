

[![](https://img.shields.io/npm/v/ionic-google-nearby-connections.svg)](https://www.npmjs.com/package/ionic-google-nearby-connections)

# Description

Typescript Source for [Ionic wrapper](https://www.npmjs.com/package/cordova-plugin-google-nearby-connections) for the [Cordova Google Nearby Connections plugin](https://www.npmjs.com/package/cordova-plugin-google-nearby-connections).  

# Installation

```
npm i ionic-google-nearby-connections

```

# Usage

Note: The below requires the [built wrapper].(https://www.npmjs.com/package/cordova-plugin-google-nearby-connections)

## Initialize

In Root Module:

```
import { GoogleNearbyConnections } from 'ionic-google-nearby-connections/ngx';

@NgModule({
  imports: [
   ...
  ],
  providers: [GoogleNearbyConnections]
})
```

In Component Class:

```
import { GoogleNearbyConnections } from 'ionic-google-nearby-connections/ngx';

...

constructor(private nearbyConnections: GoogleNearbyConnections) {

}

...
```

## Methods

### Start Advertising

```
this.nearbyConnections.startAdvertising(deviceName: String, strategyType: String, serviceId: String): Promise<any>
```

### Start Discovery

```
GoogleNearbyConnections.startDiscovery(strategyType: String, serviceId: String): Promise<any>
```

### Stop Advertising

```
GoogleNearbyConnections.stopAdvertising(): Promise<any>
```

### Stop Discovery

```
GoogleNearbyConnections.stopDiscovery(): Promise<any>
```

### Stop All Endpoints

```
GoogleNearbyConnections.stopAllEndpoints(): Promise<any>
```

### On Endpoint Found

```
GoogleNearbyConnections.onEndpointFound(): Observable<any>
```

### On Endpoint Lost

```
GoogleNearbyConnections.onEndpointLost(): Observable<any>
```

### On Connection Found

```
GoogleNearbyConnections.onConnectionFound(): Observable<any>
```

### On Connection

```
GoogleNearbyConnections.onConnection(): Observable<any>
```


### On Connection Lost

```
GoogleNearbyConnections.onConnectionLost(): Observable<any>
```

### Accept Connection

```
GoogleNearbyConnections.acceptConnection(endpointId: String): Promise<any>
```

### Deny Connection

```
GoogleNearbyConnections.denyConnection(endpointId: String): Promise<any>
```

### Send Payload

```
GoogleNearbyConnections.sendPayload(endpointId: String, payload: String): Promise<any>
```

### On Payload Received

```
GoogleNearbyConnections.onPayloadReceived(): Observable<any>
```

### Disconnect From Endpoint

```
GoogleNearbyConnections.disconnectFromEndpoint(endpointId: String): Promise<any>;
```