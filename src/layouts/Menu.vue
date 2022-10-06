<template>
    <div class="container-fluid">
      <Header />
     <div class="con" >
      <b-col class="left" cols="2">
        <side-bar class="sidebar"/>
      </b-col>
   
      <b-col class="twiceCol" cols="10"> 
        <div class="container">
      <slot />
      </div>
      </b-col>
     </div>
      
   
      
     
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
    height:100%;
    padding: 0% 0% 0% 0%;
  }
    .twiceCol{
        padding:0 3% 0 2%;
    }
    .nav{
        height: 100vh;
    }
    .sidebar{
      width: 100%;
      height: 100vh;
    }
    .con{
      display: flex;
      height: 100vh;
    }
  </style>
  