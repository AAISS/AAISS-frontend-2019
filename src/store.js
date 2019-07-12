import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        c({commit}, speakerId) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.$store.getters.getApi + '/speakers/' + speakerId,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    resolve(response.data.results)
                }).catch((error) => {
                    reject(error);
                })
            })
        }
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