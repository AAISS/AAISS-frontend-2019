<template>
    <section id="headerSection">
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-12">
                    <h1 class="text-center font-weight-bold text-white">Staff</h1>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-lg-3" :key="staffList.indexOf(staffMember)" v-for="staffMember in staffList">
                    <StaffBlock :staff-member="staffMember"></StaffBlock>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
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
            return {}

        }, created() {
            let staffListPromise = this.$store.dispatch('getStaff');
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