<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="TestApiConnect()">Test Api Connect</button><br>

  </div>
</template>
<script lang="ts">
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
@Component(
  {
  })
export default class About extends Vue {
   
  @Inject() private oidc!: OpenIdConnectService;
    

    private async TestApiConnect()
    {
      console.log(this.oidc.user.token_type + " " +this.oidc.user.access_token);
        this.$https.defaults.headers.common['Authorization'] =  this.$oidc.user.token_type + " " + this.$oidc.user.access_token;
        const res: unknown = await this.$https.post(
        this.$urls.version+ this.$urls.testApiConnect);
        console.log(this.$oidc.user.profile.UserName);
        //this.$urls.version+ this.$urls.test);
        console.log(res);
    }
  
}
</script>

