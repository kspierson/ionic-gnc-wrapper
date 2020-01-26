import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'GoogleNearbyConnections',
  plugin: 'cordova-plugin-google-nearby-connections',
  pluginRef: 'cordova.plugins.GoogleNearbyConnections',
  repo: '',
  platforms: ['Android'],
  install: '',
})
@Injectable()
export class GoogleNearbyConnections extends IonicNativePlugin {
  @Cordova()
  startAdvertising(deviceName: String, strategyType: String, serviceId: String): Promise<any> {
    return;
  }

  @Cordova()
  startDiscovery(strategyType: String, serviceId: String): Promise<any> {
      return;
  }

  @Cordova()
  stopAdvertising(): Promise<any> {
    return;
  }

  @Cordova()
  stopDiscovery(): Promise<any> {
    return;
  }

  @Cordova()
  stopAllEndpoints(): Promise<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onEndpointFound(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onEndpointLost(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onConnectionFound(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onConnection(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onConnectionLost(): Observable<any> {
    return;
  }

  @Cordova()
  acceptConnection(endpointId: String): Promise<any> {
    return;
  }

  @Cordova()
  denyConnection(endpointId: String): Promise<any> {
    return;
  }

  @Cordova()
  sendPayload(endpointId: String, payload: String): Promise<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onPayloadReceived(): Observable<any> {
    return;
  }

  @Cordova()
  disconnectFromEndpoint(endpointId: String): Promise<any> {
    return;
  }

}