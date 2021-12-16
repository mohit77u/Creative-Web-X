<template>
    <div>
        <div class="category">
            <h3>Category</h3>
            <div class="category-inner">
                <ul>
                    <li v-for="(category,index) in categories" :key="index"><router-link class="sidetexticon" :to="{name:'CategoryBlog', params:{id:category.id,slug:category.url}}">{{category.category_name}} <i class="fas fa-angle-double-right"></i></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'BlogSidebar',
    data(){
        return{
            categories:[],
        }
    },
    methods:{
        fetchCategory(){
            axios.get('http://localhost:8000/api/blog_categories')
            .then(res=>{
                this.categories = res.data
            }).catch(()=>{

            })
        },
    },
    mounted(){
        this.fetchCategory();
    }
}
</script>