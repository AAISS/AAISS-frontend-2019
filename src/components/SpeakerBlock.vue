<template>
    <div class="speakerBlock">
        <div class="text-center imgWrapper">
            <img :src="speaker.image_path" alt="img" class="rounded-circle img-fluid" draggable="false">
        </div>
        <div class="text-center speakerInfo">
            <router-link :to="speaker.url.replace(this.$store.getters.getApi,'')">
                <h5 class="">{{speaker.name}}</h5>
            </router-link>
            <h6 class="">{{speaker.position}}</h6>
        </div>
        <!--        <a href="#" class="btn btn-primary btn-lg btn-block regBtn" v-if="showRegButton">Register</a>-->
    </div>
</template>

<script>
    export default {
        name: "SpeakerBlock",
        data: function () {
            return {}
        },
        props: {
            speaker: {},
            showRegButton: false,
        }
    }
</script>

<style scoped>
    .speakerBlock {
        border-radius: 15px;
        background-color: #ffffff;
        min-height: 100px;
        margin-top: 15px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .imgWrapper img {
        width: 110px;
        height: 110px;
    }

    .speakerBlock .imgWrapper {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .speakerInfo h5 {
        color: #328ebf;
    }

    .speakerInfo h6 {
        margin-top: 20px;
        color: #707070;
    }

    .speakerInfo {
        padding-bottom: 30px;
    }

</style>