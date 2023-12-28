<script lang="ts">
</script>

<div class="wrapper">
	<div class="spacer"></div>
	<slot name="header" />
	<main style="height: 200vh">
		<slot />
	</main>
</div>

<style lang="scss">
	.wrapper {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 0px 1fr;
		align-items: center;
		grid-template-areas:
			'spacer header'
			'main main';
	}

	.spacer {
		height: 100vh;
		width: 0px;
	}
	main {
		grid-area: main;
	}
</style>
