<template>
    <div class="tmpl">
         <head-vue goBack="true" :headTitle="'新闻资讯'">    
        </head-vue>
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsDetail.add_time | converDate}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsDetail:{}, //就是为了象征性的表示其数据类型
        }
    },created(){
        var id=this.$route.query.id;
        console.log("id"+id);
        this.$ajax.get('/news/newsDetails/'+id).then((response)=>{

            this.newsDetail=response.data.list[0];
            console.log(response.data.list);
        }).catch((error)=>{
            console.log(error);
        })
    }
}

</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
