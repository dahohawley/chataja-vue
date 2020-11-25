<template>
    <div class="app">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/ca-logo.png" class="navbar-brand-logo">
            </a>

            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
</template>

<script>


export default {
    name : "Navbar",
}
</script>

<style scoped>
    .navbar-brand-logo{
        width:50px;
        height: 50px;
    }
</style>