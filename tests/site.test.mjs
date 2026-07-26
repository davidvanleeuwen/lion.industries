import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);

async function readPage(path) {
  return readFile(new URL(path, root), "utf8");
}

test("exports the complete public site", async () => {
  const [home, support, privacy] = await Promise.all([
    readPage("index.html"),
    readPage("support/index.html"),
    readPage("privacy/index.html"),
  ]);

  assert.match(home, /Small software/);
  assert.match(home, /Built with care/);
  assert.match(home, /Something useful is taking shape/);
  assert.match(home, /href="\/support\/"/);
  assert.match(home, /href="\/privacy\/"/);
  assert.match(home, /og\.png/);

  assert.match(support, /Need a hand/);
  assert.match(support, /davidvanleeuwen@pm\.me/);

  assert.match(privacy, /Collect less/);
  assert.match(privacy, /does not use analytics/);
  assert.match(privacy, /first Lion Industries app is still in development/);

  for (const html of [home, support, privacy]) {
    assert.doesNotMatch(html, /Starter Project|codex-preview|taking shape automatically/i);
  }
});
