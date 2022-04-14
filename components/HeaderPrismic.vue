 <template>
  <header class="navbar container">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
    <nuxt-link to="/" class="logo">{{ $prismic.asText($store.state.menu.title) }}</nuxt-link>
    <nav>
      <ul id="primary-menu" class="menu nav-menu">
        <li class="menu-item" v-for="navLink in navData.data.nav" :key="navLink.id">
          <prismic-link :class="nav__link" :field="navLink.primary.link">
            {{ $prismic.asText(navLink.primary.label) }}
          </prismic-link>
          <ul class="sub-nav" v-if="navLink.items.length>0">
            <li class="menu-item" v-for="subNavLink in navLink.items" :key="subNavLink.id">
              <prismic-link :class="nav__link" :field="subNavLink.sub_nav_link">
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
    data() {
      return {
        navData: {},
        scrolledNav: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
      }
    },
    methods: {
      toggleMobileNav () {
        this.mobileNav = !this.mobileNav;
      },
      
      checkScreen () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 768) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
    async fetch() {
      this.navData = await this.$prismic.api.getSingle('nav')
    },
}
  // if (process.browser) {

  // }

</script>

<style scoped>
</style>