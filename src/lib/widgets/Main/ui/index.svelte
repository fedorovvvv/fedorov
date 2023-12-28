<script lang="ts">
</script>

<div>
	<slot name="header" />
	<main style="height: 200vh">
		<slot />
	</main>
</div>

<style lang="scss">
	div {
		min-height: 100vh;
		& > :global(header) {
			margin-top: calc(50vh - var(--height) / 2);
			margin-bottom: calc(50vh - var(--height) / 2);
		}
	}
	main {
		background: green;
	}
</style>
