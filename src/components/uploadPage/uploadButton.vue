<template>
    <div>
        <h2>Upload File</h2>
        <p>Supported Formats:.csv</p>
        <br/>
        <input type='file' @change='onFileSelected'>
        <br/>
        <br/>
        <button class='btn btn-primary' @click="uploadFile">Upload</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedFile:null
        }
        },
        methods:{
            onFileSelected:function(event){
                this.selectedFile = event.target.files[0]
                console.log(this.selectedFile)
            },
            uploadFile:function(){
                const url = process.env.API_URL+'/upload'
                var self = this
                const headerType = {'content-type':'multipart/form-data'}
                var fileData = new FormData()
                fileData.append('file',this.selectedFile,this.selectedFile.name)
                window.axios(
                   { 
                     url: url,
                     method:'post',
                     data:fileData,
                     withCredentials: true,
                     headers:headerType
                   }
                ).then((res)=>{
                    console.log(res.data.success)
                    if(res.data.success  === true){
                        self.$router.push('/success')
                        console.log(res)

                    }
                }).catch((err)=>{
                    // console.log({"Error":err})

                })
            }
        }
    
}
</script>
<style src ="../../assets/css/forms.css">

</style>
