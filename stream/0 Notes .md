# 🌊 Streams in Node.js

## What is a Stream?

A stream is a way to handle data **piece by piece (chunk by chunk)** instead of loading everything into memory at once.

> ⚠️ **Without Stream** — Bad for large files

---

## Types of Streams in Node.js

There are **4 main types**:

| # | Type | Description |
|---|------|-------------|
| 1 | **Readable** | Read data chunk by chunk |
| 2 | **Writable** | Write data chunk by chunk |
| 3 | **Duplex** | Can both read and write |
| 4 | **Transform** | Read, modify, then write |

---

## 🔹 1. Readable Stream

**Example – Read File**

```js
const fs = require("fs");

const readStream = fs.createReadStream("file.txt");

readStream.on("data", chunk => {
  console.log("Chunk:", chunk.toString());
});

readStream.on("end", () => {
  console.log("Finished reading");
});
```

---

## 🔹 2. Writable Stream

Used to **write data**.

```js
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello\n");
writeStream.write("World\n");

writeStream.end();
```

---

## 🔹 3. Duplex Stream

Can **read and write**.

**Examples:**
- TCP sockets
- WebSockets

```js
const { Duplex } = require("stream");

// Sockets in Node are duplex streams
```

---

## 🔹 4. Transform Stream

Special type of **Duplex stream**. It:
- Reads data
- Modifies it
- Writes modified data

**Example use case:** Compression

---

## 🔗 Stream Piping (Very Important)

Instead of manually listening to `data` event, use `.pipe()`.

**Example: Copy File**

```js
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

> ✅ Cleaner and handles **backpressure** automatically.

---

## 5️⃣ Backpressure (Very Important Concept)

### What is Backpressure?

When **data is produced faster than it is consumed**.

**Example:**
- Reading fast from disk
- Writing slow to network

> Node automatically handles backpressure in `.pipe()`.

---

### HighWaterMark

Defines **internal buffer size**.

**Defaults:**
- `64KB` for file streams
- `16KB` for network streams

```js
fs.createReadStream("file.txt", {
  highWaterMark: 1024
});
```

---

## 6️⃣ Object Mode Streams

Normally streams work with:
- `Buffer`
- `String`

But you can enable **object mode**:

```js
const stream = new Transform({
  objectMode: true
});
```

**Used when:**
- Streaming JSON objects
- Processing DB records

---

## 7️⃣ Streams in HTTP (Very Important)

HTTP **request** and **response** are streams.

```js
const http = require("http");

http.createServer((req, res) => {
  req.on("data", chunk => {
    console.log(chunk.toString());
  });

  res.write("Hello");
  res.end();
}).listen(3000);
```

| Object | Stream Type |
|--------|-------------|
| `req` | Readable stream |
| `res` | Writable stream |

---

## 9️⃣ Stream Pipeline (Modern Way)

Node provides a built-in `pipeline` utility:

```js
const fs = require("fs");
const { pipeline } = require("stream");

pipeline(
  fs.createReadStream("input.txt"),
  fs.createWriteStream("output.txt"),
  (err) => {
    if (err) console.error("Pipeline failed", err);
    else console.log("Pipeline success");
  }
);
```

> ✅ **Better error handling** than `.pipe()`.

---

## ✅ Why `pipe()` Is Used

| Reason | Detail |
|--------|--------|
| ✅ **Automatic Data Flow** | No need to manually listen to `data` events |
| ✅ **Handles Backpressure** | When data produced faster than consumed, pipe manages it |
| ✅ **Cleaner & Shorter Code** | Less boilerplate |
| ✅ **Memory Efficient** | Processes chunk by chunk, not all at once |