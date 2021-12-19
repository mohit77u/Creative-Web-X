<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="service-first">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>React js Development</h6>
                            <h2>Design & Development</h2>
                            <p>Having a website without using any of the three major frontend frameworks is a sin. It is akin to not keeping up with the latest technological trends in website development. React JS along with two other frontend frameworks, Angular JS and Vue have truly revolutionized the world of web development.</p>
                            <p>React is the future of website design and development, and you need to check whether your website uses this technology or not.</p>
                            <p>Since React uses virtual DOM, the page renders very smoothly using less time. This improves the user experience and SEO results. The data gets shown in real-time without the need for the page to reload. On Facebook, when you like a post, the number increases immediately without having the page to reload.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/images/react.png" alt="react">
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
            title:'React js Development',
            styleData:[
                {image:'ui.png', title:'Regular Websites', desc:'ReactJS is good for the regular corporate websites too.'},
                {image:'speed.png', title:'Support and future maintenance', desc:'Easy annual maintenance plans for you.'},
                {image:'responsive.png', title:'React based mobile App development', desc:'React Native us used prominantly for developing apps.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best React Development Company in India | Creative Web X'
    }
}
</script>