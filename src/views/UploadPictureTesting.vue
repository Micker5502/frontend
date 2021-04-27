<template>
  <div>
      testing

        <v-dialog v-model="dialog"  persistent max-width="600">
          <v-card>
          <v-card-text>
            <UploadPicture @cloaseDialog="cloaseDialog"></UploadPicture>
          </v-card-text>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col>
            <v-btn @click="openUploadPicture()">Open</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="chat-window-div">
              <ChatWindow></ChatWindow>
            </div>
          </v-col>
        </v-row>

  </div>
</template>
<script lang="ts">
import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject } from 'vue-property-decorator' ;
import UploadPicture from '@/components/account/UploadPicture.vue';
import ChatWindow from '@/components/navigation/ChatWindow.vue';


@Component(
  {
    components:
      {
        UploadPicture,
        ChatWindow
      }
  })
export default class About extends Vue {

    @Inject() private oidc!: OpenIdConnectService;
    private dialog = false;
    
    private openUploadPicture()
    {
        this.dialog = true;
    }
    cloaseDialog(){
      this.dialog = false;
    }  

    
}
</script>

<style lang="scss">
.chat-window-div
{
  max-width: 300px;
}

</style>