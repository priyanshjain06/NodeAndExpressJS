# When Is It Okay NOT To Call `next()`?

## Only if:
You send a response inside middleware.

### Example:

```js
app.use((req, res, next) => {
  res.send("Blocked");
});
```

### Here:
* Response is sent
* No need to call `next()`
* Request lifecycle ends

---

## 6️⃣ Important Rule

In Express middleware: You must either:

1. Call `next()`  
OR  
2. Send a response (`res.send`, `res.json`, `res.end`, etc.)

If you do neither → request hangs.

---

# When Is It Okay NOT To Call `next()`?

## Only if:
You send a response inside middleware.

### Example:

```js
app.use((req, res, next) => {
  res.send("Blocked");
});
```

### Here:
* Response is sent
* No need to call `next()`
* Request lifecycle ends

---

## 6️⃣ Important Rule

In Express middleware: You must either:

1. Call `next()`  
OR  
2. Send a response (`res.send`, `res.json`, `res.end`, etc.)

If you do neither → request hangs.

---

# When Is It Okay NOT To Call `next()`?

## Only if:
You send a response inside middleware.

### Example:

```js
app.use((req, res, next) => {
  res.send("Blocked");
});
```

### Here:
* Response is sent
* No need to call `next()`
* Request lifecycle ends

---

## 6️⃣ Important Rule

In Express middleware: You must either:

1. Call `next()`  
OR  
2. Send a response (`res.send`, `res.json`, `res.end`, etc.)

If you do neither → request hangs.

---

# When Is It Okay NOT To Call `next()`?

## Only if:
You send a response inside middleware.

### Example:

```js
app.use((req, res, next) => {
  res.send("Blocked");
});
```

### Here:
* Response is sent
* No need to call `next()`
* Request lifecycle ends

---

## 6️⃣ Important Rule

In Express middleware: You must either:

1. Call `next()`  
OR  
2. Send a response (`res.send`, `res.json`, `res.end`, etc.)

If you do neither → request hangs.

---

# When Is It Okay NOT To Call `next()`?

## Only if:
You send a response inside middleware.

### Example:

```js
app.use((req, res, next) => {
  res.send("Blocked");
});
```

### Here:
* Response is sent
* No need to call `next()`
* Request lifecycle ends

---

## 6️⃣ Important Rule

In Express middleware: You must either:

1. Call `next()`  
OR  
2. Send a response (`res.send`, `res.json`, `res.end`, etc.)

If you do neither → request hangs.