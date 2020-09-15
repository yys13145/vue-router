<template>
  <div class="about">
    <h1>This is an report page!</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this);
    }
}
</script>