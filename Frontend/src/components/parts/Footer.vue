<template>
    <div>
        <section class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="footer-content">
                            <router-link class="navbar-brand" to="/">Creative Web<img class="logo" src="/images/logo.png" alt="logo"></router-link>
                            <p>We provides services to businesses of all sizes with an opportunity to market their brand 24/7 at a low cost.</p>
                            <div class="social">
                                <a href="https://www.facebook.com/imohiitsingh" target="blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://github.com/mohit77u" target="blank"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/mohit-singh-patel-2b6598189/" target="blank"><i class="fab fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/_iammohit__/" target="blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3" v-for="(footer, index) in footerLinks" :key="index">
                        <div class="footer-content">
                            <h5>{{footer.title}}</h5>
                            <ul>
                                <li v-for="(link, index) in footer.links" :key="index">
                                    <router-link v-bind:to= link.url  class="footer-links">{{link.name}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="footer-content">
                            <h5 class="mb-3">Contact us</h5>
                            <div class="footer-last">
                                <ul>
                                    <li><a href="#"><i class="fas fa-map-marker-alt"></i>Indore, Madhya Pradesh</a></li>
                                    <li><a href="mailto:mohiit77u@gmail.com"><i class="fas fa-envelope"></i>mohiit77u@gmail.com</a></li>
                                    <li><a href="tel:918269584409"><i class="fas fa-phone"></i>+91 8269584409</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="footer-bottom">
                            <p>Creative Web X @2021 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
                <a href="#" :class="{ normalback: scrollPosition < 300, backtotop: scrollPosition > 300 }" data-aos="fade-left" data-aos-delay="200"><i class="fas fa-long-arrow-alt-up"></i></a>
            </div>
        </section>
        

    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            scrollPosition: null,
            footerLinks: [
                { 
                    title: 'Who we are',
                    links: [
                        {name: 'Home', url:'/'},
                        {name: 'About', url:'/about'},
                        {name: 'Services', url:'/services'},
                        {name: 'Blog', url:'/blog'},
                        {name: 'Contact us', url:'/contact us'},
                    ],
                },
                { 
                    title: 'Our Services',
                    links: [
                        {name: 'Frontend Development', url:'/frontend-development'},
                        {name: 'WordPress Development', url:'/wordPress-development'},
                        {name: 'Graphics Designing', url:'/graphics-designing'},
                        {name: 'Mobile App Development', url:'/app-development'},
                        {name: 'Laravel Development', url:'/laravel-development'},
                        {name: 'React js Development', url:'/react-development'},
                        {name: 'Angular js Development', url:'/angular-development'},
                        {name: 'Vue js Development', url:'/vue-development'},
                    ],
                },
            ],
        }
    },
     methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
}
</script>
