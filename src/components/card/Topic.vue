<template>
    <v-card >
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{content.userName}}</v-list-item-title>
            <v-list-item-subtitle 
              >@{{content.nickName}}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <col>

      <v-card-text  class="text--primary ">
        {{content.content}}
      </v-card-text>
      <v-card-actions>
        <v-container fluid>
          <v-row no-gutters>
            <v-col
              v-for="(n,index) in content.images"
              :key="index"
              cols="auto"
              child-flex
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  max-height="500px"
                  max-width="250px"
                  :src="n"
                  :lazy-src="n"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions >
          <v-list-item>
            <v-btn small text > 回復 </v-btn>
            <v-divider class="mx-4" vertical></v-divider>
            <v-btn small text >
              <v-icon atl="Page">mdi-file-document-outline</v-icon>
            </v-btn>
            <v-row align="center" justify="end">
              <v-btn small icon>
                <v-icon class="mx-2"> mdi-heart </v-icon>
              </v-btn>
              <span class="subheading mr-2">{{content.like}}</span>

              <v-btn small icon>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
              </v-btn>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>

        <v-container fluid>
          <v-row no-gutters>

            <v-list-item-avatar size="32" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-col cols=11>
              <v-card class="rounded-xl" color=" darken-4" outlined>
                <v-textarea
                  value=""
                  auto-grow
                  solo
                  flat
                  hide-details
                  rows="1"
                  style="padding-top: 0px"
                  class="rounded-xl"
                ></v-textarea>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        

        <v-card 
        v-for="n in 3"
        :key="n"
        elevation="0" 
        class=" pa-1 d-flex" >
          <div class="pa-1">
            <v-avatar size="32">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-avatar>
          </div>
          <v-card-text class ="pa-1" style="word-break:break-word;">
            <v-sheet elevation="2" outlined rounded class="pa-1">
            123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123asdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasda
            </v-sheet>
          </v-card-text>
        </v-card>
    </v-card>
</template>

<script lang="ts">
import {OpenIdConnectService} from "@/services/auth/openIdConnectService";
import {Vue,Component,Inject, Prop  } from 'vue-property-decorator' ;
import {TopicModel} from '@/store/model/topicModel'
@Component(
  {
    components:
      {

      }
  })
export default class Topic extends Vue {
    @Inject() private oidc!: OpenIdConnectService;
    @Prop({
      //type: TopicModel, // 父组件传递给子组件的数据类型
      required: false, // 是否必填
      default: ()=>({}) // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
    })content !: TopicModel;
}
</script>


<style lang="scss">

</style>