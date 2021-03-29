<template>
    <div class="footer">
          <router-link to="/index">
            <i class="fa fa-comment-o"></i>
            <label>微信</label>
          </router-link>
          <router-link to="/contact">
            <i class="fa fa-bars"></i>
            <label>通讯录</label>
          </router-link>
          <router-link to="/find">
            <i class="fa fa-home"></i>
            <label>发现</label>
          </router-link>
          <router-link to="/my">
            <i class="fa fa-user"></i>
            <label>我的</label>
          </router-link>
      </div>
</template>
<script>

</script>
<style scoped>
.active {
    color:rgb(72, 233, 72)
}
</style>
