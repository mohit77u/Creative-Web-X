<template>
    <section class="auth">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <div class="card">
                        <h2 class="text-center my-5">Registration Form</h2>
                        <form class="px-5 py-5" v-on:submit.prevent="Register">
                            <div class="mb-3">
                                <label class="form-label">First Name</label>
                                <input type="text" placeholder="First Name" class="form-control" v-model="registration.first_name">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Last Name</label>
                                <input type="text" placeholder="Last Name" class="form-control" v-model="registration.last_name">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" placeholder="Email address" class="form-control" v-model="registration.email">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" placeholder="Password" class="form-control" v-model="registration.password">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password Confirmation</label>
                                <input type="password" placeholder="Password Confirmation" class="form-control" v-model="registration.password_confirmation">
                            </div>
                            <button type="submit" class="btn primarybtn w-100">{{ loading ? "Loading..." : "Register" }}</button>
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
    export default {
        name: 'Register',
        data(){
            return{
                loading: false,
                registration: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                }
            }
        },
        methods: {
            Register(){
                this.loading= true
                this.$store.dispatch('Register', this.registration)
                .then(()=>{
                    this.loading= false
                    this.$swal({
                        title: 'Succesfully Registered !!',
                        icon: 'success'
                    });
                    this.$router.push('/login')
                }).catch(error=>{
                    this.loading= false
                    this.$swal({
                        title: 'Error Occurred !!',
                        icon: 'error'
                    });
                    console.log(error)
                })
            }
        },
        beforeCreate () {
            if(this.$store.state.token) {
                this.$swal({
                    title: 'Already Registered !!',
                    icon: 'error'
                });
                this.$router.push('/')
            }
        },
        mounted(){
            document.title = 'Register For Admin Dashboard | Creative Web X'
        }
    }
</script>
