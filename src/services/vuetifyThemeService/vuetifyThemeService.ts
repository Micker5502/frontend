import { Vue } from "vue-property-decorator";
import store from '@/store'
export class VuetifyThemeService extends Vue{    


    public setDarkMode()
    {
        store.commit("setDarkMode");
    }

    get getDarkMode(): boolean
    {
        return store.state.darkmode;
    }
   
}