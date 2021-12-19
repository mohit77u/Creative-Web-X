<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="service-first">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>Graphics Designing</h6>
                            <h2>Creativity & Designing</h2>
                            <p>Our graphics designing team creates stunning graphics that communicate clearly with the customers. Choice of colors, imagery and message are well thought of to make it stand apart from the deluge of the creative out there. The graphics designed keep the logo, website and the tone of social media campaigns in mind to create the perfect designs. These designs can be used on all social media platforms and website easily.</p>
                            <p>Our designs have been appreciated by brands, peer agencies and the most by the customers who have cited the beauty and the uniqueness of the creative. We also design, brand collaterals like visiting card, pamphlets, brochures, standees, menu card, posters and a lot more. For the beautiful artworks we produce.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img src="/images/graphics.png" alt="graphics">
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
            title:'Graphics Designing',
            styleData:[
                {image:'ui.png', title:'Eye catching designs', desc:'Unique designs and creativity are the answer or else it would flow in the crowd itself.'},
                {image:'speed.png', title:'Story communication', desc:'Every graphics and video that I create has to communicate a story and pass a message to the viewer.'},
                {image:'responsive.png', title:'Call to action', desc:'The design should not be just any other design but a conversion tool for the brand.'},
            ]
        }
    },
    mounted(){
        document.title = 'Best Graphics Designing Company in India | Creative Web X'
    }
}
</script>