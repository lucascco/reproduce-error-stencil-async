import { TestWindow } from '@stencil/core/testing';
import { WrapperComponent } from './wrapper-component';

describe('wrapper-component', () => {
  it('should build', () => {
    expect(new WrapperComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLWrapperComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [WrapperComponent],
        html: '<wrapper-component>' 
          + '</wrapper-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
