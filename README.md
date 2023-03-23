# Pinboard → Are.na

> Get your Pinboard bookmarks into Are.na



## First

- [Are.na](https://www.are.na) account (upgrade to premium)
- [Deno](https://deno.land/manual@v1.31.3/getting_started/installation)
- JSON export from [Pinboard](https://pinboard.in/export)

## Then

- [Create an Are.na application](https://dev.are.na/oauth/applications/new):
  - Set the name as "Import Pinboard," or whatever you want
  - For the Redirect URL/Webiste, set it to your personal website or anywhere. Doesn't matter, you're the only one using this.
  - Description? Put anything.
  - Make sure your "Pinboard" channel is set to Private.
- Authorize the application so you can start using it, and peep that sweet **Personal Access Token**.
- Go to your new Are.na channel and copy the text after your username (should look like `pinboard-ss89ud9uvds`). That's your channel slug.
- Rename `.env.sample` to `.env`:
  - Add your access token and channel slug info
- Place your Pinboard JSON export in the same folder this README exists and rename it to `pinboard.json`. Or, update `import.ts` to whatever your export's name is.

## Finally

```sh
deno run --allow-env --allow-net --allow-read import.ts
```

This…is gonna take awhile (especially if you've been an an active Pinboard customer). Make sure your computer doesn't fall asleep.
