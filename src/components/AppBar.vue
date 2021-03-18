<template>
  <div>
    <!-- Left Nav Bar -->
    <v-navigation-drawer v-model="drawer" app clipped overflow>
      <v-list-item>
        <v-avatar
          ><v-img :src="require('../assets/pikachu.png')"></v-img
        ></v-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            Micker
          </v-list-item-title>
          <v-list-item-subtitle>
            @micker5502
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-campfire</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="deep-purple accent-4" dark app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/"
        ><v-img
          max-height="40"
          max-width="40"
          :src="require('../assets/pikachu.png')"
        ></v-img
      ></router-link>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <!-- <v-tabs align-with-title>
          <v-tab>asd<v-icon atl="Page">mdi-file-document-outline</v-icon></v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs> -->

      <v-tabs centered v-show="BreakPointSmDown">
        <v-tab to="/">
          <v-icon atl="Page">mdi-home</v-icon>
        </v-tab>
        <v-divider class="mx-4" vertical></v-divider>
        <v-tab to="/about">
          <v-icon atl="Page">mdi-file-document-outline</v-icon>
        </v-tab>
        <v-divider class="mx-4" vertical></v-divider>
        <v-tab to="/Profile">
          <v-icon atl="Page">mdi-file-document-outline</v-icon>
        </v-tab>
        <v-divider class="mx-4" vertical></v-divider>
        <v-tab to="/asd">
          <v-icon atl="Page">mdi-file-document-outline</v-icon>
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon @click="check()">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar
              ><v-img :src="require('../assets/pikachu.png')"></v-img
            ></v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <a v-if="!isLogin"
              ><v-list-item-title @click="Login()">Login</v-list-item-title></a
            >
            <a v-else
              ><v-list-item-title @click="Logout()"
                >Logout</v-list-item-title
              ></a
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
  <!-- <button v-if="!isLogin" @click='Login()'>Login</button>
        <button v-else @click='Logout()'>Logout</button> -->
</template>

<script lang="ts">
import { OpenIdConnectService } from "@/services/auth/openIdConnectService";
import { Component, Inject, Vue, Watch } from "vue-property-decorator";

@Component
export default class AppBar extends Vue {
  @Inject() private oidc!: OpenIdConnectService;
  private isLogin = false;
  private user = this.oidc.getUser();
  private drawer = true;

  @Watch("drawer")
  nameChanged(newVal: boolean) {
    this.drawer = newVal;
  }

  get User() {
    return this.user;
  }

  get BreakpointSM() {
    console.log(!this.$vuetify.breakpoint.smOnly);

    return !this.$vuetify.breakpoint.smAndDown;
  }

  get BreakPointSmDown() {
    return !this.$vuetify.breakpoint.smAndDown;
  }

  private async Login() {
    console.log("Login");
    await this.oidc.triggerSignIn();
  }
  private async Logout() {
    console.log("Logout");
    await this.oidc.triggerSignOut();
  }

  private Register() {
    console.log("Register");
    window.location.href = "https://localhost:5001/Account/Register";
    this.oidc.triggerSignOut();
  }

  public mounted() {
    this.oidc.getUser().then(user => {
      console.log("gg"+user);
      this.isLogin = user !== null;
      
    });
  }
}
</script>
