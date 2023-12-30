export type CSSProperties = Partial<CSSStyleDeclaration & Record<`--${string}`, string>>;

export default (css?: CSSProperties): string => {
	if (!css) return '';
	return Object.entries(css)
		.filter(([, value]) => Boolean(value))
		.map(([k, v]) => `${k}:${v}`)
		.join(';');
};
