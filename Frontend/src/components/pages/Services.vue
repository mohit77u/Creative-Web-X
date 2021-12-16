<template>
    <div>
        <Breadcumb v-bind:title="title"/>
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
    name:'Services',
    components:{
        Breadcumb,ContactForm,
    },
    data(){
        return{
            title:'Services',
            styleData:[
                {image:'ui.png', title:'Frontend Development', desc:'Website development incorporates a lots of factors like, language used, frontend framework, mobile responsiveness, user experience, page load speed and a lot more.'},
                {image:'speed.png', title:'WordPress Development', desc:'All our website development work is custom made with minimalist codes and libraries. We take pride in developing the perfect website that looks and feels perfect and is well placed to give you results in digital marketing.'},
                {image:'responsive.png', title:'Graphics Designing', desc:'Our graphics designing team creates stunning graphics that communicate clearly with the customers. Choice of colors, imagery and message are well thought of to make it stand apart from the deluge of the creative out there.'},
                {image:'tech.png', title:'CMS Website Development', desc:'Just the amount of codes to make the website sleek and quick. This makes the website well prepared for SEO results giving you a big jump in digital marketing.'},
                {image:'ecommerce.png', title:'Mobile App Development', desc:'We have the team to make your imagination come to reality. We have earned the reputation by creating innovative iOS, Android, Native and Hybrid Mobile Apps for various brands for years. With latest trend and technologies like IoT, AI, Cross-platform, Blockchain we help you give wings to your dream app.'},
                {image:'agile.png', title:'Laravel Development', desc:'Our Laravel developers create custom websites from scratch which are robust, scalable and highly secure. Laravel ships in tons of functionalities that make it the most celebrated PHP framework.'},
                {image:'development.png', title:'React Development', desc:'Since React uses virtual DOM, the page renders very smoothly using less time. This improves the user experience and SEO results. The data gets shown in real-time without the need for the page to reload. On Facebook, when you like a post, the number increases immediately without having the page to reload.'},
                {image:'content.png', title:'Angular Development', desc:'Custom one-page web application development while utilizing JavaScript. We have a team of experienced Angular developers who use advanced tools and techniques to ensure a top-class solution for our clients. We ensure you to get the recognition you deserve in the industry.'},
                {image:'digital.png', title:'Vue Development', desc:'One java script framework has become very popular among all frameworks and that is Vue.js. An advanced frontend java script framework for building user interface and single page application. As it contains powerful tools which help to build highly scalable and interactive application it is mainly used for mobile application development.'},
            ]
        }
    }
}
</script>