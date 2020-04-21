import { shallowMount, createLocalVue } from '@vue/test-utils';
import heading from '@/shared/Heading'
 
describe('In Header Component', () => {
  let appHeaderWrapper;
  // const router = new VueRouter({ routes });
 
  beforeEach(() => {
    const localVue = createLocalVue(); 
    appHeaderWrapper = shallowMount(heading, {
      localVue,
    });
  });
 
  afterEach(() => {
    appHeaderWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('should have h1 tag', () => {
    expect(appHeaderWrapper.html()).toContain('<h1></h1>');
  });

});
