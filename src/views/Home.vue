<template>
	<div class="home page">
		<HelloWorld msg="Welcome to Your App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
};
</script>
