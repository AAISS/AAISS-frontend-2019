<template>
    <section id="speakersSection">
        <div id="particles-js" class="position-absolute"></div>
        <div class="container pt-5">
            <div class="row mt-5">
                <div class="col-md-3">
                    <SpeakerBlock :speaker="speaker" showRegButton="true"></SpeakerBlock>
                    <a href="#" class="btn btn-primary btn-lg btn-block float-left regBtn">Register</a>
                </div>
                <div class="col-md-9 infoBlock">
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
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import SpeakerBlock from '../components/SpeakerBlock'

    export default {
        name: "Speaker",
        data: function () {
            return {}
        },
        components: {
            SpeakerBlock
        },
        computed: {
            speaker: function () {
                return this.$store.getters.getSpeakers[this.$route.params.id - 1];
            }
        },
        methods: {
            // initParticles: function () {
            //     particlesJS("particles-js", {
            //         "particles": {
            //             "number": {
            //                 "value": 100,
            //                 "density": {
            //                     "enable": true,
            //                     "value_area": 631.3181133058181
            //                 }
            //             },
            //             "color": {
            //                 "value": "#9B9D97"
            //             },
            //             "shape": {
            //                 "type": "circle",
            //                 "stroke": {
            //                     "width": 0,
            //                     "color": "#000000"
            //                 },
            //                 "polygon": {
            //                     "nb_sides": 5
            //                 },
            //                 "image": {
            //                     "src": "img/github.svg",
            //                     "width": 100,
            //                     "height": 100
            //                 }
            //             },
            //             "opacity": {
            //                 "value": 1,
            //                 "random": false,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 1,
            //                     "opacity_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "size": {
            //                 "value": 2,
            //                 "random": true,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 40,
            //                     "size_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "line_linked": {
            //                 "enable": true,
            //                 "distance": 150,
            //                 "color": "#9B9D97",
            //                 "opacity": 1,
            //                 "width": 1
            //             },
            //             "move": {
            //                 "enable": true,
            //                 "speed": 3,
            //                 "direction": "none",
            //                 "random": false,
            //                 "straight": false,
            //                 "out_mode": "out",
            //                 "bounce": false,
            //                 "attract": {
            //                     "enable": false,
            //                     "rotateX": 600,
            //                     "rotateY": 1200
            //                 }
            //             }
            //         },
            //         "interactivity": {
            //             "detect_on": "canvas",
            //             "events": {
            //                 "onhover": {
            //                     "enable": true,
            //                     "mode": "grab"
            //                 },
            //                 "onclick": {
            //                     "enable": false,
            //                     "mode": "push"
            //                 },
            //                 "resize": true
            //             },
            //             "modes": {
            //                 "grab": {
            //                     "distance": 150,
            //                     "line_linked": {
            //                         "opacity": 1
            //                     }
            //                 },
            //                 "bubble": {
            //                     "distance": 400,
            //                     "size": 40,
            //                     "duration": 2,
            //                     "opacity": 8,
            //                     "speed": 3
            //                 },
            //                 "repulse": {
            //                     "distance": 200,
            //                     "duration": 0.4
            //                 },
            //                 "push": {
            //                     "particles_nb": 4
            //                 },
            //                 "remove": {
            //                     "particles_nb": 2
            //                 }
            //             }
            //         },
            //         "retina_detect": true
            //     });
            //     var count_particles, stats, update;
            //     stats = new Stats;
            //     stats.setMode(0);
            //     stats.domElement.style.position = 'absolute';
            //     stats.domElement.style.left = '0px';
            //     stats.domElement.style.top = '0px';
            //     document.body.appendChild(stats.domElement);
            //     count_particles = document.querySelector('.js-count-particles');
            //     update = function () {
            //         stats.begin();
            //         stats.end();
            //         if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            //             count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            //         }
            //         requestAnimationFrame(update);
            //     };
            //     requestAnimationFrame(update);
            // }
        },
        created() {

            if (this.speaker == null || this.speaker == undefined) {
                this.$router.push('/');
            }
        },
        mounted() {
            window.console.log('speaker from state : ', this.speaker);
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

    @media (min-width: 0) and (max-width: 991.98px) {
        #speakersSection {
            height: auto;
        }
    }


</style>