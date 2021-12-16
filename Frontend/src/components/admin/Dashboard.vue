<template>
    <div>
        <div class="main-content">
            <div class="all-jobs" v-if="users">
                <h2 class="text-center my-2">Admin Details</h2>
                <div class="add-new-btn mb-3">
                    <router-link class="btn btn-outline-success" to="/dashboard/add-admin" >Add New Admin</router-link>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SI.NO</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user,index) in users" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ user.first_name }}</td>
                                <td>{{ user.last_name }}</td>
                                <td>{{ user.email }}</td>
                                <td><button class="btn btn-outline-danger" @click="deleteUser(user.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="all-jobs mt-5" v-if="categories">
                <h2 class="text-center my-2">Blog Category</h2>
                <div class="add-new-btn mb-3">
                    <router-link class="btn btn-outline-success" to="/dashboard/add-category" >Add New Category</router-link>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SI.NO</th>
                                <th>Category Name</th>
                                <th>Image</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(category,index) in categories" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ category.category_name }}</td>
                                <td><img :src="'http://localhost:8000' + category.image" :alt="category.category_name"></td>
                                <td><button class="btn btn-outline-danger" @click="deleteCategory(category.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Dashboard',
    data(){
        return{
            users: [],
            categories: [],
            user: [],
        }
    },
    methods: {
        fetchAllUsers() {
            axios.get('http://localhost:8000/api/users', this.users)
            .then(response => this.users = response.data)
            .catch(error=>{
                console.log(error)
            })           
            
        },
        deleteUser(id) {
            axios.post(`http://localhost:8000/api/delete/${id}`)
            .then(() => {
                this.fetchAllUsers();
                this.$swal({
                    title: 'Succesfully User Deleted !!',
                    icon: 'success'
                });
            })
            .catch(()=>{
                this.$swal({
                    title: 'Error occurred !!',
                    icon: 'error'
                });
            }) 
        },
        fetchAllCategories() {
            axios.get('http://localhost:8000/api/blog_categories')
            .then(res => {
                this.categories = res.data
            })
            .catch(error=>{
                console.log(error)
            })           
            
        },
        deleteCategory(id) {
            axios.delete(`http://localhost:8000/api/blog_categories/${id}`)
            .then(() => {
                this.fetchAllCategories();
                this.$swal({
                    title: 'Succesfully Category Deleted !!',
                    icon: 'success'
                });
            })
            .catch(()=>{
                this.$swal({
                    title: 'Error occurred !!',
                    icon: 'error'
                });
            }) 
        },
    },
    mounted() {
        this.fetchAllUsers();
        this.fetchAllCategories();
    },
}
</script>