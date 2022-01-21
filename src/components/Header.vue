<template>
  <div id="app" >
     <ul class="headercolor">🍆</ul>
      <div class="name"> 🍆 G.J MARKET   </div>
  
    <div>
    <div class ="inputBox shadow">
         <input type="text"> 
        <span class="searchContainer" v-on:click="search" >
             <i class="searchBtn fas fa-search"></i>
        </span>
    </div>
        
     <div id="btn_group">
         <span class="cart">
              <i class="fas fa-shopping-cart"></i>
        </span>
            <button class="btn"> login </button>
            <button class="btn2">sign up</button>    
            <button class="btn3">글 작성</button>
    </div>
    </div>

        <nav class="nav">
            <a class="home">홈</a>
            <a class="menu1">메뉴1</a>
            <a class="menu2">메뉴2</a>
            <a class="menu3">메뉴3</a>
        </nav>

  </div>
</template>

<script>
export default { 

methods:{
    search : function(){
        
    }
}
}
</script>

<style>
input:focus {
  outline: none;
}
.headercolor{
    background: #DAD9FF;
    font-size: 30px;
}
.name{
    float: left;
    font-size: 20px;
}
.inputBox {
  background:   white;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  width: 250px;
 float: right;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.searchContainer {
  float: right;
  background: linear-gradient(to right, white, #8763FB);
display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.searchBtn {
  color: white;
  vertical-align: middle;
}
.btn{
    margin-right: -4px;
    
}
.btn3{
    margin-left: 40px;
}
.btn_group{
border: 1px solid ;
background-color: rgba(0,0,0,0); 
padding: 5px;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.08)
}
.cart{
    margin-right: 7px;
    }
.nav {
  height: 30px;
  padding: 1rem;
  background:whitesmoke;
  font-weight: bold;
  display: flex;
   margin-top: 30px;
  align-items: center;
}
.home{
    margin-left: 50px;
    margin-right: 70px;
    background-color:transparent;
}
.menu1, .menu2{
    margin-right: 70px;
    transition:background-color 0.25s;
}
.btn, .btn2 ,.btn3{
     opacity: 0.5;
    border-radius: 3px;
    border: 0;
    outline: 0;
}
.btn:hover, .btn2:hover ,.btn3:hover{
      background-color: lightgray;
}
.home:hover, .menu1:hover, .menu2:hover, .menu3:hover{
     transform: scale(1.2);
}


</style>