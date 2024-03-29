/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GoogleMapsAutocomplete {
    'apiKey': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
    'transfomFirstName': () => Promise<void>;
  }
  interface WrapperComponent {}
}

declare global {


  interface HTMLGoogleMapsAutocompleteElement extends Components.GoogleMapsAutocomplete, HTMLStencilElement {}
  var HTMLGoogleMapsAutocompleteElement: {
    prototype: HTMLGoogleMapsAutocompleteElement;
    new (): HTMLGoogleMapsAutocompleteElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLWrapperComponentElement extends Components.WrapperComponent, HTMLStencilElement {}
  var HTMLWrapperComponentElement: {
    prototype: HTMLWrapperComponentElement;
    new (): HTMLWrapperComponentElement;
  };
  interface HTMLElementTagNameMap {
    'google-maps-autocomplete': HTMLGoogleMapsAutocompleteElement;
    'my-component': HTMLMyComponentElement;
    'wrapper-component': HTMLWrapperComponentElement;
  }
}

declare namespace LocalJSX {
  interface GoogleMapsAutocomplete {
    'apiKey'?: string;
    'onPlacesChanged'?: (event: CustomEvent<any>) => void;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface WrapperComponent {}

  interface IntrinsicElements {
    'google-maps-autocomplete': GoogleMapsAutocomplete;
    'my-component': MyComponent;
    'wrapper-component': WrapperComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'google-maps-autocomplete': LocalJSX.GoogleMapsAutocomplete & JSXBase.HTMLAttributes<HTMLGoogleMapsAutocompleteElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'wrapper-component': LocalJSX.WrapperComponent & JSXBase.HTMLAttributes<HTMLWrapperComponentElement>;
    }
  }
}


