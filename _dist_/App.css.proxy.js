// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1wncah1.svelte-1wncah1{text-align:center}.App.svelte-1wncah1 code.svelte-1wncah1{background:#0002;padding:4px 8px;border-radius:4px}.App.svelte-1wncah1 p.svelte-1wncah1{margin:0.4rem}.App-header.svelte-1wncah1.svelte-1wncah1{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-link.svelte-1wncah1.svelte-1wncah1{color:#ff3e00}.App-logo.svelte-1wncah1.svelte-1wncah1{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-1wncah1-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-1wncah1-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}