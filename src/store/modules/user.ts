import {VuexModule, Module,getModule,  Mutation, Action } from "vuex-module-decorators"
import store from '@/store'
import { User } from "../model/users"
import { BaseModelResp } from "@/store/model/BaseModel"

@Module({
    namespaced: true,
    name: "user",
})

class UserModule extends VuexModule{
    user: User | null  = null
    
    @Mutation
    setUser(user: User){ 
        this.user = user;
    }

    get userDetail()
    {
        return this.user
    }

    @Action({commit: 'setUser',rawError: true})
    async getAccount(account: BaseModelResp<User>): Promise<User>
    {
        const user: User = {
            userName: account.content.userName,
            email: account.content.email,
            nickName: account.content.nickName,
        }

        return user
    }

}

export default UserModule


