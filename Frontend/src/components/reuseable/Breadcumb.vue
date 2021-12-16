<template>
    <section class="breadcumb">
        <div class="breadcumb-main">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link class="homelink" to="/">Home</router-link></li>
                <i class="fas fa-chevron-right"></i>
                <li class="breadcrumb-item active">{{ title }}</li>
            </ol>
            <h1>{{ title }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name:'Breadcumb',
    props: [ 'title' ],
    data(){
        return{

        }
    }
}
</script>