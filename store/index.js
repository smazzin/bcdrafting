export const state = () => ({
	menu: {},
	footer: {}
})

export const mutations = {
	SET_MENU(state, menu) {
		state.menu = menu
	},
	SET_FOOTER(state, footer) {
			state.footer = footer
	},
	SET_ERROR_MENU(state, error) {
		state.menu = error
	},
	SET_ERROR_FOOTER(state, error) {
		state.footer = error
	}
}

export const actions = {
	async fetchMenu({ commit }, $prismic) {
		try {
			const menu = (await $prismic.api.getSingle('menu')).data

			commit('SET_MENU', menu)
		} catch (e) {
			const error = 'Please create a menu document'

			commit('SET_ERROR', error);
		}
	},
	async fetchFooter({ commit }, $prismic) {
		try {
			const footer = (await $prismic.api.getSingle('footer')).data

			commit('SET_FOOTER', footer)
		} catch (e) {
			const error = 'Please create a footer document'

			commit('SET_ERROR', error);
		}
	}
}