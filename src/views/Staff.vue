<template>
    <section id="headerSection">
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-12">
                    <h1 class="text-center font-weight-bold text-white">Staff</h1>
                </div>
            </div>
            <div class="row pt-3" v-if="dataLoading">
                <h2 class="text-center">Loading...</h2>
            </div>
            <div class="row pt-3" v-else>
                <div class="col-lg-3" :key="staffList.indexOf(staffMember)" v-for="staffMember in staffList">
                    <StaffBlock :staff-member="staffMember"></StaffBlock>
                </div>
            </div>

        </div>
        <!-- particles.js container -->
        <!--        <div id="particles-js"></div> &lt;!&ndash; stats - count particles &ndash;&gt;-->

    </section>
</template>

<script>
    import axios from 'axios'
    import StaffBlock from '../components/StaffBlock'

    export default {
        name: "Staff",
        components: {
            StaffBlock,
        },
        computed: {
            staffList: function () {
                return this.$store.getters.getStaffList;
            }
        },
        data: function () {
            return {
                dataLoading: false,
            }
        }, created() {
            axios({
                url: this.$store.getters.getApi + '/staff/',
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            }).then((response) => {
                window.console.log(response.data);
                this.$store.commit('updateStaffList', response.data);
                this.dataLoading = false;
                // this.speakers = response.data.results;
            }).catch((error) => {
                this.dataLoading = false;
                window.console.log(error);
            })
        },
        mounted() {
            scrollTo(0, 0);
        }
    }
</script>

<style scoped>
    #headerSection {
        min-height: 100vh;
        width: 100%;
        background: #e4e3df;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        padding-bottom: 20px;
    }
</style>