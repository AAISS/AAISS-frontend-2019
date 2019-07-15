<template>
    <section id="speakersSection">
        <!--        <div id="particles-js" class="position-absolute"></div>-->
        <div class="container pt-5" v-if="speaker != null">
            <div class="row mt-5">
                <div class="col-lg-3">
                    <SpeakerBlock :speaker="speaker"></SpeakerBlock>
                    <button @click.prevent="showRegisterSoonMessage()"
                            v-if="staticParts[0].register_link == '/'"
                            class="btn btn-primary btn-lg btn-block float-left regBtn"
                    >
                        <span v-bind:class="{'small' : smallerFontSize}">
                            {{registerValue}}
                        </span>
                    </button>
                    <a v-else :href="staticParts[0].register_link"
                       class="btn btn-primary btn-lg btn-block float-left regBtn" target="_blank">{{registerValue}}</a>
                </div>
                <div class="col-lg-9 infoBlock">
                    <h1 class="display-5">
                        {{speaker.talk_title}}
                    </h1>

                    <strong>
                        Location
                    </strong>
                    <address>
                        {{speaker.talk_location}}
                    </address>

                    <strong>Date and Time</strong>
                    <p>
                        <time>
                            {{speaker.date_and_time}}
                        </time>
                    </p>

                    <strong>Abstract</strong>
                    <p class="text-justify" style="line-height:30px;">
                        {{speaker.abstract}}
                    </p>

                    <strong>Bio</strong>
                    <p class="text-justify" style="line-height:30px">
                        {{speaker.bio}}
                    </p>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import SpeakerBlock from '../components/SpeakerBlock'
    import axios from 'axios'

    export default {
        name: "Speaker",
        data: function () {
            return {
                registerValue: 'Registration',
                smallerFontSize: false,
            }
        }, computed: {
            staticParts: function () {
                return this.$store.getters.getStaticParts;
            },
            speaker: function () {
                return this.$store.getters.getCurrentSpeaker;
            }
        },
        components: {
            SpeakerBlock
        },
        methods: {
            showRegisterSoonMessage: function () {
                this.registerValue = 'Registration will be available soon...';
                this.smallerFontSize = true;
                setTimeout(() => {
                    this.registerValue = 'Registration';
                    this.smallerFontSize = false;
                }, 2500)
            }
        },
        created() {
            let speakerPromise = this.$store.dispatch('getSpeakerById', this.$route.params.id);
        },
        mounted() {
            scrollTo(0, 0);
        }

    }
</script>

<style scoped>

    #speakersSection {
        background: #e4e3df;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        color: #797B7F;
        padding-bottom: 20px;
        min-height: 100vh;
    }

    h1.display-5 {
        padding-top: 10px;
        padding-left: 10px;
    }

    .infoBlock {
        border-radius: 15px;
        background-color: #ffffff;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        margin-top: 15px;
    }

    .infoBlock p, address {
        padding: 5px 30px;
    }


    .regBtn {
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #C6C2C4;
        border: none;
    }

    .regBtn:hover {
        background-color: white;
        color: #C6C2C4;
    }

    .small {
        font-size: 12px;
    }

    @media (min-width: 0) and (max-width: 991.98px) {
        #speakersSection {
            height: auto;
        }
    }


</style>