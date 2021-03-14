<template>

  <div>


    
  </div>
</template>

<script lang="ts">

import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {
      components:
      {
          
      }
  })
export default class Home extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

    
}
</script>
