<!-- header component (nav) -->
<template>
    <div class="nav">
        
        <ul class="list">
            <li class="item"><nuxt-link class="link" :to="'/'">Home</nuxt-link></li>
            <li class="item"><nuxt-link class="link" :to="'/posts'">Posts</nuxt-link></li>
        </ul>   
        <hr/>
    </div>    
</template>

<style>
.nav {
    text-align:center;
}
.list {
    margin-top:10px;
}
.item {
    display:inline-block;
    list-style:none;
    padding:20px;
    margin:0 50px;
}
.link {
    background-color:grey;
    padding:20px;
    color:white;
    text-decoration: none;
    box-shadow: 3px 3px 15px 0px grey;
}
a.nuxt-link-active {
    color:red;
}
</style>
