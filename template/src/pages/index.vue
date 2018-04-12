<template>
  <div class="index">
    <fe-header>index</fe-header>
    <divider>翻滚吧</divider>
    <div style='text-align: center;'>
      <fe-countup :end-val="100" :duration="2" :decimals="0" class="demo1"></fe-countup>
    </div>
  </div>
</template>

<script>
import { Header,Divider,Countup} from 'feui';

export default {
  components: {
    [Header.name]: Header,
    [Divider.name]: Divider,
    [Countup.name]: Countup,
  }
};
</script>

<style lang='less'>
body {
  background-color: #f8f8f8;
}
.logo{
  text-align: center;
  img{
    width: 180px;
  }
}
.demo1 {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 6em;
    color: #4a90e2;
}

</style>
