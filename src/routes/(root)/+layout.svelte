<script lang="ts">
	import { HeaderWidget } from '$widgets/Header';
	import { MainWidget } from '$widgets/Main';
	import '../../lib/shared/styles/global.scss';
</script>

<svelte:head>
	<title>Fedorov</title>
</svelte:head>

<MainWidget.Component>
	<HeaderWidget.Component slot="header" />
</MainWidget.Component>
