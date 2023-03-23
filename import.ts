


/// import

import got from "npm:got";
import { load } from "https://deno.land/std/dotenv/mod.ts";

/// util

const { ARENA_ACCESS_TOKEN, ARENA_CHANNEL } = await load();



/// program

try {
  const pinboardExport = JSON.parse(await Deno.readTextFile("./pinboard.json"));
  const pinboardExportSize = pinboardExport.length;
  let currentBookmark = 0;

  console.log(`\n** Are.na Importer\n\n${pinboardExportSize} Pinboard bookmarks…`);

  for (const bookmark of pinboardExport) {
    await got.post(`http://api.are.na/v2/channels/${ARENA_CHANNEL}/blocks`, {
      headers: {
        Authorization: `Bearer ${ARENA_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      json: {
        content: `${bookmark?.description}\n\n${bookmark?.tags}`,
        source: bookmark?.href
      }
    });

    currentBookmark++;
    console.log(`[${currentBookmark}/${pinboardExportSize}] ** ${bookmark.href}`);
    /// give the api a break…
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  if (currentBookmark === pinboardExportSize)
    console.log(`\n** Are.na Importer [COMPLETE]`);
} catch(error) {
  console.error("\n** Are.na Importer failure…");
  console.error(error.stack);
}
