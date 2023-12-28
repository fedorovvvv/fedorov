<script lang="ts" context="module">
	let fontsInitialized = $state(false);
</script>

<script lang="ts">
	import { Font } from '$lib/shared/ui/Font';
	import { onMount, type ComponentProps, type PropsWithChildren, onDestroy } from 'svelte';
	import { getRandomFontFamily } from './lib';
	import { GOOGLE_FONTS_API_PATH } from './config';
	import { browser } from '$app/environment';

	type Props = PropsWithChildren<
		{
			random?: boolean;
			opacity?: boolean;
			hidden?: boolean;
			accent?: boolean;
		},
		{
			default: undefined;
		}
	>;

	let { random = true, opacity, hidden, accent } = $props<Props>();

	let fontFamily = $state<ComponentProps<Font>['family']>();

	const randomizer: {
		intervalInstance?: ReturnType<typeof setInterval>;
		timeout: number;
		handler: () => void;
		start: () => void;
		stop: () => void;
	} = {
		intervalInstance: undefined,
		timeout: 100,
		handler() {
			fontFamily = getRandomFontFamily();
		},
		start() {
			this.intervalInstance = setInterval(this.handler, this.timeout);
		},
		stop() {
			clearInterval(this.intervalInstance);
		}
	};

	onMount(() => {
		if (!fontsInitialized && browser) {
			const style = document.createElement('style');
			style.innerHTML = `@import url('${GOOGLE_FONTS_API_PATH}');`;
			document.head.append(style);

			fontsInitialized = true;
		}
	});

	onDestroy(() => {
		randomizer.stop();
	});

	$effect(() => {
		if (hidden) {
			randomizer.stop();
		} else if (random) {
			randomizer.start();
		} else if (!random) {
			randomizer.stop();
		}
	});
</script>

<Font
	family={fontFamily}
	class="RandomFontSymbol"
	data-random={random ? '' : undefined}
	data-hidden={hidden ? '' : undefined}
	data-opacity={opacity ? '' : undefined}
	data-accent={accent ? '' : undefined}
>
	<slot />
</Font>

<style lang="scss">
	:global(.RandomFontSymbol) {
		display: inline-block;
		text-align: center;
		line-height: 100%;
		width: 0.8em;
		transition:
			transform calc(var(--transition-duration) * 2) var(--transition-timing-function),
			width calc(var(--transition-duration) * 2) var(--transition-timing-function),
			opacity calc(var(--transition-duration) * 2) var(--transition-timing-function),
			line-height var(--transition-duration) var(--transition-timing-function),
			font-size var(--transition-duration) var(--transition-timing-function);
	}
	:global(.RandomFontSymbol[data-random]) {
		width: 1em;
	}
	:global(.RandomFontSymbol[data-opacity]) {
		opacity: 0.1;
	}
	:global(.RandomFontSymbol[data-hidden]) {
		width: 0;
		opacity: 0;
		transform: scaleX(0);
		pointer-events: none;
	}

	:global(.RandomFontSymbol[data-accent]) {
		color: var(--clue-color-accent);
	}
</style>
