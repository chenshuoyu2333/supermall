<template>
  <div  v-if="Object.keys(commentInfo).length!==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{formatDate(commentInfo.created,"yyyy-MM-dd")}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item, index) in commentInfo.images"
          :key="index"
          :src="item" alt="avatar">
      </div>
    </div>


  </div>
</template>

<script>

export default {
name: "DetailCommentInfo",
  props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
  } ,
  methods:{
    formatDate(date, fmt) {
      if (typeof date == 'string') {
        return date;
      }

      if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";

      if (!date || date == null) return null;
      // 将传入的date准换为时间对象，*1000是为了将秒转成毫秒；
      date = new Date(date *1000);
      var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
      return fmt;
    }
  }



}
</script>

<style scoped>
.comment-info {
  padding: 8px 8px 20px;
  border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-header {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(100, 100, 100, .1);
}
.info-user{
  margin-bottom: 5px;
}
 .info-user img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
   position: relative;
   top: 10px;
}
.info-user span {
  position: relative;
  top: -15px;
  left: 8px;
}
.info-detail  {
  font-size: 14px;
  padding: 4px;

  padding-top: 8px;

  color: var(--color-text);
}
.info-detail .info-other span{
  font-size: 12px;

  color: var(--color-text);
  padding: 4px;
}

.info-imgs {
  display: flex;
}
.info-imgs img {
  width: 25%;
  padding-right: 6px;
}
</style>
