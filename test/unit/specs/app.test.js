import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';


describe('App', () => {
  it('has component parameter defined as an object.', () => {
    expect(typeof App.components).toBe('object')
  })

  it('has data on the components dictionary.', () => {
    const appCommponents = App.components;
    const appComponentsLength = Object.keys(appCommponents).length;
    const hasAppComponents = Boolean(appComponentsLength);
    
    expect(hasAppComponents).toBeTruthy();
  })
});

describe('Mounted App', () => {
  const wrapper = shallowMount(App);

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});