<template>
  <div class="about">
    <h1>This is an weather page!</h1>
    <p>Weather city is {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this);
    }
}
</script>