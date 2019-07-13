<template>
    <div>
        <section id="headerSection">
            <!-- particles.js container -->
            <div class="container position-absolute titleContainer">
                <div class=" row pt-5">
                    <!--<div class="col-md-2"></div>-->
                    <div class="col-md-12 titleCol">
                        <h1 class="noSelect">Amirkabir Artificial Intelligence Summer Summit</h1>
                    </div>
                </div>
            </div>
            <img src="../assets/img/brain.png" alt="brain image" class="img-fluid brainImage noSelect" draggable="false">

            <img src="../assets/img/autLogo.png" class="position-absolute autLogo noSelect"
                 alt="amirkabir logo" draggable="false">
        </section>
        <section id="aboutSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="font-weight-bold">About</h2>
                        <p class="text-justify aboutText">
                            Given the accelerated pace of Artificial Intelligence and Data Science, Computer Engineering department’s Students’ Scientific Association of Amirkabir University of Technology (CEIT SSC) is organizing its first AAISS (Amirkabir Artificial Intelligence Summer Summit) which consists of a series of talks hosting speakers of USA’s MIT, Stanford, UCLA and UCF, Switzerland’s ETH and EPFL, Sweden’s KTH, Germany’s Bonn University, England’s University of Birmingham, Intel, Google, Google DeepMind, Netflix, eBay  and Islamic Republic of Iran’s Sharif University of Technology, University of Tehran, Amirkabir University of Technology and Institute for Research in Fundamental Sciences (IPM).
                            <br>
                            Our talks are going to be governed around E-Commerce, Deep Classification Networks, Semantic Modelling, Video Understanding, Compressed DNNs, Machine Translation, Generative Adversarial Networks, Galaxy Simulation, Cognitive Science, Computer Vision, Machine Vision, Optimization, Deep Systems,  Deep CNNs, Deep Networks, Supervised Action and Learning Models.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="speakersSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Speakers</h1>
                    </div>
                </div>
                <div class="row pt-3" v-if="dataLoading">
                    <h2 class="text-center">Loading...</h2>
                </div>
                <div class="row pt-3" v-else>
                    <div class="col-lg-3" :key="speaker.id" v-for="speaker in speakers">
                        <SpeakerBlock :speaker="speaker"></SpeakerBlock>
                    </div>
                </div>


                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-center">
                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <a href="http://skillcenter.aut.ac.ir/events/aaiss2019-summer98com" target="_blank" class="btn btn-primary btn-lg btn-block float-left regBtn">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'
    import SpeakerBlock from '../components/SpeakerBlock'

    export default {
        name: 'Home',
        data: function () {
            return {
                dataLoading: true,
            }
        },
        computed: {
            speakers: function () {
                return this.$store.getters.getSpeakers;
            }
        },
        components: {
            SpeakerBlock,
        },
        methods: {
            getSpeakers: function () {
                this.dataLoading = true;
                axios({
                    url: this.$store.getters.getApi + '/speakers/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    window.console.log(response.data);
                    this.$store.commit('updateSpeakers', response.data);
                    this.dataLoading = false;
                }).catch((error) => {
                    this.dataLoading = false;
                    window.console.log(error);
                })
            },
        },
        created() {
            this.getSpeakers();
        },
        mounted() {
            // this.initParticles();
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
    }

    .titleContainer {
        top: 22%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

    .titleCol h1 {
        color: #797B7F;
        text-align: center;
        line-height: 65px;
        font-weight: 700;
        cursor: default;
    }

    .noSelect{
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }

    .brainImage {
        width: 620px;
        position: absolute;
        left: 50%;
        top: 66%;
        transform: translate(-50%, -50%);

    }

    .autLogo {
        left: 30px;
        bottom: 30px;
        width: 150px;
        height: 100px;
    }

    #aboutSection {
        width: 100%;
        background-color: #B7867E;
        color: white;
        min-height: 100%;
    }

    #aboutSection h2 {
        margin-top: 45px;
    }

    #aboutSection p {
        margin-bottom: 45px;
        line-height: 30px;
    }

    #speakersSection {
        background-color: #B7867E;
        min-height: 100vh;
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

    .titleCol h1 {
        font-size: 4rem;
    }

    @media only screen and (min-width: 416px) and (max-width: 767.98px) {
        .titleCol h1 {
            font-size: 3rem;
        }
    }

    @media only screen and (min-width: 0) and (max-width: 415px) {
        .titleCol h1 {
            font-size: 2rem;
        }
    }
</style>