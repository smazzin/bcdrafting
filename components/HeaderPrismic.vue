 <template>
  <header class="navbar container" :class="{ menuActive: menuActive }">
    <nuxt-link to="/" class="logo">
      <prismic-image :field="$store.state.logo.image" />
    </nuxt-link>
    <nav>
      <button id="menu-toggler" data-class="menu-active" class="hamburger" @click="toggle">
          <span class="hamburger-line hamburger-line-top"></span>
          <span class="hamburger-line hamburger-line-middle"></span>
          <span class="hamburger-line hamburger-line-bottom"></span>
      </button>
      <ul id="primary-menu" class="menu nav-menu">
        <li class="menu-item" v-for="navLink in navData.data.nav" :key="navLink.id">
          <prismic-link class="nav__link" :field="navLink.primary.link">
            {{ $prismic.asText(navLink.primary.label) }}
          </prismic-link>
          <ul class="sub-nav" v-if="navLink.items.length>0">
            <li class="menu-item" v-for="subNavLink in navLink.items" :key="subNavLink.id">
              <prismic-link class="nav__link" :field="subNavLink.sub_nav_link">
                {{ $prismic.asText(subNavLink.sub_nav_link_label) }}
              </prismic-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-prismic',
    watch: {
      '$route' () {
        this.menuActive = false
      }
    },
    data() {
      return {
        navData: {},
        menuActive: false
      }
    },
    async fetch() {
      this.navData = await this.$prismic.api.getSingle('nav')
    },
    methods: {
      open() {
        this.menuActive = true;
      },
      close() {
        this.menuActive = false;
      },
      toggle() {
        if (this.menuActive) {
          this.close();
        } else {
          this.open();
        }
      }
    }
}
  // if (process.browser) {

  // }

</script>

<style scoped>
</style>