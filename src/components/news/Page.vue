<template>
  <div class="page">
      <a href="" class="page-item" :class="{disabled: page === 1}" @click.prevent="handelChange(1)">首页</a>
      <a href="" class="page-item" :class="{disabled: page === 1}" @click.prevent="handelChange(page - 1)">上一页</a>
      <a href="" class="page-item" :class="{active: item == page}" v-for="item in numbers" :key="item" @click.prevent="handelChange(item)">{{item}}</a>
      <a href="" class="page-item" :class="{disabled: page === pageNumber}" @click.prevent="handelChange(page + 1)">下一页</a>
      <a href="" class="page-item" :class="{disabled: page === pageNumber}" @click.prevent="handelChange(pageNumber)">尾页</a>
      <span>
          <i>{{page}}</i>
          /
          <i>{{pageNumber}}</i>
      </span>
  </div>
</template>

<script>
export default {
    props: {
        //当前页码
        page: {
            default: 1,
            type: Number
        },
        total: {
            //数据总量
            default: 0,
            type: Number
        },
        limit: {
            //每页显示多少条数据
            default: 10,
            type: Number
        },
        panleNumber: {
            //最多显示多少数组页码
            default: 10,
            type: Number
        }
    },
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit)
        },
        numbers() {
            var nums = [];
            for(var i = this.minNumber; i <= this.maxNumber; i++) {
                nums.push(i)
            }
            return nums;
        },
        minNumber() {
            //计算当前最小的页码数字
            var n = this.page - this.panleNumber / 2;
            if(n < 1) {
                n = 1;
            }
            return n;
        },
        maxNumber() {
            var n = this.minNumber + this.panleNumber - 1;
            if(n > this.pageNumber) {
                n = this.pageNumber;
            }
            return n;
        }
    },
    methods: {
        handelChange(newpage) {
            if(newpage < 1) {
                newpage = 1;
            }else if(newpage > this.pageNumber) {
                newpage = this.pageNumber;
            }
            if(newpage === this.page) {
                return
            }
            this.$emit("pageChange",newpage)
        }
    }
}
</script>

<style scoped>
    .page{
        text-align: center;
        margin: 20px 0;
    }
    .page .page-item{
        display: inline-block;
        padding: 5px 7px;
        border: 1px solid #ccc;
        margin: 8px;
        cursor: pointer;
        color: rgb(96,96,224);
    }
    .page .page-item.disabled{
        color: #ccc;
        cursor: not-allowed;
    }
    .page .page-item.active{
        color: #f40;
        border: none;
        cursor: auto;
    }
</style>