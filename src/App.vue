<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <NavMenu></NavMenu>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import NavMenu from './components/NavMenu.vue'

  import './styles/styles.scss'

  export default {
    components: {
      Header, NavMenu
    },
    data: function () {
      return {
        title: 'Журнал новостей',


      };
    },
    mounted(){
      let roots = localStorage.roots
      if (roots!=='2'){
        let navBar = document.querySelector('.nav-menu')
        navBar.remove()
      }
    }
  }


</script>

