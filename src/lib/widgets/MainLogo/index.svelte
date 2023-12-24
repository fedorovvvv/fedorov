<script lang="ts">
	import { Logo } from '$lib/shared/ui/Logo';

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

<Logo content={logoContent} />
