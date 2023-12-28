<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { RandomFont } from '../RandomFont';
	import { tweened } from 'svelte/motion';
	import throttle from 'lodash.throttle';

	type Props = Omit<ComponentProps<RandomFont>, 'children'> & {
		size?: 'medium' | 'small';
	};

	let { class: className, content, size, ...restProps } = $props<Props>();

	let randomFontRef = $state<HTMLElement | undefined>();

	const maxWeight = 800;
	const minWeight = 200;
	const weight = tweened(maxWeight, {
		duration: 200
	});

	const updateWeight = throttle((event: MouseEvent) => {
		const { clientX, clientY, view } = event;
		if (!view || !randomFontRef) return;
		const rect = randomFontRef.getBoundingClientRect();

		const center = {
			x: rect.x + rect.width / 2 - clientX,
			y: rect.y + rect.height / 2 - clientY
		};

		const x = Math.abs(center.x / view?.innerWidth);
		const y = Math.abs(center.y / view?.innerHeight);

		const percentToCenter = 1 - (x + y);

		weight.set(minWeight + (maxWeight - minWeight) * percentToCenter);
	}, 100);

	const handler = {
		windowMouseMove(event: MouseEvent) {
			updateWeight(event);
		}
	};
</script>

<svelte:window onmousemove={handler.windowMouseMove} />

<RandomFont
	tag="h1"
	ref={(ref) => (randomFontRef = ref)}
	weight={Math.floor($weight)}
	class={`Logo ${className}`}
	textTransform="uppercase"
	data-size={size}
	{content}
	{...restProps}
/>

<style lang="scss">
	:global(.Logo) {
		--font-size: 120px;
		@media (max-width: 724px) {
			--font-size: 40px;
		}
	}
	:global(.Logo[data-size='medium']) {
		--font-size: 48px;
	}

	:global(.Logo[data-size='small']) {
		--font-size: 32px;
	}
</style>
