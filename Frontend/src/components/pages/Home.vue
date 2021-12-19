<template>
    <div>
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 content" data-aos="fade-right" data-aos-delay="600">
                        <div class="banner-content">
                            <h1>Build beautiful website & mobile apps.</h1>
                            <p>Create live segments and target the right people for messages based on their behaviors.</p>
                            <router-link to="/shop"><button class="primarybtn">Get Started</button></router-link>                            
                        </div>
                    </div>
                    <div class="col-sm-6" data-aos="fade-left" data-aos-delay="800">
                        <img src="/images/banner-side.png" alt="home banner">
                    </div>
                </div>
            </div>
        </section>

        <section class="what">
            <div class="container">
                <div class="section-heading text-center">
                    <h6>What We Can Do For You</h6>
                    <h2>Services we can help you with</h2>
                    <p>We provides services to businesses of all sizes with an opportunity <br>to market their brand 24/7 at a low cost.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4" v-for="(why,index) in whyData" :key="index" data-aos="fade-up" data-aos-delay="800">
                        <div class="what-content">
                            <div class="row">
                                <div class="col-sm-3">
                                    <img :src="'/images/' + why.image" :alt="why.title">
                                </div>
                                <div class="col-sm-9">
                                    <div class="inner-what-content">
                                        <h4>{{why.title}}</h4>
                                        <p>{{why.desc}}</p>
                                        <div class="find">
                                            <div class="line"></div>
                                            <router-link to="/services" class="findbtn">Find out more</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5">
                    <router-link to="/services" class="darkbtn">See more services</router-link>
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

        <section class="together" data-aos="fade-up" data-aos-delay="600">
            <div class="container">
                <div class="section-heading text-center">
                    <h6>Let's Work Together</h6>
                    <h2>Need a successful project?</h2>
                    <p class="mb-5">We provides services to businesses of all sizes with an opportunity <br>to market their brand 24/7 at a low cost.</p>
                    <router-link to="/contact" class="primarybtn">Contact us</router-link>
                </div>
            </div>
        </section>
        
        
    </div>
</template>

<script>
import ContactForm from '../reuseable/ContactForm.vue'
export default {
    name:'Home',
    components: {
        ContactForm,
    },
    data(){
        return{
            whyData:[
                {image:'bell.png', title:'Design', desc:'You want to choose a Web Designer that has a good experience of the industry and who has gained a good reputation.'},
                {image:'development.png', title:'Development', desc:'As our websites are developed from scratch and are not dependent on absolutely anything, they can withstand any updates that come along.'},
                {image:'content.png', title:'Technology', desc:'As our websites are developed from scratch and are not dependent on absolutely anything, they can withstand any updates that come along.'},
            ],
            styleData:[
                {image:'ui.png', title:'Best UI/UX designs', desc:'We keep the designs of the website fresh and unique. Being a graphics designer goes a long way in website development considering the images used.'},
                {image:'responsive.png', title:'Custom Development', desc:'We do not buy themes from any site and instead we create wordpress theme of our own. This gives us a lot of control for any kind of change you might need.'},
                {image:'speed.png', title:'Loading speed', desc:'Loading speed plays a crucial role in SEO results of the website. Google and users both prefer a website that loads easily and are mobile responsive.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best Web And App Development Company in India | Creative Web X'
    }
}
</script>