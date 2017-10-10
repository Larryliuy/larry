<template>
  <div class="diary">
    <ul>
      <li>
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <p><span>{{time}}</span> 撰于<span>{{address}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Diary',
  data () {
    return {
      time: new Date(),
      title: '标题',
      description: '描述描述描述描述描述描述描述',
      address: '深圳'
    }
  },
  prop: ['datas']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  margin: 0 25%;
}

li {
  display: block;
  margin: 0 10px;
  width: 50%;
  text-align: left;
}

a {
  color: #42b983;
}
</style>
