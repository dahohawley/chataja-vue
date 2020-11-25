<template>
    <div class="app">
        <div class="row no-gutters chat-header d-flex justify-content-between align-items-center">
            <img v-bind:src="user[0].avatar" class="profile-image"/>
            <a href="#" class="float-right icon-button hover-red mt-2" title="Logout" >
                <i class="fa fa-power-off" aria-hidden="true"></i>
            </a> 
        </div>
        <div class="row no-gutters d-flex align-items-center searchbox">
            <div class="col-12">
                <input type="text" placeholder="Search" class="form-control">
            </div>
        </div>
        <div class="row no-gutters">
            <div 
                class="friend-item col-12 d-flex" 
                v-bind:class="{'is-active':friend.isActiveChat}"  
                v-bind:key="friend.id" 
                v-for="friend in friends"
                @click="$emit('set-active-chat',friend)"
            >
                <img v-bind:src="friend.avatar" class="profile-image"/>
                <div class="user-info ml-2 d-flex align-items-center">
                    <h6 class="friend-name">{{friend.name}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Friendlist",
    props :['user','friends']
}
</script>

<style scoped>
    .app{
        height: 700px;
    }
    .icon-search{
        font-size: 15px;
        color: grey;
    }
    .searchbox{
        background : #eee;
        padding: 10px 14px;
    }
    .friend-item{
        padding: 10px 10px;
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
    }
    .friend-item:hover,.friend-item.is-active{
        background: #e84118;
        color: white;
    }
</style>