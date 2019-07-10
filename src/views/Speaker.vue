<template>
    <section id="speakersSection">
        <div id="particles-js" class="position-absolute"></div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-3 mt-5">
                    <div class="speakerBlock">
                        <div class="text-center imgWrapper">
                            <img src="../assets/img/brain.png" alt="img" class="rounded-circle">
                        </div>
                        <div class="text-center speakerInfo">
                            <h5 class="">Masoud Saba'ee</h5>
                            <h6 class="">PhD, Amirkabir UT</h6>
                        </div>
                    </div>

                    <a href="#" class="btn btn-primary btn-lg btn-block regBtn" style="">Register</a>

                </div>
                <div class="col-md-9 mt-5 infoBlock">
                    <h1 class="display-5">
                        Neural Neural Neural Neural NeuralNe uralNe ural Neu ral Neural
                    </h1>



                    <strong>Location</strong>
                    <p>
                        <cite>Halls Department</cite>
                    </p>

                    <strong>Date and Time</strong>
                    <p>
                        <cite>
                            Wednesday, 26 July 2019
                        </cite>
                    </p>


                    <strong>Abstract</strong>
                    <p class="text-justify" style="line-height:30px;">
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
</template>

<script>
    export default {
        name: "Speaker",
        data: function () {
            return {}
        },
        methods: {},
        created() {

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

    #speakersSection {
        background: #e4e3df;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        color: #797B7F;
        padding-bottom: 20px;
    }

    .speakerBlock {
        border-radius: 15px;
        background-color: #ffffff;
        min-height: 100px;
        margin-right: 5px;
        margin-left: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    h1.display-5 {
        padding-top: 10px;
        padding-left: 10px;
    }

    .infoBlock {
        border-radius: 15px;
        background-color: #ffffff;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        margin-top: 15px;
    }

    .infoBlock p {
        padding: 5px 30px;
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

    .regBtn {
        background-color: #C6C2C4;
        border: none;
        margin-top: 10px;
        width: calc(100% - 10px);
        margin-left: 5px;
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