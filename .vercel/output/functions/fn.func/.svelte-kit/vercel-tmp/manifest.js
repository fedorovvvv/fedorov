export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","fonts/monaspace/regular.woff2"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.oM3JfM7l.js","app":"_app/immutable/entry/app.fg9OSdU3.js","imports":["_app/immutable/entry/start.oM3JfM7l.js","_app/immutable/chunks/main-client.lXZgGMl0.js","_app/immutable/chunks/runtime.UeK6UpiG.js","_app/immutable/chunks/singletons.aGs5BYc5.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.fg9OSdU3.js","_app/immutable/chunks/runtime.UeK6UpiG.js","_app/immutable/chunks/disclose-version.59C2tZG8.js","_app/immutable/chunks/main-client.lXZgGMl0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
