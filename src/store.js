import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api: 'http://aaiss.ceit.aut.ac.ir/api',
        speakers: [],
        staffList: [],
        scientificCommittee: [],
        staticParts: [],
    },
    mutations: {
        updateSpeakers(state, newSpeakers) {
            state.speakers = newSpeakers;
        },
        updateStaffList(state, newStaffLIst) {
            state.staffList = newStaffLIst;
        },
        updateStaticParts(state, newStaticParts) {
            state.staticParts = newStaticParts;
        },
        updateScientificCommittee(state, newCommittee) {
            state.scientificCommittee = newCommittee;
        }
    },
    actions: {
        getSpeakers: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/speakers/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateSpeakers', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })

        },

        getStaticParts: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/static_parts/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateStaticParts', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },

        getScientificCommittee: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/scientific_committee/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateScientificCommittee', response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            })
        },

        getStaff: function ({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: this.getters.getApi + '/staff/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    commit('updateStaffList', response.data);
                    resolve(response.data);
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
        getStaffList: state => {
            return state.staffList;
        },
        getStaticParts: state => {
            return state.staticParts;
        },
        getScientificCommittee: state => {
            return state.scientificCommittee;
        }
    }
})