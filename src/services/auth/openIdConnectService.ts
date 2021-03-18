import { UserManager, User } from 'oidc-client';
import { User as Usermodel } from '@/store/model/users'
import { openIdConnectSettings } from './applicationUserManager';
import { userModule } from '@/store'

export class OpenIdConnectService{    

    private userManager = new UserManager(openIdConnectSettings);

    private currentUser!: User | null;

    public static getInstance(): OpenIdConnectService {

        if (!this.instance) {
            this.instance = new OpenIdConnectService();
        }
        return this.instance;
    }

    private static instance: OpenIdConnectService;
    

    private constructor() {
        // 清理过期的东西
        this.userManager.clearStaleState();
        this.userManager.getUser().then((user) => {
            if (user) {
                
                this.currentUser = user;
                /*const acc: Usermodel = {
                    userName: user.profile.name,
                    nickName: user.profile.nickName,
                    email: user.profile.email,
                }
                userModule.setUser(acc);*/

            } else {
                this.currentUser = null; 
            }
        }).catch((err) => {
            this.currentUser = null;
        });
        
        
        // 在建立（或重新建立）用户会话时引发
        this.userManager.events.addUserLoaded((user) => {
            this.currentUser = user;
            //console.log("reload");
        });

        
    }


    
    // 当前用户是否登录
    get userAvailable(): boolean {
        return !!this.currentUser;
    }

    // 获取当前用户信息
    get user(): User {
        return this.currentUser as User;
    }

    public getUser(): Promise<User|null>{
        
        return this.userManager.getUser();
    }

    // 触发登录
    public async triggerSignIn() {
        
        await this.userManager.signinRedirect();
    }

    // 登录回调
    public async handleCallback() {
        const user: User = await this.userManager.signinRedirectCallback();

    }

    // 自动刷新回调
    public async handleSilentCallback() {
        //await this.userManager.revokeAccessToken();
        const user: any = await this.userManager.signinSilentCallback();
    }

    // 触发登出
    public async triggerSignOut() {
        await this.userManager.revokeAccessToken();
        await this.userManager.signoutRedirect();
        
    }

}