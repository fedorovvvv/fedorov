<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { RandomFont } from '../RandomFont';

	type Props = Omit<ComponentProps<RandomFont>, 'children'>;

	let {
		content
		// eslint-disable-next-line no-undef
	} = $props<Props>();

	// eslint-disable-next-line no-undef
	let weight = $state({
		current: 800,
		max: 800,
		min: 200
	});

	const handler = {
		windowMouseMove(event: MouseEvent) {
			const { clientX, clientY, view } = event;
			if (!view) return;
			const x = Math.abs((view?.innerWidth / 2 - clientX) / view?.innerWidth);
			const y = Math.abs((view?.innerHeight / 2 - clientY) / view?.innerHeight);

			const percentToCenter = 1 - (x + y);

			weight.current = Math.floor(weight.min + (weight.max - weight.min) * percentToCenter);
		}
	};
</script>

<svelte:window onmousemove={handler.windowMouseMove} />

<RandomFont tag="h1" weight={weight.current} class="Logo" textTransform="uppercase" {content} />

<style lang="scss">
	:global(.Logo) {
		--font-size: 120px;
		@media (max-width: 724px) {
			--font-size: 40px;
		}
	}
</style>
