<template>
  <v-app>

    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { OpenIdConnectService } from "./services/auth/openIdConnectService";

@Component({})
export default class App extends Vue {
  @Provide()
  private oidc: OpenIdConnectService = OpenIdConnectService.getInstance();

  default_layout = "default";

  get layout() {
    //return (this.$route.meta.layout || this.default_layout) + "-layout";
    console.log((this.$route.meta.layout || this.default_layout) + "-layout");
    return this.default_layout + "-layout";
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
