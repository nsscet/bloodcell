<template lang="html">
  <div>
    <Navbar></Navbar>

    <div class="container-fluid main">
      <!-- <div class="sidebar col-2"> -->
        <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Profile<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Analytics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Export</a>
            </li>
          </ul>
          <hr>

          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#">New Donation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New Donor</a>
            </li>
          </ul>
          <hr>
        </nav>
      </div>
    <!-- </div> -->

    <!-- <template lang="html"> -->
  <div>
    <div class="row">

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/students" icon="fa fa-graduation-cap" title="Prop" :count="count1"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/users" icon="fa fa-users" title="Prop" :count="count2"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/roles" icon="fa fa-tags" title="Prop" :count="count3"></panel>
      </div>

      <div class="col-sm-3 col-md-3 card-container">
        <panel link="/permissions" icon="fa fa-user-secret" title="Prop" :count="count4"></panel>
      </div>

    </div>
  </div>

<!-- </template> -->

  </div>
</template>

<script>
import Navbar from '../navbar/Master'
export default {

  components: {
    Navbar
  }
}
</script>

<style lang="css">
.main{
  padding: 0px;
  min-height:100%
}
.sidebar{
  padding-top: 10px;
  margin-top:60px;
  min-height: 100%;
  padding-left: 0px;
}

.nav-link{
  color: #E0E0E0
}
.nav-link:hover {
  color: #FFFFFF
}
.nav-item:hover{
  border-left: 2px solid #00FFFF;
}
</style>
