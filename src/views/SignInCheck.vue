<template>
<div></div>
</template>

<script lang="ts">
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
@Component(
  {
  })
export default class SignInCheck extends Vue {
   
  @Inject() private oidc!: OpenIdConnectService;
    public async created() {
      await this.oidc.triggerSignIn();
    } 
  
}
</script>