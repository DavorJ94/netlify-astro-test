import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.c3893e59.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.50837021.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/some-page/index.astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/index.3b46af41.css","/_astro/index.7ea26b60.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/index.3b46af41.css","/_astro/index.935c2065.css"],"scripts":[],"routeData":{"route":"/some-page","type":"page","pattern":"^\\/some-page\\/?$","segments":[[{"content":"some-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/some-page/index.astro","pathname":"/some-page","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/some-page/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.935c2065.css","/_astro/index.7ea26b60.css","/_astro/index.3b46af41.css","/favicon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {"builders":true};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
