<template>
    <div>

         <Breadcumb v-bind:title="title"/>

        <section class="single-blog mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="single">
                            <img :src="'http://localhost:8000' + blog.featured_image" :alt="blog.title">
                            <h2 class="mt-5 mb-3">{{blog.title}}</h2>
                            <div class="content">
                                <p>{{blog.description}}</p>
                                <h4 class="mt-5">{{blog.headingone}}</h4>
                                <p>{{blog.contentone}}</p>
                                <h4 class="mt-5">{{blog.headingtwo}}</h4>
                                <p>{{blog.contenttwo}}</p>
                                <h4 class="mt-5">{{blog.headingthree}}</h4>
                                <p>{{blog.contentthree}}</p>
                                <h4 class="mt-5">{{blog.headingfour}}</h4>
                                <p>{{blog.contentfour}}</p>
                                <h4 class="mt-5">{{blog.headingfive}}</h4>
                                <p>{{blog.contentfive}}</p>
                                 <h4 class="mt-5">{{blog.headingsix}}</h4>
                                <p>{{blog.contentsix}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="sidebar">
                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import BlogSidebar from './BlogSidebar.vue'
import Breadcumb from '../reuseable/Breadcumb.vue'
export default {
    name:'SingleBlog',
    components:{
        BlogSidebar,Breadcumb
    },
    data(){
        return{
            blog:[],
            title: '',
        }
    },
    methods:{
        fetchBlog(){
            axios.get(`http://localhost:8000/api/blogs/${this.$route.params.id}`)
            .then((res)=> {
                this.blog = res.data
                this.title = res.data.title
            });
        }
    },
    mounted(){
        this.fetchBlog();
    }
}
</script>