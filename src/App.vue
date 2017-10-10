<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="navBox">
      <h1>{{ title }}</h1>
      <span class="nav">
          <router-link to="/diary" datas="dataArr">diary</router-link>
          <router-link to="/technology">technology</router-link>
          <router-link to="/interest">interest</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'homePage',
      dataArr: [{id: 1, name: '1', title: '1', description: '1111', address: '1', time: new Date()}, {id: 2, name: '2', title: '2', description: '2222', address: '2', time: new Date()}]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
h1{
  display: inline-block;
  padding-left: 20%;
}
.navBox{
  border-bottom: 1px solid #eeeeee;
}
.nav{
  margin-left: 5%;
}
a {
  color: #42b983;
  text-decoration: none;
  margin-left: 30px;
}
</style>
