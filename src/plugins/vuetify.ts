import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {themes:{
        light:{
                primary: colors.indigo.base,
                secondary: colors.lightBlue.base,
                accent: colors.blue.base,
                error: colors.red.base,
                warning: colors.orange.base,
                info: colors.cyan.base,
                success: colors.green.base
            }
    }}
});
