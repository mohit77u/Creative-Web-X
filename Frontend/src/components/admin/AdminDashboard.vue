<template>
    <transition name="fade">
        <div>
            <section class="dashboard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-2">
                            <SideBar />
                        </div>
                        <div class="col-sm-10">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </transition>
</template>
<script>
    import axios from 'axios'
    import SideBar from './SideBar.vue'
    export default {
        name: 'AdminDashboard',
        components: {
            SideBar
        },
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
        beforeCreate () {
            if(this.$store.state.token == null) {
                this.$router.push('/login')
            } else this.$router.push('/dashboard/admin')
            
        }
        
    }
</script>
