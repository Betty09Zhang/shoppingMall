<template>
    <div class="tmpl">
        
        <head-vue goBack="true" :headTitle="'新闻列表'">    
        </head-vue>

        <div class="newInfo">
           <!-- MUI 图文列表 -->
            <ul class="mui-table-view">
                <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
                    <router-link :to="{name:'news.detail',query:{id:news.id} }" @click.native="sumClick(news.id,news.click)">
                        <div class="mui-media-body">
                            <span v-text="news.title"></span>
                            <div class="news-desc">
                                <p>点击数:{{news.click}}</p>
                                <p>发表时间:{{news.add_time | converDate}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul> 
        </div>
   
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){

        var newsList=[];
      this.$ajax.get('/news/newsList').then((response)=>{
        
            this.newsList=response.data.list;
             console.log("list 0"+response.data.list[0]);
       
        }).catch((error)=>{
            console.log("error"+error)
            })
    },
    mounted(){

        },
    methods: {
       sumClick(sid,count){
        console.log('sid '+sid+' '+'count '+count);
            this.$ajax.post('/news/newsDetails/addClick', {'id': sid,'clicks':count})
                .then((res) =>{
                    if(res.data.status=='1'){
                        console.log('click+1 success');
                    }
                })
             this.$ajax.post('/news/newsList/addClick', {'id': sid,'clicks':count})
                .then((res) =>{
                    if(res.data.status=='1'){
                        console.log('click+1 success');
                    }
                })
       }
    }
}

</script>
<style scoped>
.newInfo{
    margin-top: 20px;
}
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>
