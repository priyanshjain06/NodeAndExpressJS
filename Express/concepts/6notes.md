# Express.js Request Handling & Array Methods Guide

## Key Differences: Route Parameters vs Query Strings

| Feature | req.params (Route Parameters) | req.query (Query String) |
|---------|------------------------------|--------------------------|
| Usage | Required for the route | Optional for filtering/sorting |
| Format | `/api/products/:id` → `/api/products/5` | `/api/products?search=phone&limit=10` |
| Accessed with | `req.params` | `req.query` |
| Data Type | Path variable (typically id) | Key-value pairs |
| Common Use Cases | Get a specific resource (id) | Filters, pagination, search |

## 📌 Difference Between `.filter()` and `.map()`

| Method | Purpose | Returns | Parameters |
|--------|---------|---------|------------|
| `.filter()` | Removes elements that don't match the condition | A new array with only the matching elements | 1st: element, 2nd: index |
| `.map()` | Transforms each element | A new array of the same length | 1st: element, 2nd: index |

### Example Usage

```javascript
// Filter example
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num, index) => {
  console.log(`Element ${num} at index ${index}`);
  return num % 2 === 0;
});
// evenNumbers: [2, 4]

// Map example
const doubled = numbers.map((num, index) => {
  console.log(`Element ${num} at index ${index}`);
  return num * 2;
});
// doubled: [2, 4, 6, 8, 10]
```