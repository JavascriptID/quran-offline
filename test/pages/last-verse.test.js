/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/last-verse.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

import dummySurahInfo from './__mocks__/surah-info-item'

const dummyComponent = {
  extends: Component,
  data() {
    return {
      allSurahList: [dummySurahInfo]
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    allSurahList: [dummySurahInfo],
    lastReadVerse: { surah: 1, verse: 1 }
  },
  mutations: {
    [Types.SET_HEADER_TITLE](state, data) {
      state.headerTitle = data
    },
    [Types.SET_THEME](state, data) {
      state.settingActiveTheme = data
    }
  },
  actions: {
    fetchAllSurah: jest.fn().mockResolvedValue([dummySurahInfo])
  }
})

const createWrapper = () => {
  return shallowMount(dummyComponent, {
    sync: false,
    store,
    router,
    i18n,
    localVue,
    mocks: {
      allSurahList: [dummySurahInfo]
    }
  })
}

describe('pages last-verse.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.lastRead')
    const expected = {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: '#333' }
      ]
    }
    expect(wrapper.vm.metaHead).toEqual(expected)
    done()
  })
})
