import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "../web_modules/svelte/internal.js";

import { onMount } from "../web_modules/svelte.js";

function create_fragment(ctx) {
	let div;
	let header;
	let img;
	let img_src_value;
	let t0;
	let p0;
	let t4;
	let p1;
	let t5;
	let code1;
	let t6;
	let t7;
	let t8;
	let p2;

	return {
		c() {
			div = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			p0 = element("p");
			p0.innerHTML = `Edit <code class="svelte-1wncah1">src/App.svelte</code> and save to reload.`;
			t4 = space();
			p1 = element("p");
			t5 = text("Page has been open for ");
			code1 = element("code");
			t6 = text(/*count*/ ctx[0]);
			t7 = text(" seconds.");
			t8 = space();
			p2 = element("p");
			p2.innerHTML = `<a class="App-link svelte-1wncah1" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Learn Svelte</a>`;
			if (img.src !== (img_src_value = "./logo.svg")) attr(img, "src", img_src_value);
			attr(img, "class", "App-logo svelte-1wncah1");
			attr(img, "alt", "logo");
			attr(p0, "class", "svelte-1wncah1");
			attr(code1, "class", "svelte-1wncah1");
			attr(p1, "class", "svelte-1wncah1");
			attr(p2, "class", "svelte-1wncah1");
			attr(header, "class", "App-header svelte-1wncah1");
			attr(div, "class", "App svelte-1wncah1");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(header, img);
			append(header, t0);
			append(header, p0);
			append(header, t4);
			append(header, p1);
			append(p1, t5);
			append(p1, code1);
			append(code1, t6);
			append(p1, t7);
			append(header, t8);
			append(header, p2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*count*/ 1) set_data(t6, /*count*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let count = 0;

	onMount(() => {
		const interval = setInterval(() => $$invalidate(0, count++, count), 1000);

		return () => {
			clearInterval(interval);
		};
	});

	return [count];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;