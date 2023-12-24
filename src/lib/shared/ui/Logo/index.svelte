<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { RandomFont } from '../RandomFont';
	import { tweened } from 'svelte/motion';

	type Props = Omit<ComponentProps<RandomFont>, 'children'>;

	let {
		content
		// eslint-disable-next-line no-undef
	} = $props<Props>();

	const maxWeight = 800;
	const minWeight = 200;
	const weight = tweened(maxWeight, {
		duration: 200
	});

	const handler = {
		windowMouseMove(event: MouseEvent) {
			const { clientX, clientY, view } = event;
			if (!view) return;
			const x = Math.abs((view?.innerWidth / 2 - clientX) / view?.innerWidth);
			const y = Math.abs((view?.innerHeight / 2 - clientY) / view?.innerHeight);

			const percentToCenter = 1 - (x + y);

			weight.set(minWeight + (maxWeight - minWeight) * percentToCenter);
		}
	};
</script>

<svelte:window onmousemove={handler.windowMouseMove} />

<RandomFont
	tag="h1"
	weight={Math.floor($weight)}
	class="Logo"
	textTransform="uppercase"
	{content}
/>

<style lang="scss">
	:global(.Logo) {
		--font-size: 120px;
		@media (max-width: 724px) {
			--font-size: 40px;
		}
	}
</style>
