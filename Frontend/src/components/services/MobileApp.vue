<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="service-first">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>Mobile App Development</h6>
                            <h2>Design & Development</h2>
                            <p>We develop beautiful and high functioning Apps in all languages. The app development process starts with outlining the structure of the app content just like a blueprint. The information architecture helps in structuring the flow of information. IA helps in making the process simple for the designer and intuitive to navigate. We always make the IA scalable and comprehendible.</p>
                            <p>Front end app development involves the interface development, how will the application look. Deciding the theme, images, font, style, and its presentation, while backend app development involves the development of the functionalities, how will it function or work. Managing the database, the users and their security, and app performance issues etc. We create the front end using primarily 3 languages, such as HTML, CSS, Java script while our great coding minds who excel in programming languages like PHP, Ruby, Python, Node.js, and Java and proficient in MySQL, Oracle, and SQL Server databases develops the backend.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/images/app.png" alt="app">
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
            title:'Mobile App Development',
            styleData:[
                {image:'ui.png', title:'Attractive design and UI', desc:'Top UI/ UX designs as per the business that attarct customers.'},
                {image:'speed.png', title:'Best competitive price', desc:'Highest App development services at lowest prices.'},
                {image:'responsive.png', title:'Customization', desc:'Highend customisation in app design and functionalities.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best Mobile App Development Company in India | Creative Web X'
    }
}
</script>