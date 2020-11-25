<template>
    <div 
        class="col-md-6"
        :class="{'offset-6' : message.sender === this.userId}"
    >
        <div 
            class="chat-bubble d-flex justify-content-between align-items-center" 
            :class="{'out' : message.sender === this.userId,'in' : message.sender !== this.userId}"
        >
            <p>{{message.message}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'bubble',
    props : ['message'],
    data(){
        return { 
            userId : localStorage.getItem('userId')
        }
    }
}
</script>

<style scoped>
    .chat-bubble{
        max-width: 400px;
        border-radius: 9px;
        padding: 9px 14px;
        position: relative;
        animation: fadeIn 1s ease-in;
        margin:10px 30px;
    }

    .chat-bubble::after{
        content : '';
        position:absolute;
        top : 50%;
        width: 0;
        height: 0;
        border:20px solid transparent;
        border-bottom:0;
        margin-top: -10px;
    }

    .chat-bubble.out{
        background: #eb4d4b;
        color:white;
    }

    .chat-bubble.in{
        background : #eee;
    }

    .chat-bubble.in::after{
        left: 0;
        border-right-color: #eee;
        border-left: 0;
        margin-left: -20px;
    }


    .chat-bubble.out::after{
        right: 0;
        border-left-color: #eb4d4b;
        border-right: 0;
        margin-right: -20px;
    }
</style>