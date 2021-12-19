<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="service-first">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>Laravel Development</h6>
                            <h2>Design & Development</h2>
                            <p>The websites developed in Laravel follow the Model View Controller (MVC) to keep the code very well structured making it easy to maintain in future. Laravel is easy to maintain, customize and scale up as when required. Without having to face any glitches, the websites developed in Laravel work very smoothly.</p>
                            <p>Laravel facilitates rapid website development like no other framework in market. With set commands in its artisan, the development bypasses all headaches and confusions that plagued website development before Laravel development came in picture.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/images/laravel.png" alt="laravel">
                    </div>
                </div>
            </div>
        </section>

        <section class="style what">
            <div class="container">
                <div class="section-heading text-center">
                    <h6>Working style</h6>
                    <h2>Best solutions for your business</h2>
                    <p>We provides services to businesses of all sizes with an opportunity <br>to market their brand 24/7 at a low cost.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4" v-for="(style,index) in styleData" :key="index" data-aos="fade-up" data-aos-delay="600">
                        <div class="what-content">
                            <div class="row">
                                <div class="col-sm-3">
                                    <img :src="'/images/' + style.image" :alt="style.title">
                                </div>
                                <div class="col-sm-9">
                                    <div class="inner-what-content">
                                        <h4>{{style.title}}</h4>
                                        <p>{{style.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>About</h6>
                            <h2>We do design, code & develop</h2>
                            <p>We focus on the needs of small to middle market businesses to improve and grow their return. Start working with us that can provide everything you need.</p>
                            <p>Website stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate change and innovation.</p>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5"  data-aos="fade-left" data-aos-delay="800">
                        <div class="about-form">
                            <h3>Get a free Keystroke quote now</h3> 
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
import Breadcumb from '../reuseable/Breadcumb.vue'
import ContactForm from '../reuseable/ContactForm.vue'
export default {
    name:'Frontend',
    components:{
        Breadcumb,ContactForm
    },
    data(){
        return{
            title:'Laravel Development',
            styleData:[
                {image:'ui.png', title:'Ecommerce Website development', desc:'E-commerce websites in laravel are robust, secure and scalable'},
                {image:'speed.png', title:'Blog website', desc:'Get easy to maintain customised laravel blogs with admin panel.'},
                {image:'responsive.png', title:'Big Projects in Laravel', desc:'Laravel comes in very handy in big projects with full scalability.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best Laravel Development Company in India | Creative Web X'
    }
}
</script>