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
			pseudoSymbol?: string;
		},
		{
			default: undefined;
		}
	>;

	let { random = true, opacity, hidden, accent, pseudoSymbol = 'm' } = $props<Props>();

	let fontFamily = $state<ComponentProps<Font>['family']>();
	let clientWidth = $state(0);
	let ref = $state<HTMLElement>();

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
	data-hidden={hidden ? '' : undefined}
	data-opacity={opacity ? '' : undefined}
	data-accent={accent ? '' : undefined}
	data-pseudo={pseudoSymbol}
	style={{
		'--width': clientWidth ? `${clientWidth}px` : undefined
	}}
	bind:ref
>
	<span class="pseudo" bind:clientWidth>{pseudoSymbol}</span>
	<span class="symbol">
		<slot />
	</span>
</Font>

<style lang="scss">
	:global(.RandomFontSymbol) {
		display: inline-block;
		font-family: inherit;
		text-align: center;
		position: relative;
		width: var(--width);
		margin-top: -0.2em;
		transition:
			transform calc(var(--transition-duration) * 2) var(--transition-timing-function),
			width calc(var(--transition-duration) * 2) var(--transition-timing-function),
			opacity calc(var(--transition-duration) * 2) var(--transition-timing-function),
			font-size var(--transition-duration) var(--transition-timing-function);
		&::before,
		.pseudo {
			content: attr(data-pseudo);
			display: inline-block;
			visibility: hidden;
			pointer-events: none;
		}
	}

	.symbol,
	.pseudo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.pseudo {
		font-size: var(--font-size);
		transition: none;
	}

	.symbol {
		font-family: var(--font-family);
		font-size: 0.9em;
	}

	:global(.RandomFontSymbol[data-opacity]) {
		opacity: 0.1;
	}
	:global(.RandomFontSymbol[data-hidden]) {
		width: 0px;
		opacity: 0;
		pointer-events: none;
	}

	:global(.RandomFontSymbol[data-accent]) {
		color: var(--clue-color-accent);
	}
</style>
