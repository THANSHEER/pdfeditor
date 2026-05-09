# 🛠️ PDF Toolkit - High-Performance, Privacy-First PDF Editor

![PDF Toolkit Banner](resources/banner.png)

## 🚀 Overview

**PDF Toolkit** is a comprehensive, client-side web application designed for fast and secure PDF manipulation. Built with **Angular 21** and **WebAssembly**, it provides a suite of professional tools to edit, convert, and manage PDF documents directly in your browser.

### 🛡️ Privacy First
Your privacy is our priority. Unlike traditional online PDF editors, PDF Toolkit processes all files **locally on your device**. Documents are never uploaded to any server, ensuring that your sensitive data remains entirely under your control.

---

## ✨ Key Features

### 📄 Document Manipulation
- **Merge PDF**: Combine multiple documents into a single, cohesive file.
- **Split PDF**: Separate a PDF into multiple files by page ranges or individual pages.
- **Organize & Reorder**: A visual workspace to drag-and-drop pages into your preferred order.
- **Rotate & Remove**: Correct the orientation of pages or delete unwanted content with ease.

### 🔄 Powerful Conversions
- **Image to PDF**: Transform JPG, PNG, and other images into high-quality PDF documents.
- **PDF to Image**: High-fidelity extraction of PDF pages as image files.
- **HTML to PDF**: Convert web content and HTML snippets directly into PDF format.

### 🔒 Security & Protection
- **Protect PDF**: Secure your files with robust password encryption.
- **Unlock PDF**: Remove passwords and restrictions from protected documents.

---

## 🛠️ Technology Stack

- **Framework**: [Angular 21](https://angular.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Core**: [pdf-lib](https://pdf-lib.js.org/), [pdf.js](https://mozilla.github.io/pdf.js/)
- **Advanced Processing**: [qpdf-wasm](https://github.com/j-f1/qpdf-wasm) (WebAssembly)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pdfeditor.git
   cd pdfeditor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the local development server:
```bash
npm run start
```
The app will be available at `http://localhost:4200/`.

### Building & Deployment
Build the production-ready bundle:
```bash
npm run build
```

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See the [LICENSE](LICENSE) file for details.

---
*Created with ❤️ for a more secure web.*


