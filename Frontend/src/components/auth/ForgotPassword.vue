<template>
    <section class="auth">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <div class="card py-5 px-5">
                        <h2 class="text-center">Forgot Password</h2>
                        <form class="py-5" v-on:submit.prevent="Forgot">
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" placeholder="Email address" class="form-control" v-model="forgot.email">
                            </div>
                            <button type="submit" class="btn primarybtn w-100 mb-3">{{ loading ? "Loading..." : "Forgot Password" }}</button>
                        </form>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="auth-right text-center">
                        <h3>Welcome to Creative Web X</h3>
                        <p class="mb-3">We provides services to businesses of all sizes with an opportunity<br>to market their brand 24/7 at a low cost.</p>
                        <img src="/images/register.png" alt="register">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ForgotPassword',
    data(){
        return{
            loading: false,
            forgot: {
                email: '',
            }
        }
    },
    methods: {
        Forgot(){
            this.loading= true
            axios.post('https://shop-backend.betamxpertz.xyz/api/forgot',this.forgot)
            .then(()=>{
                this.loading= false
                this.$swal({
                    title: 'Check your Email !!',
                    icon: 'success'
                });
            })
            .catch(()=>{
                this.loading= false
                this.$swal({
                    title: 'User not Exist !!',
                    icon: 'error'
                });
            })
            
        }
    },
    mounted(){
        document.title = 'Forgot Password on Creative Web X'
    }
}
</script>