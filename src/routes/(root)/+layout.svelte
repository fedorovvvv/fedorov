<script lang="ts">
	import { HeaderWidget } from '$widgets/Header';
	import { MainWidget } from '$widgets/Main';
	import { onMount } from 'svelte';
	import '../../lib/shared/styles/global.scss';
	import '@cluue/styles';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>Fedorov</title>
</svelte:head>

<MainWidget.Component>
	<HeaderWidget.Component slot="header" />
</MainWidget.Component>
