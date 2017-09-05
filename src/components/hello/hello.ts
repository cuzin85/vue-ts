import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class extends Vue {
    @Prop() private message:string;
    constructor() {
        super();
    }
}
