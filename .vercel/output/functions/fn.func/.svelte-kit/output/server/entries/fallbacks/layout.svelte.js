import { z as create_anchor, A as slot, y as pop, t as push } from "../../chunks/index2.js";
function Layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}`;
  pop();
}
export {
  Layout as default
};
