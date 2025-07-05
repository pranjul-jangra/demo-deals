# 🛍️ DemoDeals — E-commerce Website

**DemoDeals** is a modern, responsive ecommerce web application built with **Next.js**, **TypeScript**, **Tailwind** and **ShadCN UI**. It showcases products using the [FakeStore API](https://fakestoreapi.com/) and includes features like product listings, dynamic routing, cart functionality, toast notifications, and more.

---

## 📦 Features

- ✅ Product listing from FakeStore API
- ✅ Dynamic product detail pages
- ✅ Shopping cart with item quantity control
- ✅ Global state management using Context API
- ✅ Toast notifications using [Sonner](https://sonner.emilkowal.ski/)
- ✅ Reusable UI components via [ShadCN UI](https://ui.shadcn.com/)
- ✅ Type-safe code with TypeScript
- ✅ Responsive and mobile-first design

---

## 🧑‍💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: TypeScript
- **UI Components**: ShadCN UI (Radix + Tailwind CSS)
- **Icons**: Lucide
- **Toast Notifications**: Sonner
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Source**: [FakeStore API](https://fakestoreapi.com/)

---

## 📂 Folder Structure

```bash
├── app/ # App router layout & pages
├── components/ # UI and layout components
│ └── ui/ # ShadCN UI components
├── contexts/ # Cart & Auth context providers
├── hooks/ # Custom hooks like useToast
├── public/ # Static files (favicon, etc.)
├── README.md
└── other essential files