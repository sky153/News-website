<template>
    <div>
    <div class="news-item-noraml" v-for="item in news" :key="item.id">
        <div class="image" v-if="item.havePic">
            <a :href="item.link" target="_blank">
                <img :src="item.img" alt="">
                </a>
        </div>
        <div class="words">
            <h2 class="title">
                <a :href="item.link" target="_blank">{{item.title}}</a>
            </h2>
        </div>
        <div class="aside">
            <span>{{item.channelName}}</span>
            <span>来源: {{item.source}}</span>
            <span>发布日期: {{item.pubDate}}</span>
        </div>
        <div class="content">
            {{item.content}}
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Array,
            default: ()=> [],
        }
    }
}
</script>

<style scoped>
.news-item-noraml{
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    overflow: hidden;
    line-height: 1.5;
}
.image{
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 20px;
    float: left;
}
.image a img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title{
    font-size: 1.5em;
}
.title a{
    color: #409eff;
}
.aside{
    font-size: 14px;
    color: #888;
}
.aside span{
    margin-right: 15px;
}
.content{
    max-height: 100px;
    overflow: hidden;
    line-height: 2;
}
</style>