<template>
    <div class="speakerBlock">
        <div class="text-center imgWrapper">
            <img :src="member.image_path" alt="img" class="rounded-circle img-fluid" draggable="false">
        </div>
        <div class="text-center speakerInfo">
            <h4 class="memberName">
                {{member.name}}
            </h4>
            <h5 class="memberPosition">
                {{member.position}}
            </h5>
            <h6 class="memberRule">
                {{member.rule}}
            </h6>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CommitteMemberBlock",
        data: function () {
            return {}
        },
        props: {
            member: {},
        }
    }
</script>

<style scoped>
    .speakerBlock {
        transition: all 0.1s ease-in-out;
        border-radius: 15px;
        background-color: #ffffff;
        height: 368px;
        margin-top: 15px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        text-decoration: none;
    }

    .imgWrapper img {
        width: 110px;
        height: 110px;
    }

    .speakerBlock .imgWrapper {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .memberName {
        font-size: 16px;
    }

    .memberPosition {
        color: #328ebf;
        font-size: 15px;
        line-height: 25px;
        font-weight: normal;
        padding-right: 5px;
        padding-left: 5px;
    }

    .memberRule {
        color: #707070;
        line-height: 30px;
        padding-right: 5px;
        padding-left: 5px;
    }

    .speakerInfo {
        padding-bottom: 30px;
    }

    @media (max-width: 1199.98px) {
        .speakerBlock {
            height: 365psx;
        }
    }

    @media (max-width: 991.98px) {
        .speakerBlock {
            height: auto;
        }
    }
</style>