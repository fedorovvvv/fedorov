<script lang="ts" context="module">
	// eslint-disable-next-line no-undef
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
		},
		{
			default: undefined;
		}
	>;

	// eslint-disable-next-line no-undef
	let { random = true, opacity } = $props<Props>();

	// eslint-disable-next-line no-undef
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
		if (random) {
			randomizer.start();
		}
	});

	onDestroy(() => {
		randomizer.stop();
	});
</script>

<Font family={fontFamily} class="RandomFontSymbol" data-opacity={opacity ? '' : undefined}>
	<slot />
</Font>

<style lang="scss">
	:global(.RandomFontSymbol) {
		opacity: var(--opacity);
		display: inline-block;
		text-align: center;
		line-height: 100%;
		width: 1em;
	}
	:global(.RandomFontSymbol[data-opacity]) {
		opacity: 0.1;
	}
</style>
