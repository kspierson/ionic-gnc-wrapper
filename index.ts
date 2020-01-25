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

  @Cordova({
    observable: true
  })
  acceptConnection(endpointId: String): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  denyConnection(endpointId: String): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  sendPayload(endpointId: String, payload: String): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  onPayloadReceived(): Observable<any> {
    return;
  }

}