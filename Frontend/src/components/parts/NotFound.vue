<template>
    <div>
        <section class="notfound">
            <div class="container">
                <div class="customize-title text-center">
                    <h1>Error 404</h1>
                    <p>This page could not be found!</p>
                    <router-link class="primarybtn" to='/'>Go to Homepage</router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:' NotFound',
}
</script>