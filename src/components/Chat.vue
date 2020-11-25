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
                                    v-bind:chatMessages="chatMessages"
                                    v-on:send-message="sendMessage"
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
import fire from '../fire'

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
                return user.id != localStorage.getItem('userId')    
            }),
            activeChatFriend : null,
            chatMessages : null,
            chatId : null
        }
    },
    methods : {
        setActiveChat(friendParams){
            const userId = localStorage.getItem('userId')
            this.friends.filter(friend=>{
                if(friend.id == friendParams.id) {
                    this.activeChatFriend = friend
                    friend.isActiveChat = true
                }else{
                    friend.isActiveChat = false
                }
                return friend
            })
            const friend = this.activeChatFriend

            if(userId < friend.id){
                this.chatId  = userId+"_"+friend.id
            }else{
                this.chatId  = friend.id+"_"+userId
            }
            // Ambil data chat nya nanti simpen ke chatMessages
            const ref = fire.database().ref('chats/'+this.chatId)
            ref.on('value',(data)=>{
                const messages = data.val()
                let newMessages = []
                for(const message in messages){
                    messages[message]['id'] = message
                    newMessages.push(messages[message])
                }
                this.chatMessages = newMessages
                setTimeout(()=>{
                    document.getElementById('chat-content').scrollTop =  document.getElementById('chat-content').scrollHeight
                },30)
            })
        },
        sendMessage(message) {
            const chatId    = this.chatId

            fire.database().ref('chats/'+chatId).push({
                timestamps : new Date().toString(),
                message : message,
                sender : this.userId
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