<template>
    <div>
        <div class="mt-2 row d-flex align-items-center justify-content-center">
            <div class="col-12">
                <div class="card chat-container">
                    <div class="card-body no-gutters">
                        <div class="col-5 border-right no-gutters">
                            <Friendlist v-bind:user="loggedInUser" v-bind:friends="friends"/>
                        </div>
                        <div class="col-7 no-gutters">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Friendlist from './Chat/Friendlist'
import Users from '../Users'

const users = Users

export default {
    name : "chat",
    components : {
        Friendlist        
    },
    data(){
        return {
            userId : localStorage.getItem('userId'),
            loggedInUser : users.filter(user=>{
                if(user.id == localStorage.getItem('userId')){
                    return user
                }
            }),
            friends : users.filter(user=>{return user.id != localStorage.getItem('userId')})
        }
    }
}
</script>

<style scoped>
    .card-body{
        padding : 0;
    }

    .chat-container{
        min-height: 800px;
    }
    
</style>

<style>
    .chat-header{
        padding: 10px 15px;
        background : #eee !important;
        border-radius: 8px;
    }

    .profile-image{
        max-width: 50px;
        max-height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .icon-button{
        font-size: 25px;
        color: grey;
        transition: 0.3s ease-in;
    }

    .icon-button.hover-red:hover{
        color: #e84118;
    }
</style>