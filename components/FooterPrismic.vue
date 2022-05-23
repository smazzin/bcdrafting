 <template>
  <footer class="bg-gray-base">
		<div class="container">
			<div class="footer-grid-3 footer">
				<p v-if="$store.state.footer === 'Please create a footer document'" class="logo">{{ $store.state.footer }}</p>
				<div class="footer-contact-us pb-2">
					<prismic-rich-text :field="$store.state.footer['contact-title']" />
					<ul class="list-unstyled">
						<li>
							<span>Email:</span>
							<a href="mailto:bryan@bcdrafting.com">bryan@bcdrafting.com</a>
						</li>
						<li>
							<span>Call us:</span>
							<a href="tel:111-111-1111">111-111-1111</a>
						</li>
					</ul>
				</div>
				<div class="footer-logo pb-2">
					<nuxt-link to="/" class="logo">
						<prismic-image :field="$store.state.footer.logo" />
					</nuxt-link>
				</div>
				<div class="footer-hours pb-2">
					<prismic-rich-text :field="$store.state.footer['hours-title']" />
					<ul class="list-unstyled">
						<li v-for="hoursData in $store.state.footer.hours" :key="hoursData.id">
							<span>{{ $prismic.asText(hoursData['days-label']) }}</span>
							<span>{{ $prismic.asText(hoursData.hours) }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="copyright bg-navy text-light-gray text-small text-center">
			<span>© {{new Date().getFullYear()}} BC Drafting &amp; Design. All rights reserved.</span>
		</div>
  </footer>
</template>

<script>
export default {
  name: 'footer-prismic',
}
</script>