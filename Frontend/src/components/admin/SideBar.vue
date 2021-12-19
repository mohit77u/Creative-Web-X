<template>
    <div>
        <div class="sidemain">
            <h4 class="text-center my-5">Hi {{user.first_name}}!</h4>
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <router-link class="nav-link" to="/dashboard/admin" >Dashboard</router-link>
                <router-link class="nav-link" to="/dashboard/add-blog" >Add New Blog</router-link>
                <router-link class="nav-link" to="/dashboard/all-blog">Blogs</router-link>
                <router-link class="nav-link" to="/dashboard/add-category">Blog Category</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SideBar',
    data(){
        return{
             user: [],
        }
    },
     created(){
        axios.get('https://shop-backend.betamxpertz.xyz/api/user',{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res=>{
            this.user = res.data
        })
    },
}
</script>