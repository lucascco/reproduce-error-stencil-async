import { Component, h } from '@stencil/core';


@Component({
  tag: 'wrapper-component',
  styleUrl: 'wrapper-component.css',
    shadow: true,
})
export class WrapperComponent {

  private myComponent: HTMLMyComponentElement;


  render() {
    return (
      <div class="wrapper">
        <button onClick={() => this.myComponent.transfomFirstName()}>Transform name</button>
        <my-component first="Lucas" middle="Carvalho" last="Correa"
          ref={comp => this.myComponent = comp}>
        </my-component>
        <google-maps-autocomplete></google-maps-autocomplete>
      </div>
    );
  }
}
