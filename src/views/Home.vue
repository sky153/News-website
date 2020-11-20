<template>
  <div>
      <Banner :banners="banners" :duration="4000"></Banner>
      <Channels @change="handleChange"></Channels>
      <Loading v-show="isLoading"></Loading>
      <newsList :news="news" v-show="!isLoading"></newsLIst>
  </div>
</template>

<script>
import Channels from "../components/news/Channels"
import newsList from "../components/news/newsLIst"
import Banner from "../components/Banner"
import Loading from "../components/Loading"
import { getNews } from "../services/newServies"
export default {
    components: {
        Banner,
        Channels,
        newsList,
        Loading
    },
    data() {
        return {
            banners: [
                {link: "https://www.baidu.com", url: require("../assets/banner/1.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/2.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/3.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/4.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/5.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/6.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/7.jpeg")},
                {link: "https://www.baidu.com", url: require("../assets/banner/8.jpeg")},
            ],
            news: [],
            isLoading: true 
        }
    },
    methods: {
        async handleChange(channelId) {
            this.isLoading = true;
            var res = await getNews(channelId, 1, 10)
            // console.log(res.contentlist)
            this.news = res.contentlist;
            this.isLoading = false;
        }
    }
}
</script>

<style>

</style>