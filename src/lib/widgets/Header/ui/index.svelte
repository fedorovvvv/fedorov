<script lang="ts">
	import { SiteEntity } from '$entities/Site';
	import { onMount } from 'svelte';

	// eslint-disable-next-line no-undef
	let headerRef = $state<HTMLElement>();
	let initialHeaderOffsetTop: number | undefined = undefined;
	// eslint-disable-next-line no-undef
	let height = $state(0);
	// eslint-disable-next-line no-undef
	let sticked = $state(false);

	const handler = {
		scroll() {
			if (typeof initialHeaderOffsetTop === 'undefined') return;
			sticked = window.scrollY >= initialHeaderOffsetTop;
		}
	};

	onMount(() => {
		if (headerRef) {
			console.log(headerRef.offsetTop, window.scrollY);
			initialHeaderOffsetTop = headerRef.offsetTop - window.scrollY;
			console.log(initialHeaderOffsetTop);
		}
	});
</script>

<svelte:window on:scroll={handler.scroll} />

<header
	bind:this={headerRef}
	bind:clientHeight={height}
	style:--height={`${height}px`}
	class:sticked
>
	<SiteEntity.Logo size={sticked ? 'medium' : undefined} />
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: sticky;
		top: 0;
		left: 0;
		&.sticked {
			// position: sticky;
			// top: 0;
			// left: 0;
		}
	}
</style>
