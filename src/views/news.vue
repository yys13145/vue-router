<template>
  <div class="about">
    <h1>This is an news page!</h1>
    <p>News id is {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this);
    }
}
</script>