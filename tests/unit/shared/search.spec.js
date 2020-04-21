import { shallowMount, createLocalVue } from '@vue/test-utils'
import vuex from 'vuex'

import search from '@/shared/Search.vue'

describe('search.vue', () => {
  let appHeaderWrapper;
  let getResult = jest.fn()
  
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(vuex) 
    appHeaderWrapper = shallowMount(search, {
      localVue,
      data: () => ({ tvShowName: '' }),
      computed: {
        getResult: () => getResult
      }
    });
  });
  
  afterEach(() => {
    appHeaderWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('should text input for search', () => {
    expect(appHeaderWrapper.html()).toContain('<input type="text" placeholder="Search">');
  });

  it('should text input for search', () => {
    appHeaderWrapper.vm.goToDetailPage = jest.fn();
    appHeaderWrapper.vm.goToDetailPage();
    expect(appHeaderWrapper.vm.goToDetailPage).toHaveBeenCalled()
  });
})
