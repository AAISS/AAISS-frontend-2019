<template>
    <div class="base">

        <h1 class="position-absolute">404 Not Found</h1>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>
    .base {
        min-height: 100vh;
        background: #e4e3df;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
    }

    h1{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>