<template>
  <div>
        <div class="type-title">
            {{channelName}}
        </div>
        <Loading v-show="isLoading"></Loading>
        <newsList v-show="!isLoading" :news="news"></newsList>
        <Page :page="page" :total="total" :limit="limit" 
        :panleNumber="panleNumber" @pageChange="handelChange"></Page>
      
  </div>
</template>

<script>
import Page from "../components/news/Page"
import newsList from "../components/news/newsLIst"
import * as newServ from "../services/newServies"
import Loading from "../components/Loading"
export default {
    components: {
        Page,
        newsList,
        Loading
    },
    data() {
        return {
            page: 1,
            total: 0,
            channelName: "",
            limit: 15,
            panleNumber: 10,
            news: [],
            isLoading: true
        }
    },
    methods: {
        async setContent() {
            this.isLoading = true
            var res = await newServ.getNews(this.$route.params.id, this.page, this.limit) 
            this.total = res.allPages;
            this.news = res.contentlist;
            this.isLoading = false
        },
        handelChange(newpage) {
            this.$router.push("?page=" + newpage) 
            // this.$router.push({
            //     name: "ChannelsNews",
            //     params: {               
            //         id: this.$route.params.id
            //     },
            //     query: {
            //         page: newpage
            //     }
            // })
            this.setContent()
            this.page = newpage
        },
    },
    computed: {
        Page() {
            return +this.$route.query.page || 1;
        }
    },
        channelName() {
            var channels = this.$store.state.data;
            if(channels.length > 0) {
                var channel = channels.find(item => item.channelId === this.$route.params.id)  
                return channel.name;
            }
            return "";
        },
    watch: {
        "$route.params.id": {
            immediate: true,
            handler() {
                this.setContent()
            }
        }
    }
}
</script>

<style scoped>
    .type-title{
        font-size: 2em;
        padding-bottom: 10px;
        color: #888;
        border-bottom: 1px solid #ccc;
    }
</style>