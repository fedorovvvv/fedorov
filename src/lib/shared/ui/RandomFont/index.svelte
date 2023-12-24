<script lang="ts">
	import type { ComponentProps, PropsWithChildren } from 'svelte';
	import { Font } from '../Font';
	import Symbol from './Symbol.svelte';

	interface IContentSymbolOptions {
		symbol: string;
		random?: boolean;
		opacity?: boolean;
	}

	type ContentSymbol = IContentSymbolOptions | string;

	type Props = PropsWithChildren<
		{
			class?: string;
			content: Array<ContentSymbol>;
		} & Omit<ComponentProps<Font>, 'children'>,
		{
			default: undefined;
		}
	>;

	let {
		content,
		class: className = '',
		...restProps
		// eslint-disable-next-line no-undef
	} = $props<Props>();
</script>

<Font {...restProps} class={`RandomFont ${className}`}>
	{#each content as item}
		{#if typeof item === 'string'}
			{item}
		{:else}
			<Symbol {...item}>{item.symbol}</Symbol>
		{/if}
	{/each}
</Font>

<style lang="scss">
	:global(.RandomFont) {
		display: inline-flex;
	}
</style>
