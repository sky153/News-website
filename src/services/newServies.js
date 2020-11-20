//远程获取新闻和新闻类别的数据
import axios from "axios"
import {APPCODE} from "./config"
//获取所有的新闻类别
export async function getNewsChannels() {
    var resq = await axios.get("http://ali-news.showapi.com/channelList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        }
    })
    return resq.data.showapi_res_body.channelList;
}
/**
 * 按照频道，分页获取新闻
 * @param {*} channelId 频道id
 * @param {*} page  新闻页码
 * @param {*} maxResult 每页多少条数据
 */
export async function getNews(channelId, page = 1, maxResult = 10) {
    var result = await axios.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        },
        params: {
            channelId,
            page,
            maxResult,
            needAllList: false,
            needContent: 1
        }
    })
    return result.data.showapi_res_body.pagebean;
}
