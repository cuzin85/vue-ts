<template>
    <div id="app">
        <hello :message="msg"></hello>
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>{{status}}</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import hello from "./components/hello/hello.vue"

    @Component({
        components: {hello}
    })

    export default class extends Vue {
      public msg:string = 'Welcome to Your Vue.js App111';

      get status():string{
          return this.msg + " smth else";
      }

      set status(val:string){
          this.msg = val;
      }

      doSmth(){

      }

      mounted(){
          console.log("Object has been mounted");

      }

      constructor(){
          super();
          console.log("Hello from App");
      }
  }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
