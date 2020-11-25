<template>

    <div class="chat-bubble">
        <div className="row no-gutters">
            <div className="col-md-6 offset-6">
                <div className="chat-bubble out d-flex justify-content-between align-items-center">
                    <p>chat content</p>
                    <small>
                        11.31
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .chat-bubble{
        background: #eee;
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