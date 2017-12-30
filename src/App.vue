<template>
  <div id="app"> 
  	{{ msg }}
  	<br>
  	Time : <vue-clock></vue-clock>
  </div>
</template>

<script>
	
	import VueClock from './Clock.vue'

	export default {

	  name: 'app',

	  data () { 
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    } 
	  },

	  components: {
	  	VueClock
	  }
	}
</script> 