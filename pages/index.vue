<template>
  <section class="container">
    <div
      class="home">
      <div class="home__wrapper">
        <div class="item">
          <nuxt-link
            to="/all-surah"
            class="item__link has-shadow">
            <MdBookIcon
              w="2em"
              h="2em" />
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/last-verse"
            class="item__link has-shadow">
            <IosBookmarkIcon
              w="2em"
              h="2em" />
            {{ AppConstant.LAST_READ }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/favorite"
            class="item__link has-shadow">
            <IosStarOutlineIcon
              w="2em"
              h="2em" />
            {{ AppConstant.FAVORITE }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/recommendation"
            class="item__link has-shadow">
            <IosNavigateIcon
              w="2em"
              h="2em" />
            {{ AppConstant.RECOMMENDATION }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/ayat-kursi"
            class="item__link has-shadow">
            <IosColorWandIcon
              w="2em"
              h="2em" />
            {{ AppConstant.AYAT_KURSI }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/asmaul-husna"
            class="item__link has-shadow">
            <MdGridIcon
              w="2em"
              h="2em" />
            {{ AppConstant.ASMAUL_HUSNA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/daily-doa"
            class="item__link has-shadow">
            <MdWifiIcon
              w="2em"
              h="2em" />
            {{ AppConstant.DAILY_DOA }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdGridIcon from 'vue-ionicons/dist/js/md-grid'
import MdWifiIcon from 'vue-ionicons/dist/js/md-wifi'
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'
import IosColorWandIcon from 'vue-ionicons/dist/js/ios-color-wand'

import { AppConstant } from '../constant'

@Component({
  components: {
    MdBookIcon,
    MdGridIcon,
    MdWifiIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon,
    IosColorWandIcon
  }
})

export default class PageIndex extends Vue {
  AppConstant = AppConstant;

  @State settingActiveTheme;
  @Mutation setHeaderTitle

  get metaHead() {
    const title = "Baca Al-Qur'an dimana saja, langsung dari web browser Anda | Qur'an Offline"
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle(AppConstant.TITLE)
  }
}
</script>

<style lang="scss" scoped>
.home__wrapper{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
}
.item {
  width: 100%;
  margin: 1em 1em;

  &__link{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    border-radius: 4px;
    font-size: 1rem;
  }
}
</style>
