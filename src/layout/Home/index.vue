<template>
  <div class="home">
    <el-container>

      <el-aside width="200px" class="home-aside">Aside</el-aside>
      <el-container>
        <el-header class="home-header">Header</el-header>
        <el-main class="home-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home{
  .home-aside{
      background: teal;
      height: 100vh;
  }
    .home-header{
      background-color: skyblue;
    }
    .home-main{
      background-color: pink;
    }
}
</style>
