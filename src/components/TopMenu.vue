<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top"
         :class="{'bg-white' : navbarWhiteColorReady,'navbar-shadow': navbarWhiteColorReady}">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#aaissNavbar"
                aria-controls="aaissNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand font-weight-bold" to="/">AAISS</router-link>

        <div class="collapse navbar-collapse justify-content-end" id="aaissNavbar">
            <ul class="navbar-nav mt-2 mt-lg-0 font-weight-bold">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <a href="#aboutSection" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#speakersSection" class="nav-link">Speakers</a>
                </li>
                <li class="nav-item">
                    <router-link to="/schedule" class="nav-link">Schedule</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/workshops" class="nav-link">Workshops</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/staff" class="nav-link">Staff</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TopMenu",
        data: function () {
            return {
                navbarWhiteColorReady: false,
                navbarShadowReady: false,
            }
        },
        methods: {},
        created() {
        },
        mounted() {
            document.addEventListener('scroll', () => {
                if (scrollY >= 100) {
                    this.navbarWhiteColorReady = true;
                    this.navbarShadowReady = true;
                } else {
                    this.navbarWhiteColorReady = false;
                    this.navbarShadowReady = false;
                }
            });
        },
        watch: {}

    }
</script>

<style scoped>
    nav {
        transition: all 0.3s ease-in-out;
    }

    .navbar-shadow {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    .nav-item {
        margin-right: 10px;
        margin-left: 10px;
    }

    .nav-item:hover > .nav-link {
        color: #8e5751 !important;
    }

    .nav-link {
        color: #c1766e !important;
    }

    .navbar-brand {
        color: #797B7F;
        font-size: 30px;
    }

    .navbar {
        height: 65px;
    }

    ul.navbar-nav {
        float: right;
    }


    @media only screen and (min-width: 0) and (max-width: 767.98px) {
        nav {
            background-color: white;
        }

        ul.navbar-nav {
            float: none;
            text-align: center;
            border-radius: 0 0 10px 10px;
            background-color: white;
            margin-top: 0 !important;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        }
    }
</style>