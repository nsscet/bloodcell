<template lang="html">
  <div class="card card-dash">
  <div class="card-body">
    <h4 class="card-title ">
      <div class="row">
        <div class="col-6">
          <span class="count">{{count}}</span>

        </div>
        <div class="col-6 ">
          <i :class="icon" class="fa-3x"></i>

        </div>
      </div>
    </h4>
    <h6 class="card-text card-text-dash mb-2" v-text="title"></h6>
  </div>
</div>

</template>

<script>
export default {
  props: [
    'icon',
    'title',
    'link',
    'count'
  ],
}
</script>

<style lang="css">

.count{
  margin-left: auto;
  font-size: 56px;
  padding-right: 0;
}
.card-dash{
  margin:5px;
  color: #000000;
  background:#FFEB3B;
  /*opacity: 0.7;*/

}
.card-text-dash{
  font-size:30px;
  font-weight: lighter;
}

.link{
  color: black
}
</style>
