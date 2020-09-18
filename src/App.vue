<template>
  <div id="app">
    
    <div class="container" style="padding-top: 50px;">

      <div class="row">
        <div class="col-12">
          <Navigation/>
        </div>
      </div>

      <router-view />

    </div>
  

  </div>
</template>

<script>
import Navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>

h1, h2, h3, h4, h5, h6{
  font-family: 'Baloo Tammudu 2', cursive;
}

p{
  font-family: 'Lato', sans-serif;
}

#app {
	background: linear-gradient(-45deg, #ee7752, #ce4b7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  min-height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
