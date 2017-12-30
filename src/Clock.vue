<template>
	<span>
		{{ display }}
	</span>
</template>

<script type="text/javascript">

  import moment from 'moment';

  export default {
    data() {
      return {
        time: Date.now()
      }
    },
    computed: {
      display() {
        return moment(this.time).format("HH:mm:ss");
      }
    },
    created() {
      setInterval(() => {
        this.time = Date.now();
      }, 1000);
    }
  }
</script>