<template>
    <div>
        <section id="headerSection">
            <div class="container position-absolute titleContainer">
                <div class=" row pt-5">
                    <div class="col-md-12 titleCol">
                        <h1 class="noSelect text-center">
                            Amirkabir
                            <br>
                            Artificial Intelligence
                            <br>
                            Summer Summit
                        </h1>
                    </div>
                    <div class="col-md-12 subTitleCol">
                        <h4 class="text-center">
                            Advanced topics in Machine Learning, Deep Learning, and Neurosciences
                        </h4>
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
                <div class="row justify-content-center">
                    <div class="col-md-12 justify-content-center">
                        <div class="row">
                            <div class="col-md-12 mx-auto">
                                <h2 class="font-weight-bold text-center">About the Event</h2>
                                <p class="text-justify aboutText">
                                    {{staticParts[0].about}}
                                </p>
                            </div>
                        </div>
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
        <section id="scheduleSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Schedule</h1>
                    </div>
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-sm">
                                <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">Title (level)</th>
                                    <th scope="col">Lecturer / Type</th>
                                    <th scope="col">Timing</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colspan="4" class="firstSpecRow text-center font-weight-bold">
                                        1st Day (Tuesday - 23rd of July / 1st of Mordad)
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-center">0</th>
                                    <th>Registration</th>
                                    <th></th>
                                    <th>07:30 – 07:45</th>
                                </tr>
                                <tr>
                                    <th class="text-center">0</th>
                                    <th>Opening</th>
                                    <th></th>
                                    <th>07:45 – 08:15</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Learning to Rank for E-commerce (Intermediate)</td>
                                    <td>Ehsan Ebrahimzadeh / Skype
                                    </td>
                                    <td>08:15 – 09:15</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>A Closed-Form Learned Pooling for Deep Classification Networks (Intermediate)
                                    </td>
                                    <td>Hossein Mobahi / Google
                                        Hangout
                                    </td>
                                    <td>09:15 – 10:15</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Break</td>
                                    <td>10:15 – 10:30</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Describing Images by Semantic Modeling using Attributes and Tags
                                        (Intermediate)
                                    </td>
                                    <td>Mahdi M. Kalayeh /
                                        Skype
                                    </td>
                                    <td>10:30 – 11:30</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Holistic Video Understanding (Intermediate)</td>
                                    <td>Mohsen Fayyaz / Skype</td>
                                    <td>11:30 – 12:30</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Lunch and Prayers</td>
                                    <td>12:30 – 13:30</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Compressed DNNs and their fault resiliency (Intermediate)</td>
                                    <td>Majid Sabbagh /
                                        Skype
                                    </td>
                                    <td>13:30 – 14:30</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Corpus based Machine Translation (Intermediate)</td>
                                    <td>Heshaam Faili / In person
                                    </td>
                                    <td>14:30 – 15:30</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Break</td>
                                    <td>15:30 – 15:45</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Generative Adversarial Networks: Image and Text Generation (Intermediate)</td>
                                    <td>Mahdieh Soleymani / In person</td>
                                    <td>15:45 – 16:45</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Building a descriptive graph for a galaxy simulation (Intermediate)</td>
                                    <td>Abolfazl Taghribi /
                                        Skype
                                    </td>
                                    <td>16:45 – 17:45</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-center font-weight-bold">2nd Day (Wednesday - 24th of
                                        July / 2nd of Mordad)
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>From Genes To Cognition (Intermediate)</td>
                                    <td>Sajjad Torabian / In person</td>
                                    <td>08:15 – 09:15</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Neuroscience-inspired Computer Vision (Intermediate)</td>
                                    <td>Mohammad-Reza Abolghasemi-Dehaqani / In person
                                    </td>
                                    <td>09:15 – 10:15</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Break</td>
                                    <td>10:15 – 10:30</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Machine Vision as a way of Overcoming Human Visual Disorders (Intermediate)</td>
                                    <td>Farrokh Karimi / In
                                        person
                                    </td>
                                    <td>10:30 – 11:30</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Consistent Online Optimization (Intermediate)</td>
                                    <td>Mohammad Reza Karimi / Skype</td>
                                    <td>11:30 – 12:30</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Lunch and Prayers</td>
                                    <td>12:30 – 13:30</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>The Application of Fuzzy Deep Systems in Medical Data Analysis (Intermediate)
                                    </td>
                                    <td>Raheleh Davoodi / In person</td>
                                    <td>13:30 – 14:30</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Semantic Segmentation of Images using Deep Convolutional Neural Networks
                                        (Advanced)
                                    </td>
                                    <td>Fahimeh Fooladgar / In person</td>
                                    <td>14:30 – 15:30</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Break</td>
                                    <td>15:30 – 15:45</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Attacks & Defenses for Deep Neural Networks (Advanced)</td>
                                    <td>Mohammad Khalooei / In person</td>
                                    <td>15:45 – 16:45</td>

                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>A geometric perspective on the robustness of deep networks (Advanced)</td>
                                    <td>Seyed Mohsen Moosavi Dezfooli / In person</td>
                                    <td>16:45 – 17:45</td>
                                </tr>

                                <tr>
                                    <td colspan="4" class="text-center font-weight-bold">3rd Day (Thursday - 25th of
                                        July / 3rd of Mordad)
                                    </td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>Uncertainty estimation with Deep Networks (Advanced)</td>
                                    <td>Hossein Azizpour / Skype</td>
                                    <td>08:15 – 09:15</td>

                                </tr>

                                <tr>
                                    <td>18</td>
                                    <td>Representation Learning Without Labels (Advanced)</td>
                                    <td>Ali Eslami / Skype
                                    </td>
                                    <td>09:15 – 10:15</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-center font-weight-bold">Break</td>
                                    <td>10:15 – 10:30</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>The spatiotemporal neural dynamics of perceptual processes in the brain and deep
                                        network models (Advanced)
                                    </td>
                                    <td>Yalda Mohsenzadeh / Skype
                                    </td>
                                    <td>10:30 – 11:30</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Manifold optimization in machine learning (Advanced)</td>
                                    <td>Reshad Hosseini / Skype</td>
                                    <td>11:30 – 12:30</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <th>Closing</th>
                                    <td></td>
                                    <td>12:30 - 13:00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12 justify-content-center">
                        <div class="row">
                            <div class="col-md-12 mx-auto">
                                <button @click.prevent="showRegisterSoonMessage()"
                                        v-if="staticParts[0].register_link == '/'"
                                        class="btn btn-primary btn-lg btn-block float-left regBtn">
                                    <span v-bind:class="{'small' : smallerFontSize}">
                                    {{registerValue}}
                                    </span>
                                </button>
                                <a v-else :href="staticParts[0].register_link"
                                   class="btn btn-primary btn-lg btn-block float-left regBtn" target="_blank">{{registerValue}}</a>
                            </div>
                        </div>
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
                <div class="row pt-5 pb-5">
                    <div class="col-lg-6 text-white">

                        <h5 class="organizerName">Students' Scientific Chapter of Computer Engineering and Information
                            Technology Department <br> Amirkabir University of Technology(Tehran Polytechnic)</h5>
                        <h6 class="organizerAddress mt-5">Website : <a href="http://www.ceit-ssc.ir" target="_blank">www.ceit-ssc.ir</a>
                        </h6>
                        <h6 class="organizerEmail">Email : <a
                                href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a></h6>
                        <div class="row pt-3">
                            <div class="col-md-12">
                                <img src="../assets/img/ssc-logo-white-horizontal.png" alt="ssc logo" class="img-fluid"
                                     draggable="false">
                            </div>
                        </div>
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
            return {
                registerValue: 'Registration',
                smallerFontSize: false,
            }
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
        methods: {
            showRegisterSoonMessage: function () {
                this.registerValue = 'Registration is closed.';
                this.smallerFontSize = true;
                setTimeout(() => {
                    this.registerValue = 'Registration';
                    this.smallerFontSize = false;
                }, 2500)
            }
        },
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
        top: 42%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }


    .titleCol {
        margin-bottom: 50px;
    }

    .subTitleCol h4 {
        color: #55585d;
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
        width: 700px;
        position: absolute;
        left: 50%;
        top: 50%;
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

    #speakersSection h1 {
        padding-top: 45px;
    }


    #committeeSection {
        background-color: #B7867E;
    }

    #scheduleSection {
        background-color: #B7867E;
        min-height: 100vh;
    }

    #scheduleSection h1 {
        padding-top: 45px;
        padding-bottom: 30px;
    }

    #organizerSection {
        background-color: #B7867E;
    }

    .organizerEmail {
        margin-bottom: 10px;
    }

    .organizerAddress a, .organizerEmail a {
        text-decoration: none;
        color: white;
        transition: all 0.3s ease-in-out;
    }

    .organizerAddress a:hover, .organizerEmail a:hover {
        color: #c6c4b6;
    }

    .regBtn {
        background-color: white;
        margin-top: 50px;
        margin-bottom: 50px;
        color: #C6C2C4;
        border: none;
        font-size: 2rem;
    }

    .regBtn:hover {
        color: white;
        background-color: #C6C2C4;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .titleCol h1 {
        font-size: 4rem;
    }

    .ceitMapFrame {
        width: 100%;
        min-height: 350px;
        border-radius: 15px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    }

    td:first-child {
        text-align: center;
    }

    td[colspan="3"] {
        font-size: 16px;
        color: black;
    }

    td[colspan="4"] {
        font-size: 16.5px;
        color: #10a3f0;
    }

    .table-responsive {
        background-color: white;
        font-size: 12px;
        padding: 10px;
        border-radius: 15px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    @media only screen and (min-width: 416px) and (max-width: 767.98px) {

        .small {
            font-size: 17px;
        }

        .titleContainer {
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .titleCol {
            margin-bottom: 25px;
        }

        .titleCol h1 {
            font-size: 2.7rem;
            line-height: 45px;
        }
    }

    @media only screen and (min-width: 0) and (max-width: 415px) {
        .titleContainer {
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .titleCol {
            margin-bottom: 10px;
        }

        .titleCol h1 {
            font-size: 1.5rem;
            line-height: 30px;
        }

        .subTitleCol h4 {
            color: #55585d;
            font-size: 1rem;
        }

        .small {
            font-size: 17px;
        }
    }
</style>