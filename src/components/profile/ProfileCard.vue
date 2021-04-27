<template>
    <v-card>
        <v-img
          height="200px"
          src="https://9tailedkitsune.com/wp-content/uploads/2020/12/rem.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="title white--text pl-0">
              Messages
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              John Doe
            </p>
          </v-card-title>
        </v-img>
    </v-card>
</template>

<script lang="ts">
import {OpenIdConnectService} from "@/services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {
    components:
      {

      }
  })
export default class ProfileCard extends Vue {
    @Inject() private oidc!: OpenIdConnectService;


}
</script>


<style lang="scss">

</style>