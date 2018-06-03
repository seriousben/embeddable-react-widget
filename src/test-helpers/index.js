function checkFunc(dom, selector) {
  if (typeof dom.update === 'function') {
    const el = dom.update().find(selector);
    if (el.exists()) {
      return el;
    }
    return null;
  }
  const els = dom.querySelectorAll(selector);
  if (els.length !== 0) {
    return els;
  }
  return null;
}


export async function waitForSelection(dom, selector) {
  let numSleep = 0;
  for (;;) {
    const el = checkFunc(dom, selector);
    if (el) {
      return el;
    }
    if (numSleep > 2) {
      throw new Error(`could not find ${selector}`);
    }
    await new Promise(resolve => setTimeout(resolve, 250));
    numSleep += 1;
  }
}
