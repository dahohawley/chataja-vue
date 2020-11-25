<template>
    <div>
        <div class="mt-2 row d-flex align-items-center justify-content-center">
            <div class="col-12">
                <div class="card chat-container">
                    <div class="card-body no-gutters">
                        <div class="row no-gutters">
                            <div class="col-5 border-right">
                                <Friendlist 
                                    v-bind:user="loggedInUser" 
                                    v-bind:friends="friends"
                                    v-on:set-active-chat="setActiveChat"
                                />
                            </div>
                            <div class="col-7">
                                <ChatContent
                                    v-bind:activeChatFriend="activeChatFriend"
                                />
                            </div>
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
import ChatContent from './Chat/ChatContent'

const users = Users

export default {
    name : "chat",
    components : {
        Friendlist,
        ChatContent      
    },
    data(){
        return {
            userId : localStorage.getItem('userId'),
            loggedInUser : users.filter(user=>{
                if(user.id == localStorage.getItem('userId')){
                    return user
                }
            }),
            friends : users.filter(user=>{
                user.isActiveChat = false
                console.log(user)
                return user.id != localStorage.getItem('userId')    
            }),
            activeChatFriend : null
        }
    },
    methods : {
        setActiveChat(friendParams){
            this.friends.filter(friend=>{
                if(friend.id == friendParams.id) {
                    this.activeChatFriend = friend
                    friend.isActiveChat = true
                }else{
                    friend.isActiveChat = false
                }
                return friend
            })
        }
    }
}
</script>

<style scoped>
    .card-body{
        padding : 0;
    }

    .chat-container{
        min-height: 700px;
    }
    
</style>

<style>
    .chat-header{
        padding: 10px 15px;
        background : #eee !important;
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
        transition: 0.1s ease-in;
    }

    .icon-button.hover-red:hover{
        color: #e84118;
    }

    .icon-button.hover-blue:hover{
        color: #00a8ff;
    }
</style>