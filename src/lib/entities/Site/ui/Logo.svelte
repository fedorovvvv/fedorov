<script lang="ts">
	import { Logo } from '$lib/shared/ui/Logo';
	import type { ComponentProps } from 'svelte';

	let {
		size
		// eslint-disable-next-line no-undef
	} = $props<Pick<ComponentProps<Logo>, 'size'>>();

	const logoContent = 'Fedorov'.split('').map((el) => {
		if (['e', 'o'].includes(el)) {
			return {
				symbol: el,
				random: true,
				opacity: true
			};
		}
		return el;
	});
</script>

<Logo transitionProperty={['font-size']} {size} class="SiteLogo" content={logoContent} />
