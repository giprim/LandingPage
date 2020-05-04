<template>
	<div class="hello">
		<div>
			<div class="caption">
				<h6>Better team payments</h6>
				<h3>Let players <br />stay players.</h3>
			</div>
			<div>
				<p>
					Imagine paying 100% of your attention to the competition <br />
					on the field without having to worry about team payments
				</p>
				<p class="easy">
					It's easy with Groundwork!
				</p>
			</div>
			<div class="btn"><a href="#">Get started</a> or team more</div>
		</div>

		<div>
			<img v-bind:src="imageSrc" alt="" width="500" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data: () => {
		return {
			imageSrc:
				'https://images.unsplash.com/photo-1588579977624-b77db7cf7ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.hello {
	margin-top: 3em;
	display: flex;
	justify-content: space-between;
}

.caption {
	margin-top: 5em;
	padding-top: 1em;
	padding-bottom: 1em;
}

h6 {
	margin-bottom: 2em;
	color: #00d100;
	font-size: 1.1em;
}

h3 {
	font-size: 4em;
	color: #10663b;
}
.easy {
	margin: 2em 0;
}

p {
	font-size: 1em;
	line-height: 1.8em;
	color: gray;
}

.btn {
	margin-top: 5em;
	color: gray;
}

.btn a {
	text-decoration: none;
	color: white;
	background: #00d100;
	padding: 1em 3em;
	border-radius: 30px;
	font-weight: bold;
	margin-right: 10px;
	transition: 0.4s ease-out;
}

.btn a:hover {
	border: #00d100 1px solid;
	background: white;
	color: #00d100;
}

@media screen and (max-width: 790px) {
	div.hello {
		flex-direction: column-reverse;
	}
}
</style>
