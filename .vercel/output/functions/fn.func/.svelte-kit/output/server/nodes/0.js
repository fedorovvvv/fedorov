

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.-8YE-7EJ.js","_app/immutable/chunks/disclose-version.59C2tZG8.js","_app/immutable/chunks/runtime.UeK6UpiG.js"];
export const stylesheets = [];
export const fonts = [];
