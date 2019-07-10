<template>
    <div>
        <section id="headerSection">
            <!-- particles.js container -->
            <div id="particles-js"></div> <!-- stats - count particles -->
            <div class="container position-absolute titleContainer">
                <div class=" row pt-5">
                    <!--<div class="col-md-2"></div>-->
                    <div class="col-md-12 titleCol">
                        <h1>Amirkabir Artificial Intelligence Summer Summit</h1>
                    </div>
                </div>
            </div>
            <img src="../assets/img/brain.png" alt="brain" class="img-fluid brainImage">

            <img src="https://apa.aut.ac.ir/en/index_data/aut.png" alt="" class="position-absolute"
                 style="left:30px;bottom:30px;width:100px;height:100px;">
        </section>
        <section id="aboutSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="font-weight-bold">About</h2>
                        <p class="text-justify aboutText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero nibh. Ut
                            eget
                            condimentum orci. Morbi convallis, quam a pretium tincidunt, metus nunc aliquam magna, sed
                            consequat
                            nisl dolor et ex. Vivamus malesuada enim ac consequat bibendum. In ultricies turpis ut nunc
                            rhoncus,
                            sit amet consectetur metus porta. Cras malesuada posuere eleifend. Ut ac ipsum massa. Ut ac
                            fringilla odio. Donec semper velit non magna consectetur convallis. Morbi vitae fermentum
                            urna.
                            Vivamus quis urna justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Pellentesque
                            a neque est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet
                            libero
                            nibh.
                            Ut eget
                            condimentum orci. Morbi convallis, quam a pretium tincidunt, metus nunc aliquam magna, sed
                            consequat
                            nisl dolor et ex. Vivamus malesuada enim ac consequat bibendum. In ultricies turpis ut nunc
                            rhoncus,
                            sit amet consectetur metus porta. Cras malesuada posuere eleifend. Ut ac ipsum massa. Ut ac
                            fringilla odio. Donec semper velit non magna consectetur convallis. Morbi vitae fermentum
                            urna.
                            Vivamus quis urna justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Pellentesque
                            a neque est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet
                            libero
                            nibh.
                            Ut eget
                            condimentum orci. Morbi convallis, quam a pretium tincidunt, metus nunc aliquam magna, sed
                            consequat
                            nisl dolor et ex. Vivamus malesuada enim ac consequat bibendum. In ultricies turpis ut nunc
                            rhoncus,
                            sit amet consectetur metus porta. Cras malesuada posuere eleifend. Ut ac ipsum massa. Ut ac
                            fringilla odio. Donec semper velit non magna consectetur convallis. Morbi vitae fermentum
                            urna.
                            Vivamus quis urna justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Pellentesque
                            a neque est.
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
                <div class="row pt-3">
                    <div class="col-md-3">
                        <div class="speakerBlock">
                            <div class="text-center imgWrapper">
                                <img src="../assets/img/brain.png" alt="img" class="rounded-circle">
                            </div>
                            <div class="text-center speakerInfo">
                                <router-link to="/speaker/id/1"><h5 class="">Masoud Saba'ee</h5></router-link>
                                <h6 class="">PhD, Amirkabir UT</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center buttonsWrapper">
                    <div class="col-md-6 justify-content-center">
                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <a href="#" class="btn btn-primary btn-lg btn-block float-left">Register</a>
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

    export default {
        name: 'Home',
        components: {
            speakers: [],
        }, methods: {
            getSpeakers: function () {
                axios({
                    url: 'http://google.com/asghar',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                }).then((response) => {
                    this.speakers = response.data;
                }).catch((error) => {
                    window.console.log(error);
                })
            }
        },
        created() {
            this.getSpeakers();
        },
        mounted() {
            scrollTo(0, 0);
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 631.3181133058181
                        }
                    },
                    "color": {
                        "value": "#9B9D97"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#9B9D97",
                        "opacity": 1,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 150,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            var count_particles, stats, update;
            stats = new Stats;
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);
            count_particles = document.querySelector('.js-count-particles');
            update = function () {
                stats.begin();
                stats.end();
                if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
                }
                requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
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
    }

    .titleCol h1 {
        color: #797B7F;
        text-align: center;
        line-height: 65px;
        font-weight: 700;
    }

    .brainImage {
        width: 620px;
        position: absolute;
        left: 50%;
        top: 66%;
        transform: translate(-50%, -50%);
    }

    #aboutSection {
        width: 100%;
        background-color: #B7867E;
        color: white;
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
    }

    .speakerBlock {
        border-radius: 15px;
        background-color: #ffffff;
        min-height: 100px;
        margin-top: 20px;
        margin-right: 5px;
        margin-left: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
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


    .buttonsWrapper {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .buttonsWrapper a.btn {
        background-color: #C6C2C4;
        border: none;
        margin-top: 10px;
    }

    .buttonsWrapper a.btn:hover {
        background-color: white;
        color: #C6C2C4;
    }

    .titleCol h1 {
        font-size: 4rem;
    }

    @media only screen and (min-width: 416px) and (max-width: 767.98px) {
        footer .logosRow .col-md-4 {
            text-align: center !important;
        }

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