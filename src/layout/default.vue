<template>
  <div>
    <AppBar/>
    <v-row no-gutters>
      <v-col> </v-col>

      <v-col cols="9">
        <v-main>
          <v-container>
            <router-view />
          </v-container>
        </v-main>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import AppBar from "@/components/AppBar.vue";
//import NavBar from "@/components/NavBar.vue";
import { OpenIdConnectService } from "@/services/auth/openIdConnectService";
import { Vue, Component, Inject } from "vue-property-decorator";

@Component({
  components: {
    AppBar,
    //NavBar
  }
})
export default class Default extends Vue {
  @Inject() private oidc!: OpenIdConnectService;
}
</script>
<style></style>
