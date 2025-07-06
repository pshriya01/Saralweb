# Clean the Product Codes

A Node.js module that processes a list of product codes to identify valid entries, normalize them, and summarize the results.

how to clone repo

git clone git@github.com:pshriya01/Saralweb.git

how to run project

node index.js

## ✅ Problem Statement

Each product code should follow this format:
- Exactly **7 characters**
- The **first 3 characters** must be **letters (A-Z)** (case-insensitive)
- The **last 4 characters** must be **digits (0–9)**

### 🔍 Example of Valid Codes
- `ABC1234`
- `xyz0001` (will be normalized to `XYZ0001`)

## 📥 Input

An array of product codes (strings).

Example:
```js
["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"]
