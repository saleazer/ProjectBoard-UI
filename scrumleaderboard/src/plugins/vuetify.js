import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
          light: {
            primary: colors.teal.base,
            secondary: colors.deepPurple.base,
            accent: colors.blueGrey.base,
            error: colors.red.base,
            warning: colors.amber.base,
            info: colors.indigo.base,
            success: colors.pink.base
            },
        },
      },
}

export default new Vuetify(opts)