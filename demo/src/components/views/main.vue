<template>
 <div class="main">
     <v-left>left</v-left>
     <v-right>right</v-right>
 </div>
</template>

<script type="text/ecmascript-6">
import vLeft from '../views/left'
import vRight from '../views/right'

export default {
 components: {
     vLeft,
     vRight
 },
 props: {},
 data () {
 return {
 };
 },
 watch: {},
 computed: {},
 methods: {},
 mounted () {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

</style>
