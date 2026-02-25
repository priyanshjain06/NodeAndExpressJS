# Express.js `next()` Usage Guide

## Where to Use `next()`

| Usage | Example |
|-------|---------|
| ✅ Middleware functions | `const fn = (req, res, next) => { next(); }` |
| ✅ Multiple middlewares | `app.use(logger, authorize);` |
| ✅ Error handling | `next(error);` |
| ❌ Do NOT pass manually | `app.use(logger(req, res, next));` |

## Where to Call `next()`

### 1️⃣ Middleware Functions

If a middleware should pass control to the next function, use `next()`.

Example:
```javascript
const authorize = (req, res, next) => {
  if (req.query.user === 'admin') {
    next();  // ✅ Move to the next function
  } else {
    res.status(401).send("Unauthorized");
  }
};
```

### 2️⃣ Multiple Middleware in a Route

If multiple middleware are used, each must call `next()` to continue.

```javascript
app.get('/dashboard', logger, authorize, (req, res) => {
  res.send('Welcome to the Dashboard');
});
```

Execution flow:
1. `logger` runs first → calls `next()`
2. `authorize` runs next → calls `next()`
3. The final route handler runs (`res.send(...)`)

### 3️⃣ Custom Error Handling Middleware

Use `next(error)` to pass errors to an error-handling middleware.

```javascript
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});
```

## 🔹 Summary

| Middleware Type | Runs for Every Route? | Example Usage |
|-----------------|----------------------|---------------|
| `app.use(middleware)` | ✅ Yes | `app.use(logger)` |
| `app.use('/path', middleware)` | 🚫 No, only for matching paths | `app.use('/api', logger)` |
| `app.get('/route', middleware)` | 🚫 No, only for that route | `app.get('/about', logger, authorize, handler)` |

## Multiple Handlers for Same Path

### Example: Multiple handlers for `/home`

#### 🔹 Behavior

| Scenario | Outcome |
|----------|---------|
| Without `next()` | Only the first handler runs, others are ignored |
| With `next()` | The next matching handler is executed |
| Multiple Handlers in One Route | Handlers run in order, `next()` is automatically handled |