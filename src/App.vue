<template>
	<div id="app">
		<nav id="nav">
			<span class="logo">
				<router-link to="/">groundwork</router-link>
			</span>

			<div class="links">
				<router-link to="/">For teams</router-link>
				<router-link to="/about">For parents</router-link>
				<router-link to="/price">Pricing</router-link>
				<router-link to="/contact">Contact</router-link>
				<router-link class="login" to="/login">Log in</router-link>
				<router-link class="signup" to="/signup">Sign up</router-link>
			</div>
		</nav>
		<transition
			name="trans"
			enter-active-class="animated fadeIn slow"
			leave-active-class="animated fadeOut slow"
		>
			<router-view />
		</transition>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			thanks: 'GI Prim',
		};
	},
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.page {
	position: relative;
	/* top: 0; */
	/* width: auto; */
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 0 10rem;
}

#nav {
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	padding-top: 2em;
}

nav a {
	text-decoration: none;
}

#nav .logo {
	margin: auto 0;
}
.logo a {
	font-size: 2em;
	font-weight: bold;
}

.links {
	display: flex;
	justify-content: space-between;
}

.links a {
	color: gray;
	padding: 0.5rem 1rem;
}

.signup,
.login {
	padding: 0.6em 2em !important;
	border-radius: 20px;
	font-weight: bold;
	transition: 0.3s ease-out;
}

.login {
	margin-right: 15px;
	border: 1px #00d100 solid;
	color: #00d100 !important;
}

.login:hover {
	background: #00d100 !important;
	color: #ffffff !important;
}

.signup {
	background: #00d100;
	color: white !important;
}
.signup:hover {
	background: #ffffff;
	color: #00d100 !important;
	border: 1px #00d100 solid;
}

.links a:hover {
	color: #00d100;
}

#nav a.router-link-exact-active {
	color: #00d100;
}

@media screen and (max-width: 990px) {
	#app {
		padding: 0 1rem;
	}

	nav {
		flex-wrap: wrap;
		flex-direction: column;
		background: #ffffff;
	}

	.logo {
		width: 100%;
	}

	.links {
		display: none;
		flex-direction: column;
		width: 100%;
	}

	.links a {
		padding: 10px;
		width: 100%;
	}
}
</style>
