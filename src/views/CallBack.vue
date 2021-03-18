<template>
<div>登录成功，返回中</div>
</template>

<script lang="ts">
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
@Component(
  {
  })
export default class CallBack extends Vue {
   
  @Inject() private oidc!: OpenIdConnectService;
    public async created() {
      await this.oidc.handleCallback();
      this.$router.push({ path: '/' });
    } 
  
}
</script>