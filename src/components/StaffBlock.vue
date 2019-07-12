<template>
    <div class="speakerBlock">
        <div class="text-center imgWrapper">
            <img :src="staffMember.image_path" alt="img" class="rounded-circle img-fluid" draggable="false">
        </div>
        <div class="text-center speakerInfo">
            <h6>
                {{staffMember.name}}
            </h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StaffBlock",
        props : {
            staffMember : {},
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
        line-height: 30px;
        padding: 5px 10px;
    }
    .speakerInfo {
        padding-bottom: 30px;
    }
</style>