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
            onFileSelected:(event)=>{
                this.selectedFile = event.target.files[0]
                console.log(this.selectedFile)
            },
            uploadFile:()=>{
                const url = process.env.API_URL+'/upload'
                var fileData = new FormData()
                fileData.append('file',this.selectedFile,this.selectedFile.name)
                window.axios.post(url,fileData).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    
}
</script>
<style src ="../../assets/css/forms.css">

</style>
