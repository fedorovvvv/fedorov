<script lang="ts">
	import { Logo } from '$lib/shared/ui/Logo';
	import type { ComponentProps } from 'svelte';

	let { size, cropped } = $props<Pick<ComponentProps<Logo>, 'size'> & { cropped?: boolean }>();

	const contentText = $state('Fedorov*');
	const logoContent = $derived(
		contentText.split('').map((el) => {
			if (['e', 'o'].includes(el)) {
				return {
					symbol: el,
					random: true,
					opacity: true,
					hidden: cropped
				};
			}
			if (['*'].includes(el)) {
				return {
					symbol: el,
					random: false,
					accent: true,
					hidden: !cropped
				};
			}
			return el;
		})
	);
</script>

<Logo transitionProperty={['font-size']} {size} class="SiteLogo" content={logoContent} />
