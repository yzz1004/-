<template>
 <div class="right">
      <h2 class="tit">{{$route.name}}</h2>
      <router-view></router-view>        
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 components: {},
 props: {},
 data () {
 return {
 };
 },
 watch: {},
 computed: {},
 methods: {
   
 },
 mounted () {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
.right 
    background-color #e5e9f2
    padding 20px
    flex 1
    .tit{
        font-size 25px
        padding-bottom 30px
    }

</style>
