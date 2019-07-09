<template>
    <div class="h-100">
        <TopMenu></TopMenu>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import TopMenu from '@/components/TopMenu'
    import Footer from '@/components/Footer'

    export default {
        name: 'App',
        data: function () {
            return {}
        },
        components: {
            TopMenu, Footer
        }

    }
</script>

<style>
    html, body {
        height: 100%;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    div[style*="z-index: 10000"] {
        display: none !important;
    }
</style>
