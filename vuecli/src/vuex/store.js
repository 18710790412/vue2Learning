import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 3
};
const mutations = {
    add(state, num){
        console.log('这个是mutations');
        state.count += num;
    },
    reduce(state){
        state.count --;
    }
};
//getters相当于一个过滤器，在mutation后数据输出时对数据进行处理
const getters = {
    count(){
        console.log('这个是getters');
        return state.count += 11;
    }
};
const actions = {
    addAction(context){
        context.commit('add', 12);
    },
    reduceAction({commit}){
        commit('reduce');
    }
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})