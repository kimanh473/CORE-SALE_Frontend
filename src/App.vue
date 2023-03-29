<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.sidebar-label{
  position: absolute;
  background: #e53935;
  color: #fff;
  padding: .1rem .2rem;
  border-radius: 5px;
  font-size: .6rem;
  top: 15px;
  right: 1px;
  letter-spacing: 1px;
  line-height: 13px;
}
</style>
