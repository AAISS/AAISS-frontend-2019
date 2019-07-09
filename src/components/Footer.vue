<template>
    <footer class="w-100">
        <div class="container">
            <div class="row logosRow">
                <div class="col-md-4">
                    <img src="https://apa.aut.ac.ir/en/index_data/aut.png" alt="amirkabir logo" class="img-fluid"
                         style="max-height:100px;">
                </div>
                <div class="col-md-4">
                    <img src="http://ceit-ssc.ir/wp-content/uploads/2019/04/ssclogoeng-e1555967192283.png"
                         alt="ssc logo">
                </div>
                <div class="col-md-4 text-right">
                    <img src="https://apa.aut.ac.ir/en/index_data/aut.png" alt="amirkabir logo" class="img-fluid"
                         style="max-height:100px;">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
            return {}
        },
        methods: {},
        created() {
        },
        mounted() {
        }

    }
</script>

<style scoped>
    footer {
        background-color: #B7867E;
    }

    .footerText span {
        display: inline-block;
        margin: 10px;
    }

    .footerText span::first-letter {
        color: #10a3f0;
    }


    .logosRow {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    @media only screen and (min-width: 0) and (max-width: 767.98px) {
        footer .logosRow .col-md-4 {
            text-align: center !important;
        }
    }
</style>