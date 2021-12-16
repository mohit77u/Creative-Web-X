<template>
    <div>
        <Breadcumb v-bind:title="title"/>

        <section class="blog">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="left-blog">
                            <div class="section-heading mb-5">
                                <h6>Blog</h6>
                                <h2>Interesting reads for you</h2>
                            </div>
                            <div class="row" v-if="showsearch === false">
                                <div class="col-sm-6" v-for="(blog,index) in blogs" :key="index">
                                    <router-link :to="{name:'SingleBlog', params:{id:blog.id,slug:blog.slug}}">
                                        <div class="blog-card card">
                                            <div class="blog-top">
                                                <img :src="'http://localhost:8000' + blog.featured_image" :alt="blog.title">
                                                <!-- <p>{{blog.category_name}}</p> -->
                                            </div>
                                            <div class="card-body">
                                                <h4 class="blogtitle">{{blog.title}}</h4>
                                                <p>{{blog.description}}</p>
                                                <div class="find">
                                                    <div class="line"></div>
                                                    <router-link to="#" class="findbtn">Find out more</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row" v-if="showsearch === true">
                                <div class="col-sm-6" v-for="(blog,index) in searchBlogs" :key="index">
                                    <router-link :to="{name:'SingleBlog', params:{id:blog.id,slug:blog.slug}}">
                                        <div class="blog-card card">
                                            <div class="blog-top">
                                                <img :src="'http://localhost:8000' + blog.featured_image" :alt="blog.title">
                                                <!-- <p>{{blog.category_name}}</p> -->
                                            </div>
                                            <div class="card-body">
                                                <h4 class="blogtitle">{{blog.title}}</h4>
                                                <p>{{blog.description}}</p>
                                                <div class="find">
                                                    <div class="line"></div>
                                                    <router-link to="#" class="findbtn">Find out more</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="pagination my-5">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="sidebar">
                            <div class="search">
                                <h3>Search</h3>
                                <form @submit.prevent="searchBlog" >
                                    <div class="input-group flex-nowrap">
                                        <input type="text" v-model="search" class="form-control" placeholder="Search">
                                        <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i></span>
                                    </div>
                                </form>
                            </div>
                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import Breadcumb from '../reuseable/Breadcumb.vue'
import BlogSidebar from '../blog/BlogSidebar.vue'
import axios from 'axios'
export default {
    name:'Frontend',
    components:{
        Breadcumb,BlogSidebar
    },
    data(){
        return{
            title:'Blog',
            blogs:[],
            search:'',
            showsearch: false,
            searchBlogs:[],
            currentPage:''
        }
    },
    methods:{
        fetchAllBlogs() {
            axios.get('http://localhost:8000/api/blogs')
            .then(response => {
                this.blogs = response.data
            })
            .catch(error=>{
                console.log(error)
            }) 
        },
        searchBlog(){
            axios.get('http://localhost:8000/api/blog/search?q=' + this.search)
            .then((res)=> {
                this.showsearch = true
                this.searchBlogs = res.data
                this.title = this.searchBlogs.length + ' Search results for ' + this.search
            });
        }
    },
    mounted(){
        this.fetchAllBlogs();
    }
}
</script>