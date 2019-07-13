import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api: 'http://aaiss.ceit.aut.ac.ir/api',
        speakers: [],
        staffList: [],
    },
    mutations: {
        updateSpeakers(state, newSpeakers) {
            state.speakers = newSpeakers;
        },
        updateStaffList(state, newStaffLIst) {
            state.staffList = newStaffLIst;
        }
    },
    actions: {
    },
    getters: {
        getApi: state => {
            return state.api;
        },
        getSpeakers: state => {
            return state.speakers;
        },
        getStaffList : state => {
            return state.staffList;
        }
    }
})