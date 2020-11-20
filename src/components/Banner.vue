<template>
    <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
        <ul class="images" :style="{width: banners.length*100 + '%', marginLeft: -index*100 + '%'}">
            <li v-for="(item,i) in banners" :key="i">
                <a :href="item.link"><img :src="item.url || item.imageurls[0].url" alt=""></a>
            </li>
        </ul> 
        <ul class="dots"> 
            <li v-for="(item,i) in banners" :key="i" :class="{active: i === index}" @click="index = i"></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        banners: {
            type: Array,
            required: true
        },
        duration: {
            type: Number,
            default: 2000
        }
    },
    data() {
        return {
            index: 0,
            timer: null
        }
    },
    created() {
        this.autoStart()
    },
    destroyed() {
        this.autoStop()
    },
    methods: {
        autoStart() {
            if(this.timer)return;
            this.timer = setInterval(()=> {
                // this.index ++
                this.index = (this.index + 1) % this.banners.length
            },this.duration)
        },
        autoStop() {
            clearInterval(this.timer)
            this.timer = null
        }   
    }
}
</script>

<style scoped>
.banner-container{
    height: 350px;
    width: 1080px;
    position: relative;
    overflow: hidden;
}
.banner-container li{
    display: block;
    width: 1080px;
    height: 100%;
    float: left;
}
.images{
    height: 100%;
    transition: all 0.5s
}
.banner-container img{
    width: 1080px;
    height: 100%;
}
.dots{
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
}
.dots li{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #fff;
    margin: 0 3px;
}
.dots li.active{
    background-color: #fff;
}
</style>