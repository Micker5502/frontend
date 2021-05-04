<template>
    <div>
        <div v-show="pictureAvailble">
            <v-row>
                <v-col cols=12 class="pa-5 ">
                    <div class="cropper-wrapper">
                        <div v-bind:style="{ backgroundImage: 'url(' +image + ')' }" class="image-background"></div>
                        <cropper 
                        ref="cropper"
                        :src="image" 
                        class="cropper-background"
                        style="height:100%;max-height:400px;max-width:100%; min-height:200px;min-width:200px;" 
                        background-class="cropper-background"
                        :debounce="false"
                        :stencil-component="$options.components.CircleStencil"
                        @change="change"
                        >
                        
                        </cropper>
                        <div class="vertical-buttons">
                            <div class="square-button">
                                <v-btn icon @click="zoomOut">-</v-btn>
                            </div>
                            <div class="square-button">
                                 <v-btn icon @click="zoomIn">+</v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>  
                <v-col class="pl-6 d-flex justify-center" cols=6>
                    <preview
                        style="border-radius: 50%;"
                            :height="previewHeight"
                            :width="previewHeight"
                            :image="result.image"
                            :coordinates="result.coordinates"
                        />
                </v-col>
                <v-col cols=6 class="d-flex justify-center flex-row-reverse pr-6">
                    <preview
                            :width="previewHeight"
                            :height="previewHeight"
                            :image="result.image"
                            :coordinates="result.coordinates"
                        />
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </div>
        <v-file-input
        accept="image/*"
        prepend-icon="mdi-camera"
        @change="fileImage"
        ></v-file-input>
        <v-row>
            <v-col class="pa-6 d-flex justify-center">
                <v-btn @click="closeDialog">Cancel</v-btn>
                
            </v-col>
                <v-col class="pa-6 d-flex justify-center">
                <v-btn @click="TestUploadPicture($event)">Upload</v-btn>
                
            </v-col>
        </v-row>

    </div>
</template>

<script lang="ts">
import {OpenIdConnectService} from "@/services/auth/openIdConnectService";
import {Vue,Component,Inject,Emit  } from 'vue-property-decorator' ;
import { CircleStencil ,Preview } from 'vue-advanced-cropper';
import {UploadPictureModel} from '@/store/model/uploadPictureModel';
import { serialize } from 'object-to-formdata';

@Component(
  {
    components:
      {
        CircleStencil,
        Preview
      }
  })
export default class UploadPicture extends Vue {
   //<v-img :src="file"/>
    @Inject() private oidc!: OpenIdConnectService;
    private file: any| null = null;
    private image: any| null = null;
    private pictureAvailble = false;
    private pictureSize = 100;
    private uploadImageDialog = false;
    
    private result: any ={
      coordinates: null,
      image: null ,
      canvas: null
    }

    @Emit("cloaseDialog")
    closeDialog(){
        return true;
    }  
    private zoomIn()
    {
        const cropper: any = this.$refs.cropper;
        cropper.zoom(2);
    }
    private zoomOut()
    {
        const cropper: any = this.$refs.cropper;
        cropper.zoom(0.5);
        //imgur accesstoken = 3a6586dab1af3082226a21d5aebe6a387a96adf5
    }

    //響應式顯示
    get previewHeight()
    {
        let previewHeight = 80;
        if(!this.$vuetify.breakpoint.smAndDown)
        {
            previewHeight = 120;
        }
        return previewHeight;
    }
    
    fileImage(file: any)
    {

        this.pictureAvailble = true;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            this.image = e.target?.result;
            this.file = file;

        };
        

    }
  
    change(result: any) {
      this.result = result;
    }
    private async TestUploadPicture(event: any)
    {
        console.log("Start Upload!");
        let image: Blob;
        this.$https.defaults.headers.common['Authorization'] =  this.$oidc.user.token_type + " " + this.$oidc.user.access_token;
        this.$https.defaults.headers['Content-Type'] = 'multipart/formdata';

        const formData = new FormData();
        
        await this.result.canvas.toBlob(async (blob: Blob)=>{
            const files: UploadPictureModel = {
                files:[{
                    description: "gg"
                },{
                    description: "gg2"
                }]
            }
            const formData = serialize(files, { indices: true })
            // Object.entries(files).forEach(([key, value]) => {
            //     if (typeof(value) === 'object') {
            //         value = new Blob([JSON.stringify(value)], {type : 'application/json'});// or just JSON.stringify(value)
            //     }
            //     formData.append(key, value);
            // }); 

            image = blob;
            //formData.append('files[][description]',"gg")
            //formData.append('files[][description]',"gg")
            //formData.append('fuck[][description]',"gg")

            // formData.append('image',image);
            // formData.append('image',image);
            // formData.append('image',image);
            // formData.append('image',image);

            const res: unknown = await this.$https.post(this.$urls.version+ this.$urls.testUploadPicture,formData);
        });

        //formData.append('files',this.file);
        
        
        
        
    }

}
</script>


<style lang="scss">

.cropper-wrapper {
    overflow: hidden;
    position: relative;
    max-height: 400px;
    min-width:200px;
    background: black;
}
.cropper-background {
    background: none;
}
.image-background {
    position: absolute;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    left: -10px;
    top: -10px;
    background-size: cover;
    background-position: 50%;
    filter: blur(5px);
}
.vertical-buttons {
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
}

.square-button {
	
	display: flex;
	align-items: center;
	justify-content: center;
	height: 42px;
	width: 42px;
	margin-bottom: 10px;
	cursor: pointer;
}

</style>