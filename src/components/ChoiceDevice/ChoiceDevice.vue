<template>
    <div class="main-container">
        <div class="logo-wrapper">
            <img class="phone-icon" src="../../assets/phone_icon.svg" alt="phoneIcon">
        </div>
         <span class="word-des">请使用手机浏览器打开该链接</span>
    </div>
</template>
<script>
export default {
  name: 'choiceDevice'
}
</script>
<style scoped lang='scss'>
.main-container{
    margin-top:2.34rem;
    text-align: center;
    font-size: 0;
    .phone-icon{
        width:.76rem;
        height:1.28rem
    }
    .word-des{
        font-size: 16px;
        color: #434C5F;
        letter-spacing: 0;
    }
}
</style>
