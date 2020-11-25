<template>
    <div class="app">
        <div class="row no-gutters">
            <div class="col-12">
                <div class="chat-header d-flex align-items-center">
                    <img class="profile-image" v-bind:src="activeChatFriend.avatar">
                    <h6 class="ml-2"> {{activeChatFriend.name}} </h6>
                </div>
            </div>
            <div class="col-12 chat-content">
                
            </div>
            <div class="message-box">
                <form class="d-flex align-items-center mt-2 mb-2">
                    <i class="fa fa-smile icon-button hover-blue ml-2"></i>
                        <input type="text" class="ml-2 mr-2 form-control">
                    <i class="fa fa-paper-plane icon-button hover-blue mr-2"></i>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ChatContent",
    props : ['activeChatFriend']
}
</script>

<style scoped>
    .chat-header{
        cursor: pointer;
    }
    .chat-content{
        height: 650px;
        /* position:relative; */
        background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/2d9dd173426833.5c08f5634ff45.png');
    }
    .message-box{
        position:absolute; 
        bottom:0;
        background: #eee;
        height: 50px;
        width: 100%;
    }
</style>