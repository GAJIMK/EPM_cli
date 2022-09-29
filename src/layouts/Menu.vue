<template>
    <div class="container-fluid">
      <Header />
      <b-row class="nav">
      <b-col class="left"><side-bar class="sidebar"></side-bar></b-col>
      <b-col class="twiceCol" cols="10"> <div class="container">
        <slot />
      </div></b-col>
     </b-row>
      
     
    </div>
  </template>
  
  <script>
  import Header from '@/components/common/Header.vue';
  import SideBar from '@/components/common/SideBar.vue';
  export default {
    components: {
      Header,
      SideBar
    },
  };
  </script>
  
  <style scoped>
  .container,
  .container-fluid {
    padding: 0px 0px;
    position: relative;
  }
  .left{
    width: 200px;
  }
    .twiceCol{
        padding:0 3% 0 3%;
    }
    .nav{
        height: 100%;
    }
  </style>
  