 <template>
  <footer class="container grid-3 footer pb-5">
    <p v-if="$store.state.footer === 'Please create a footer document'" class="logo">{{ $store.state.footer }}</p>
		<div class="contact-us">
			<prismic-rich-text :field="$store.state.footer['contact-title']" />
			<ul>
				<li>
					<span>Email:</span>
					<a href="mailto:bryan@bcdrafting.com">bryan@bcdrafting.com</a>
				</li>
				<li>
					<span>Call us:</span>
					<a href="tel:111-111-1111">111-111-1111</a>
				</li>
			</ul>
			<!-- <ul>
				<li v-for="contactData in $store.state.footer.contact" :key="contactData.id">
					<span>{{ $prismic.asText(contactData['contact-label']) }}</span>
					<a :href="`tel:${ contactData.text }`">{{ contactData.text }}</a>
				</li>
			</ul> -->
		</div>
		<div class="logo">
			<nuxt-link to="/" class="logo">
				<prismic-image :field="$store.state.footer.logo" />
			</nuxt-link>
		</div>
		<div class="hours">
			<prismic-rich-text :field="$store.state.footer['hours-title']" />
			<ul>
				<li v-for="hoursData in $store.state.footer.hours" :key="hoursData.id">
					<span>{{ $prismic.asText(hoursData['days-label']) }}</span>
					<span>{{ $prismic.asText(hoursData.hours) }}</span>
				</li>
			</ul>
		</div>
  </footer>
</template>

<script>
export default {
  name: 'footer-prismic',
}
</script>