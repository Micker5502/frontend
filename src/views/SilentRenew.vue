<template>
<div></div>
</template>

<script lang="ts">
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
@Component(
  {
  })
export default class SilentRenew extends Vue {
   
  @Inject() private oidc!: OpenIdConnectService;
    public async created() {
      await this.$oidc.handleSilentCallback();
      //console.log(this.$oidc.user);
    } 
  
}
</script>