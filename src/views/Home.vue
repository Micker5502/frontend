<template>

  <div>
    <v-skeleton-loader :loading="false" height="94" type="list-item-two-line" class="ma-2">
      <ProfileCard></ProfileCard>
    </v-skeleton-loader>
    <v-skeleton-loader :loading="false" height="94" type="list-item-two-line" class="ma-2">
      <Topic class="mb-4 mt-4" 
      v-for="(n,index) in topics"
      :content=n
      :key=index></Topic>
    </v-skeleton-loader>
    <v-skeleton-loader :loading="false" height="94" type="list-item-two-line" class="ma-2">
      </v-skeleton-loader>
  </div>
</template>

<script lang="ts">

import {OpenIdConnectService} from "../services/auth/openIdConnectService";
import {Vue,Component,Inject  } from 'vue-property-decorator' ;
import ProfileCard from '@/components/profile/ProfileCard.vue';
import Topic from '@/components/card/Topic.vue';
import {TopicModel} from '@/store/model/topicModel'

@Component(
  {
      components:
      {
          ProfileCard,
          Topic
      }
  })
export default class Home extends Vue {
   @Inject() private oidc!: OpenIdConnectService;

  private topics: Array<TopicModel> = [
    {
      userName: "笑死人",
      nickName:  "Cool",
      content: "testing",
      like:     3,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "1",
      nickName:  "123",
      content: "123",
      like:     2,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "1",
      nickName:  "123",
      content: "123",
      like:     2,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "你",
      nickName:  "他",
      content: "123",
      like:     100,
      images:  [
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972443.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972442.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972441.jpg",
        "https://s1.zerochan.net/Rem.%28Re%3AZero%29.600.2972002.jpg",
      ]
    },
    {
      userName: "我",
      nickName:  "是不是",
      content: "123",
      like:     3,
      images:  [
        
      ]
    }]

    mounted()
  {
     const signalr = this.$signalr.withUrl('https://localhost:5002/chathub',{ accessTokenFactory: async  () => await this.$oidc.getUser().then((res)=> "" +res?.access_token),transport: 4,withCredentials: true})
                  .build();
    //const signalr = this.$signalr.withUrl('https://localhost:5002/chathub',{}).build();
                 
    
    signalr.start().then(() => {
      
        console.log('连接');
        signalr.on('ReceiveMessage',(res: any,res2: any)=>{
          console.log(res+res2);
        });
        signalr.invoke('SendMessage',"asd","asd")
 
    });
    
    
    
  }
}
</script>
