<template>
  <v-card>
      <v-card-actions>
        <v-btn
          text
          small
          depressed
          @click="setBtm"
        >
          <v-avatar>
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-avatar>
          Name
          <v-icon>
              mdi-arrow-down-drop-circle-outline
          </v-icon>
        </v-btn>
        <div class="d-flex justify-end">
          <v-btn
            text
            small
            depressed
            
          >
            <v-icon>
                mdi-close
            </v-icon>
          </v-btn>
        </div>
      </v-card-actions>
      <v-divider></v-divider>
        <v-list three-line subheader class="scrollbar chatboxmsg">
          <v-list-item v-for="item in chatMessage" :key="item.userName">
              <v-list-item-avatar class="pa-0" v-if="item.userName % 2 == 0">
                <v-btn
                  fab
                  small
                  depressed
                  color="primary"
                >
                  {{ 1 }}
                </v-btn>
              </v-list-item-avatar>
              <v-list-item-content class="chatmsg">
                
                <div class="wrap-text">{{item.userName}}aasdasdasdasdasdasdasdasdaasdasdasdaasdasdasdasdasdasdasdasdaasdasdasdaasdasdasdasdasdasdasdasdaasdasdasdaasdasdasdasdasdasdasdasdaasdasdasdaasdasdasdasdasdasdasdasdaasdasdasdaasdasdasdasdasdasdasdasdaasdasdasd</div >
              </v-list-item-content> 
              <v-list-item-avatar class="pa-0" v-if="item.userName % 2 != 0">
                <v-btn
                  fab
                  small
                  depressed
                  color="primary"
                >
                  {{ 2 }}
                </v-btn>
              </v-list-item-avatar>                  
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-text-field 
          dense 
          solo-inverted
          hide-details="auto"></v-text-field>
        </v-card-actions>


  </v-card>
</template>

<script lang="ts">
import {OpenIdConnectService} from "@/services/auth/openIdConnectService";
import { chatModel } from "@/store/model/chatModel";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;

@Component(
  {
    components:
      {

      }
  })
export default class ChatWindow extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    private chatMessage: chatModel[]=[];
    private SetMessage()
    {
      for(let i = 0 ; i < 100 ; i++)
      {
        const tmp: chatModel = {
          id:i,
          userName: ""+i,
          content:"Yo"
        }
        this.chatMessage.push(tmp);
      }
    }
    private setBtm()
    {
      const tmp: chatModel = {
          id:1,
          userName: "1",
          content:"Yo"
        }
        this.chatMessage.push(tmp);
    }
    private mounted()
    {
      
      this.SetMessage();
      const container: any = this.$el.querySelector(".chatboxmsg");
      

      

      this.$nextTick(function()
      {
        container.scrollTop  = Math.floor ( container.scrollHeight ) ;
        console.log(container.scrollHeight) ;
      });
      
    }


}
</script>


<style lang="scss">
 .scrollbar::-webkit-scrollbar{
        width:10px;
        height:10px;
        /**/
      }
      .scrollbar::-webkit-scrollbar-track{
        background: rgba(239, 239, 239, 0);
        border-radius:2px;
      }
      .scrollbar::-webkit-scrollbar-thumb{
        background: #bfbfbf;
        border-radius:10px;
      }
      .scrollbar::-webkit-scrollbar-thumb:hover{
        background: #333;
      }
      .scrollbar::-webkit-scrollbar-corner{
        background: #bfbfbf;
      }

    .chatbox{
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(30vh - 9.5rem);
    }
    .wrap-text {
    //-webkit-line-clamp: unset !important;
      word-wrap: break-word;
      display: inline-block;
      max-width: 100%;
      font-size: 13px;
      background-color: #87cefa;
      padding: 8px;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
    }
    .chatboxmsg{
      height:400px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .chatmsg{
      flex-grow: 0;
      flex-basis: auto;
      flex-shrink: 1;
      padding-top: 1px;
    }
</style>