import {VuexModule, Module,getModule,  Mutation, Action } from "vuex-module-decorators"
import store from '@/store'
import { themeConfig } from "../model/themeConfig"
import { BaseModelResp } from "@/store/model/BaseModel"

@Module({
    namespaced: true,
    name: "themeConfig",
})

class ThemeConfigModule extends VuexModule{
    themeConfig: themeConfig | null  = null
    
    @Mutation
    setUser(themeConfig: themeConfig){ 
        this.themeConfig = themeConfig;
    }

    get theme()
    {
        return this.themeConfig
    }
}

export default ThemeConfigModule


