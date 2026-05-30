# Live Link: https://understand-research.vercel.app/


# 📚 Understand Research

A modern web platform designed to make accessing and understanding research papers easy. This aggregator fetches research papers from various platforms, categorizes them, and presents simplified summaries in a clean ,and displays them in a clean, user-friendly interface.

## 🚀 Tech Stack

* **Framework:** Next.js (App Router, Server & Client Components)
* **Language:** TypeScript (`.ts` for logic, `.tsx` for components)
* **Styling:** Standard CSS (CSS Modules & Global variables)

## 📋 Features (Phase 1)
* **Search Functionality:** High-speed querying for academic papers using the OpenAlex API.
* **Responsive Layout:** Clean, mobile-friendly UI with intelligent text truncation for easy scanning.
* **Dynamic Routing:** Dedicated, instant-load Paper Detail pages (`/paper/[id]`).
* **Perceived Performance:** Implemented CSS-based Skeleton UI to prevent layout shifts during network requests.
* **Efficient Data Fetching:** Integrated API-level pagination to handle large datasets seamlessly.

## This project aims to make research papers easy to access and understand by providing:
* Quick summaries for fast reading
* Structured information about purpose and impact
* A user experience inspired by modern content platforms

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

Git Commit Conventions
This project strictly follows the standard commit rules to maintain a clean history:
feat: A new feature (e.g., feat: add dynamic routing for details page)
fix: A bug fix (e.g., fix: correct layout overflow on mobile)
refactor: A code improvement or structural change (e.g., refactor: clean up CSS class names)
style: CSS/UI Change (e.g., style: Card design change)
docs: Documentation (e.g., docs: update documentation)
chore: Small (e.g., chore: update dependencies)

Author
Yash Paresh Shah
Actively learning Data Structures & Algorithms and Software Engineering principles.

