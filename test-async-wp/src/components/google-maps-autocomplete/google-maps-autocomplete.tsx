import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  tag: 'google-maps-autocomplete',
  styleUrl: 'google-maps-autocomplete.css'
})
export class MyGoogleMaps {

  @Event() placesChanged: EventEmitter;

  @Prop() apiKey: string;

  private mapsLoaded: boolean = false;
  private networkHandler = null;
  private eleInput: HTMLInputElement = null;

  render() {
    return <input
      ref={(e) => this.eleInput = e}
      class="field"
      type="text"
      id="input-autocomplete"/>
  }

  componentDidLoad() {
    this.init().then(() => {
      console.log("Google Maps ready.")
    }, (err) => {
      console.log(err);
    });
  }

  private async init(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loadSDK().then(() => {
        console.log('initInputAutoComplete');
        this.initInputAutoComplete()
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  }

  private async loadSDK(): Promise<any> {

    console.log("Loading Google Maps SDK");
    if(this.mapsLoaded) {
      return true;
    }
    const status = await Network.getStatus();
    if (status.connected) {
      return this.injectSDK();
    } else {
      return new Promise(async (resolve, reject) => {
        if (this.networkHandler == null) {
          this.networkHandler = Network.addListener('networkStatusChange', (status) => {
            if (status.connected) {
              this.networkHandler.remove();
              resolve();
              this.init().then(() => {
                console.log("Google Maps ready.")
              }, (err) => {
                console.log(err);
              });
            }
          });
        }
        reject('Not online');
      });
    }
  }

  private injectSDK(): Promise<any> {
    return new Promise((resolve) => {
      window['mapInit'] = () => {
        this.mapsLoaded = true;
        resolve(true);
      }
      let script = document.createElement('script');
      script.id = 'googleMaps';

      if(this.apiKey){
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=places&callback=mapInit';
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=mapInit';
      }
      document.body.appendChild(script);
    });
  }

  private initInputAutoComplete() {
    this.eleInput.placeholder = 'Find your local';
    const autoComplete = new google.maps.places.Autocomplete(this.eleInput);
    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      console.log('place address', place);
      this.placesChanged.emit(this.formatAddress(place));
    });
  }

  private formatAddress(place: google.maps.places.PlaceResult) {
    return {
      city: this.getComponentAdressByType([
        'administrative_area_level_1',
        'administrative_area_level_2',
        'locality',
      ], place),
      country: this.getComponentAdressByType(['country'], place),
      geoLocation: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    };
  }

  private getComponentAdressByType(types: string[], place: google.maps.places.PlaceResult) {
    const addressComponents = place.address_components.filter(addrComp => {
      let typesFind = types.join(',');
      const typeFound = addrComp.types.filter(type => typesFind.includes(type));
      if (typeFound.length > 0) {
        return true;
      }
      return false;
    });
    if(addressComponents.length > 0) {
      return addressComponents;
    }
  }
}
