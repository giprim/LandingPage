<template>
	<div id="contact page">
		<h2>Contact us page</h2>
		<div class="formDiv">
			<form>
				<div>
					<input type="text" placeholder="Full Name" />
				</div>
				<div>
					<input type="email" placeholder="Email Address" />
				</div>
				<div>
					<textarea
						name="textarea"
						id="textarea"
						placeholder="Message"
					></textarea>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
};
</script>

<style scoped>
.formDiv {
	display: flex;
}
.formDiv form {
	max-width: 700px;
	margin: auto;
}

.formDiv form div {
	padding: 0.5em;
}
.formDiv form div input,
.formDiv form div textarea {
	padding: 0.8rem 0.4rem;
	font-size: 1.2rem;
}
.formDiv form div textarea {
	margin-left: 0;
}
</style>
