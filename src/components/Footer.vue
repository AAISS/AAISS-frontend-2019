<template>
    <footer>
        <div class="container">
            <div class="row logosRow">
                <div class="col-md-4">
                    <img src="https://apa.aut.ac.ir/en/index_data/aut.png" alt="amirkabir logo" class="img-fluid" draggable="false">
                </div>
                <div class="col-md-4">
                    <img src="../assets/img/ssc-logo-white-horizontal.png" alt="ssc logo" class="img-fluid" draggable="false">
                </div>
                <div class="col-md-4 text-right">
                    <img src="https://apa.aut.ac.ir/en/index_data/aut.png" alt="amirkabir logo" class="img-fluid" draggable="false">
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

    .logosRow img {
        max-height: 110px;
    }

    @media only screen and (min-width: 0) and (max-width: 767.98px) {
        footer .logosRow .col-md-4 {
            text-align: center !important;
        }
    }
</style>