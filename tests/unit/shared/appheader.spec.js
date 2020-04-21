import { shallowMount, createLocalVue } from '@vue/test-utils';
import appHeading from '@/shared/AppHeader'
 
describe('In Header Component', () => {
  let appHeaderWrapper;
 
  beforeEach(() => {
    const localVue = createLocalVue(); 
    appHeaderWrapper = shallowMount(appHeading, {
      localVue,
    });
  });
 
  afterEach(() => {
    appHeaderWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

});
