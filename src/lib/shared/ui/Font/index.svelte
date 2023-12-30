<script lang="ts">
	import cssToStyle, { type CSSProperties } from '$shared/utils/cssToStyle';

	interface IProps extends Partial<Record<`data-${string}`, unknown>> {
		class?: string;
		family?: string;
		tag?: string;
		size?: string;
		weight?: number;
		width?: number;
		slant?: number;
		textTransform?: string;
		transitionProperty?: string[];
		children: unknown;
		ref?: HTMLElement;
		refSet?: (ref: HTMLElement) => void;
		style?: CSSProperties;
		clientWidth?: number;
	}

	let {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		children,
		tag = 'span',
		family,
		size,
		weight,
		width,
		slant,
		textTransform,
		transitionProperty,
		class: className = '',
		ref,
		refSet,
		style,
		clientWidth,
		...restProps
	} = $props<IProps>();

	$effect(() => ref && refSet?.(ref));
</script>

<svelte:element
	this={tag}
	bind:this={ref}
	bind:clientWidth
	style:--font-family={family ? `"${family}"` : undefined}
	style:--font-size={size}
	style:--font-weight={weight}
	style:--font-width={width}
	style:--font-slant={slant}
	style:--text-transform={textTransform}
	style:--transition-property={transitionProperty?.join(',')}
	class={`${className} Font`}
	style={cssToStyle?.(style)}
	{...restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	:global(.Font) {
		font-family: var(--font-family, inherit);
		font-size: var(--font-size, 14px);
		font-variation-settings:
			'wght' var(--font-weight, 400),
			'wdth' var(--font-width, 100),
			'slnt' var(--font-slant, 0);
		text-transform: var(--text-transform, none);
		transition: var(--transition);
		transition-property: var(--transition-property, none);
	}
</style>
