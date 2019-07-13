<template>
    <router-link :to="'/speakers/' + speaker.id" class="speakerBlock d-block">
        <div class="text-center imgWrapper">
            <img :src="speaker.image_path" alt="img" class="rounded-circle img-fluid" draggable="false">
        </div>
        <div class="text-center speakerInfo">
            <router-link :to="'/speakers/' + speaker.id">
                {{speaker.name}}
            </router-link>
            <h6>{{speaker.position}}</h6>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "SpeakerBlock",
        data: function () {
            return {}
        },
        props: {
            speaker: {},
        }
    }
</script>

<style scoped>
    .speakerBlock {
        transition: all 0.1s ease-in-out;
        border-radius: 15px;
        background-color: #ffffff;
        min-height: 100px;
        margin-top: 15px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        text-decoration: none;
    }

    .speakerBlock:hover {
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
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
        line-height: 30px;
        padding: 5px 10px;
    }

    .speakerLink {
        text-decoration: none;
    }

    .speakerLink:hover {
        color: black;
    }

    .speakerInfo {
        padding-bottom: 30px;
    }

</style>