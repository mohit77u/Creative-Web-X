<template>
    <div>
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 content" data-aos="fade-right" data-aos-delay="600">
                        <div class="banner-content">
                            <h1>One of the fastest growing agency</h1>
                            <p>We design and develop web and mobile applications for our clients worldwide.</p>                          
                        </div>
                    </div>
                    <div class="col-sm-6" data-aos="fade-left" data-aos-delay="800">
                        <img src="/images/about-banner.png" alt="about banner">
                    </div>
                </div>
            </div>
        </section>

         <section class="style what">
            <div class="container">
                <div class="section-heading text-center">
                    <h6>Our Values</h6>
                    <h2>Why should you work with us?</h2>
                    <p>We provides services to businesses of all sizes with an opportunity <br>to market their brand 24/7 at a low cost.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4" v-for="(why,index) in whyData" :key="index" data-aos="fade-up" data-aos-delay="600">
                        <div class="what-content">
                            <div class="row">
                                <div class="col-sm-3">
                                    <img :src="'/images/' + why.image" :alt="why.title">
                                </div>
                                <div class="col-sm-9">
                                    <div class="inner-what-content">
                                        <h4>{{why.title}}</h4>
                                        <p>{{why.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="who">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" data-aos="fade-left" data-aos-delay="600">
                        <img src="/images/who-side.png" alt="who we are">
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5 who-side" data-aos="fade-left" data-aos-delay="800">
                        <div class="section-heading">
                            <h6>Who we are</h6>
                            <h2>Building software for world changers</h2>
                            <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.</p>
                            <p>Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="process what">
            <div class="container">
                <div class="section-heading text-center">
                    <h6>Our Process</h6>
                    <h2>Our web development process</h2>
                    <p>We provides services to businesses of all sizes with an opportunity <br>to market their brand 24/7 at a low cost.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4" v-for="(process,index) in processData" :key="index">
                        <div class="process-content">
                            <div class="text-center">
                                <div class="number">{{process.number}}</div>
                            </div>
                            <div class="process-body">
                                <h4>{{process.title}}</h4>
                                <p>{{process.desc}}</p>
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
export default {
    name:'About',
    data(){
        return{
            whyData:[
                {image:'buss.png', title:'Dedicated 24/7 Support', desc:'You can rely on our 24/7 tech support that will gladly solve any app issue you may have.'},
                {image:'digital.png', title:'High Level of Usability', desc:'All our products have high usability allowing users to easily operate the apps.'},
                {image:'agile.png', title:'Agile and Fast Working Style', desc:'This type of approach to our work helps our specialists to quickly develop better apps.'},
                {image:'html.png', title:'Clean W3c Valid XHTML & CSS', desc:'We follow clean w3c valid XHTML and CSS standards and make sure all web pages pass the validation.'},
                {image:'ecommerce.png', title:'Custom Website Design', desc:'To enhance the sales of your online business, we render the fully customized web development.'},
                {image:'responsive.png', title:'Responsive Design', desc:'With the help of our 100% error-free e-commerce web development services, you can access your website across the globe without any issue.'},
            ],
            processData:[
                {number:'01', title:'Discovery', desc:'Our goal is to listen to you, and get to know enough about your business to present you with the best solution. We will ask questions, and take notes.'},
                {number:'02', title:'Content Development', desc:'Content is essential to strong digital marketing. It educates your customers so they can make smart buying decisions. Optimized content will attract new leads to your website with strong keywords.'},
                {number:'03', title:'Design & Development', desc:'Once your content is ready, your project will go to the design stage where the overall “look” of your new website is created. Then our developers will prepare the functionality and features of your website.'},
                {number:'04', title:'Launch', desc:'This is the most exciting part! Your new website is ready to show the world. We have an internal process dedicated to bringing your website live, to ensure quality and accuracy at every step.'},
                {number:'05', title:'Support & Maintenance', desc:'Your new website is live, but your business is changing every day! The best changes are due to growth. Our team is standing by, ready to make changes at your request.'},
            ],
        }
    },
    mounted(){
        document.title = 'About us | Best Web Development Company in India | Creative Web X'
    }
}
</script>