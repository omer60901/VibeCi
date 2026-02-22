# Jest + Puppeteer + GitHub Actions CI

Automated testing project using Jest (unit tests) and Puppeteer (E2E browser tests), with full CI/CD via GitHub Actions.

---

## 📁 Project Structure

```
project/
├── .github/
│   └── workflows/
│       └── ci.yml          ← GitHub Actions CI pipeline
├── src/
│   └── utils.js            ← Source code to test
├── tests/
│   ├── unit/
│   │   └── utils.test.js   ← Jest unit tests
│   └── e2e/
│       └── browser.test.js ← Puppeteer E2E tests
├── jest-puppeteer.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run all tests
```bash
npm test
```

### 3. Run only unit tests
```bash
npm run test:unit
```

### 4. Run only E2E tests
```bash
npm run test:e2e
```

---

## 📤 Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Jest + Puppeteer + GitHub Actions CI"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## ⚙️ GitHub Actions CI Pipeline

The CI pipeline (`.github/workflows/ci.yml`) runs automatically on every **push** or **pull request** to `main`/`master`.

### Pipeline Steps:

| Job | Description |
|-----|-------------|
| ✅ **Unit Tests** | Runs Jest unit tests on Node 18 & 20 |
| 🌐 **E2E Tests** | Runs Puppeteer browser tests (after unit tests pass) |
| 📋 **Summary** | Reports overall pass/fail status |

### What triggers CI?
- Push to `main`, `master`, or `develop`
- Pull Request targeting `main` or `master`

---

## 🧪 Tests Overview

### Unit Tests (`tests/unit/utils.test.js`)
Tests for math and string utility functions:
- `add()`, `subtract()`, `multiply()`, `divide()`
- `isPalindrome()`, `capitalize()`

### E2E Tests (`tests/e2e/browser.test.js`)
Browser automation tests using Puppeteer:
- Page navigation
- DOM element verification
- Viewport configuration
- JavaScript evaluation in browser context
- Screenshot capture
