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
            <img src="../assets/img/brain.png" alt="brain image" class="img-fluid brainImage noSelect"
                 draggable="false">

            <img src="../assets/img/autLogo.png" class="position-absolute autLogo noSelect"
                 alt="amirkabir logo" draggable="false">
        </section>
        <section id="aboutSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="font-weight-bold">About the Event</h2>
                        <p class="text-justify aboutText">
                            {{staticParts[0].about}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="committeeSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Scientific Committee</h1>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-lg" :key="scientificCommittee.indexOf(member)"
                         v-for="member in scientificCommittee">
                        <CommitteMemberBlock :member="member"></CommitteMemberBlock>
                    </div>
                </div>
            </div>
        </section>
        <section id="speakersSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Invited Speakers</h1>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-lg-3" :key="speaker.id" v-for="speaker in speakers">
                        <SpeakerBlock :speaker="speaker"></SpeakerBlock>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-center">
                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <a :href="staticParts[0].register_link" target="_blank"
                                   class="btn btn-primary btn-lg btn-block float-left regBtn">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="scheduleSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Schedule</h1>
                        <p class="text-center">comming soon...</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="organizerSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Organizer</h1>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-6 text-white">

                        <h5 class="organizerName">Students Scientific Chapter of CEIT - AUT</h5>
                        <h6 class="organizerAddress mt-5">Address : Hafez St, Amirkabir University of Technology</h6>
                        <h6 class="organizerSocial">Telegram : <a href="http://t.me/ceit_ssc">@ceit_ssc</a></h6>
                        <h6 class="organizerEmail">Email : <a
                                href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a></h6>
                    </div>
                    <div class="col-lg-6">
                        <iframe class="ceitMapFrame"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1279.3005790001373!2d51.407153856288474!3d35.70374007930654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb68840e07e8e513!2sComputer+Engineering+%26+IT+Department!5e0!3m2!1sen!2snl!4v1563052060736!5m2!1sen!2snl"
                                frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src
    import SpeakerBlock from '../components/SpeakerBlock'
    import CommitteMemberBlock from '../components/CommitteeMemberBlock'

    export default {
        name: 'Home',
        data: function () {
            return {}
        },
        computed: {
            speakers: function () {
                return this.$store.getters.getSpeakers;
            },
            staticParts: function () {
                return this.$store.getters.getStaticParts;
            },
            scientificCommittee: function () {
                return this.$store.getters.getScientificCommittee;
            }
        },
        components: {
            SpeakerBlock, CommitteMemberBlock
        },
        methods: {},
        created() {
            let staticPartsPromise = this.$store.dispatch('getStaticParts');
            let scientificCommiteePromise = this.$store.dispatch('getScientificCommittee');
            let speakersPromise = this.$store.dispatch('getSpeakers');
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

    .noSelect {
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

    #committeeSection {
        background-color: #B7867E;
        min-height: 100vh;
    }

    #scheduleSection {
        background-color: #B7867E;
        min-height: 100vh;
    }

    #organizerSection {
        background-color: #B7867E;
        min-height: 100vh;
    }

    .organizerEmail {
        margin-bottom: 10px;
    }

    .organizerSocial a, .organizerEmail a {
        text-decoration: none;
        color: white;
        transition: all 0.3s ease-in-out;
    }

    .organizerSocial a:hover, .organizerEmail a:hover {
        color: #c6c4b6;
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

    .ceitMapFrame {
        width: 100%;
        min-height: 300px;
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