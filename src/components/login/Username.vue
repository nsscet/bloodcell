<template lang="html">
  <div class="container form-group">
    <div class="row algin-items-start">
      <input type="text" name="username" value="" placeholder="Username" class="rounded-0 form-control w-100 username-input">
    </div>
    <div class="row algin-items-end">
      <button type="submit" name="" class="btn btn-primary ml-auto next-button">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
input{
  outline: none;
}

.next-button{
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
}

.username-input{
  margin-top: 30px;
  background: transparent;
  /*outline: none;*/

  border:none;
  border-bottom:1px black solid;
  padding-left: 0px;
}

.username-input:focus{
  background: transparent;

}


</style>
