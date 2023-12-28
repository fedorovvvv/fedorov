<script lang="ts">
	import { browser } from '$app/environment';
	import { SiteEntity } from '$entities/Site';

	let headerRef = $state<HTMLElement>();
	let initialHeaderHeight: number | undefined = undefined;

	let height = $state(0);

	let sticked = $state(false);

	const updateSticked = () => {
		if (browser) {
			if (typeof initialHeaderHeight === 'undefined') return;
			sticked = window.scrollY >= (window.innerHeight - initialHeaderHeight) / 2;
		}
	};

	const handler = {
		scroll() {
			updateSticked();
		}
	};

	$effect(() => {
		if (!headerRef) return;
		initialHeaderHeight = headerRef.clientHeight;
		updateSticked();
	});
</script>

<svelte:window on:scroll={handler.scroll} />

<header
	bind:this={headerRef}
	bind:clientHeight={height}
	style:--height={`${height}px`}
	class:sticked
>
	<SiteEntity.Logo cropped={sticked} size={sticked ? 'small' : undefined} />
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
		transition: var(--transition);
		transition-property: padding, background;
		&.sticked {
			padding: 12px 20px;
			// align-self: start;
		}
	}
</style>
