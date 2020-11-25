<template>
    <div class="mt-2">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <img id="login-form-image" src="https://image.freepik.com/free-vector/group-chat-concept-illustration_114360-1495.jpg" />
                            </div>
                            <div class="col-6">
                                <form @submit="(e)=>login(e)">
                                    <div class="form-group">
                                      <input type="text" v-model="email" name="email" id="email" class="form-control" :class="[emailError.length > 0 ? 'is-invalid' : 'is-valid' ]" placeholder="Email" aria-describedby="helpId">
                                      <small class="text-danger">{{emailError}}</small>
                                    </div>
                                    <div class="form-group">
                                      <input type="password" v-model="password" name="password" id="password" class="form-control" :class="[passwordError.length > 0 ? 'is-invalid' : 'is-valid' ]" placeholder="Password" aria-describedby="helpId">
                                      <small class="text-danger">{{passwordError}}</small>
                                    </div>
                                    <div class="form-group d-flex justify-content-end">
                                        <button class="btn btn-danger">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Users from '../Users'

const users = Users

export default {
    name : "Landing",
    data(){
        return {
            email : '',
            password : '',
            passwordError : "",
            emailError : ""
        }
    },
    methods :{ 
        login(e){
            const email   = this.email
            const password = this.password

            this.emailError = email.length <= 0 ? "Email required!" : ""
            this.passwordError = password.length <= 0 ? "Password required!" : ""


            if(email.length > 0 && password.length > 0){
                let user = users.filter(user=>user.email == email)
                if(user.length > 0){
                    user = user[0] 
                    if(user.password === password){
                        localStorage.setItem("userId",user.id)
                        window.location.href = '#/chat'
                    }else{
                        this.passwordError = "Invalid password"
                    }
                }else{
                    this.emailError = "Invalid username"
                }
            }

            e.preventDefault()
        }
    }
}
</script>

<style scoped>
    #login-form-image{
        max-width: 300px;
        border-radius: 40%;
        opacity: 40px;
    }
</style>

