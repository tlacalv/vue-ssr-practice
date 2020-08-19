import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Assume we have a universal API that returns Promises
//and ignore the implementation details
// import { fetchItem } from './api';
let fetchItem = (id) => {
    return new Promise((res, rej) => {
        let items = [
            {
                id: 1,
                title:'hol'
            },
            {
                id: 2,
                title:'adi'
            },
        ]
        res(items.find(item=>item.id==id));
    })
}

export function createStore() {
    return new Vuex.Store({
        //IMPORTANT: state must be a function so the module can be
        //instantiated multiple times
        state: () => ({
            items: {}
        }),
        actions: {
            fetchItem({ commit }, id) {
                //return the Promise via `store.dispatch()` so that we know
                //when the data has been fetched
                return fetchItem(id)
                    .then(item => {
                        commit('setItem', { id, item})
                    })
                    .catch(err => console.log(err))
                }
        },
        mutations: {
            setItem (state, { id, item }) {
                Vue.set(state.items, id, item)
            }
        }
    })
}