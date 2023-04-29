import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.c3893e59.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/components/Card.astro");

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">Astro</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
			<strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-J7PV25F6" })}
		</ul>
	</main>
` })}`;
}, "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/index.astro");

const $$file$1 = "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-OIQXLZG5" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="astro-OIQXLZG5">
    <h1 class="astro-OIQXLZG5">Welcome to <span class="text-gradient astro-OIQXLZG5">Astro</span></h1>
    <p class="instructions astro-OIQXLZG5">
      To get started, open the directory <code class="astro-OIQXLZG5">src/pages</code> in your project.<br class="astro-OIQXLZG5">
      <strong class="astro-OIQXLZG5">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
    This is some page
  </main>
` })}`;
}, "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/some-page/index.astro");

const $$file = "/Users/davorjovanovic/Documents/PeracticeProjects/astro-practice/src/pages/some-page/index.astro";
const $$url = "/some-page";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
