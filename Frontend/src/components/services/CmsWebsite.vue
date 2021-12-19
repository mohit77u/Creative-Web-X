<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="service-first">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>CMS Website Development</h6>
                            <h2>Design & Development</h2>
                            <p>CMS stands for Content Management System, which is essentially software that helps you to build a website. It may provide you with templates, and it will definitely give you a way to create and manage digital content — most often through a user-friendly WYSWYG editor which is similar to using Microsoft Word.</p>
                            <p>WordPress is by far the most popular CMS for web development, web hosting and blogging. It is free and easy to use, powered by software that is created by a vast open source community of volunteers who constantly offer new web development solutions. There are so many CMS on which we can develop websites like WordPress, Webflow, Prestashop, Wix, Joomla, Opencart, Squarespace, Drupal, Blogger, etc.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/images/cms.png" alt="cms">
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
        Breadcumb,ContactForm,
    },
    data(){
        return{
            title:'CMS Website Development',
            styleData:[
                {image:'ui.png', title:'SEO System', desc:'Top UI/ UX designs as per the business that attarct customers.'},
                {image:'speed.png', title:'Without Code', desc:'Just the amount of codes to make the website sleek and quick.'},
                {image:'responsive.png', title:'Responsiveness', desc:'Responsiveness on mobiles, tablets and yes on desktops too.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best CMS Website Development Company in India | Creative Web X'
    }
}
</script>