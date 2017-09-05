import Vue from 'vue'
import App from './App.vue';

class Init {
    private static instance:Init;

    static getInstance(){
        if (!Init.instance){
            Init.instance = new Init();
        }
        return Init.instance;
    }

    private constructor() {
        new Vue({
            el: '#app',
            render: h => h(App),
        })
    }
}
//Turning into Singleton for not to invoke twice
Init.getInstance();