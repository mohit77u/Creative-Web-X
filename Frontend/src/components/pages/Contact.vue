<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="about contact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5" data-aos="fade-right" data-aos-delay="600">
                        <div class="section-heading">
                            <h6>Contact us</h6>
                            <h2>Connect today</h2>
                            <div class="left-contact mt-3">
                                <ul>
                                    <li><i class="fas fa-home"></i>  Indore, Madhya Pradesh</li>
                                    <li><i class="fas fa-envelope"></i> info@creativewebx.thats.im</li>
                                    <li><i class="fas fa-home"></i> +91 8269584409</li>
                                </ul>
                                <div class="social mt-5">
                                    <h2 class="mb-4">Follow us</h2>
                                    <a href="https://www.facebook.com/imohiitsingh" target="blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://github.com/mohit77u" target="blank"><i class="fab fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/mohit-singh-patel-2b6598189/" target="blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/_iammohit__/" target="blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5"  data-aos="fade-left" data-aos-delay="800">
                        <div class="about-form">
                            <h3>Feel free to connect with us for any requirement</h3> 
                            <ContactForm/>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Breadcumb from '../reuseable/Breadcumb.vue'
import ContactForm from '../reuseable/ContactForm.vue'
export default {
    name:'Contact',
    components:{
        Breadcumb,ContactForm
    },
    data(){
        return{
            title:'Contact'
        }
    },
    mounted(){
        document.title = 'Contact us to get more details about us | Creative Web X'
    }

}
</script>