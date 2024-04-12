<img alt="Dropzone.js" src="https://raw.githubusercontent.com/dropzone/dropzone/assets/github-logo.svg" />

[![Validate](https://github.com/NicolasCARPi/dropzone/actions/workflows/validating.yml/badge.svg)](https://github.com/NicolasCARPi/dropzone/actions/workflows/validating.yml)
[![CodeQL](https://github.com/NicolasCARPi/dropzone/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/NicolasCARPi/dropzone/actions/workflows/codeql-analysis.yml)

# Fork

This fork exists because upstream isn't maintained anymore. Its goal is to maintain this library in a good state, with mainly bugfixes and possibly minor improvements.

# Description

Dropzone is a JavaScript library that turns any HTML element into a dropzone.
This means that a user can drag and drop a file onto it, and Dropzone will
display file previews and upload progress, and handle the upload for you via
XHR.

It is fully configurable, can be styled according to your needs and is trusted by
thousands.

<div align="center">
  <img width="674" alt="Dropzone Screenshot" src="https://user-images.githubusercontent.com/133277/138495095-b026cc5c-9458-4e0b-8066-d8a9d0f7e72a.png">
</div>

## Quickstart

Install:

```bash
$ npm install --save @deltablot/dropzone
# or with yarn:
$ yarn add @deltablot/dropzone
```

Use as **ES6 module** (recommended):

```js
import { Dropzone } from "dropzone";
const dropzone = new Dropzone("div#myId", { url: "/file/post" });
```

or use as **CommonJS module**:

```js
const { Dropzone } = require("dropzone");
const dropzone = new Dropzone("div#myId", { url: "/file/post" });
```

[👉 Checkout our example implementations for different
bundlers](https://github.com/dropzone/dropzone-examples)

## Not using a package manager or bundler?

Use the standalone files like this:

```html
<script src="https://unpkg.com/@deltablot/dropzone@7/dist/dropzone.min.js"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/@deltablot/dropzone@7/dist/dropzone.min.css"
  type="text/css"
/>

<div class="my-dropzone"></div>

<script>
  // Dropzone has been added as a global variable.
  const dropzone = new Dropzone("div.my-dropzone", { url: "/file/post" });
</script>
```

---

- [📚 Full documentation](https://docs.dropzone.dev)
- [⚙️ `src/options.js`](https://github.com/NicolasCARPi/dropzone/blob/main/src/options.js)
  for all available options

---

## Community

If you need support please open an [issue](https://github.com/NicolasCARPi/dropzone/issues).

If you have a feature request or want to discuss something, please use the
[issues](https://github.com/NicolasCARPi/dropzone/issues) as well.

## Main features ✅

- Beautiful by default
- Image thumbnail previews. Simply register the callback `thumbnail(file, data)`
  and display the image wherever you like
- High-DPI screen support
- Multiple files and synchronous uploads
- Progress updates
- Support for large files
  - Chunked uploads (upload large files in smaller chunks)
- Support for Amazon S3 Multipart upload
- Complete theming. The look and feel of Dropzone is just the default theme. You
  can define everything yourself by overwriting the default event listeners.
- Browser image resizing (resize the images before you upload them to your
  server)
- Well tested

# MIT License

See the [LICENSE](./LICENSE) file
