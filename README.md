# ⚡ ZapNote

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-000000?style=for-the-badge&logo=radix-ui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

A lightweight, modern **note-taking app** built with **React + Vite + TypeScript**, styled using **Tailwind CSS** and **ShadCN UI**, and powered by **Firebase Firestore** for real-time database syncing.  

---

## 🧰 Tech Stack
- **React + Vite (TypeScript)** – Fast, modern frontend framework  
- **Tailwind CSS** – Utility-first styling for responsive design  
- **ShadCN UI** – Beautiful pre-built UI components  
- **Firebase Firestore** – Cloud-based NoSQL database with real-time updates  

---

## 💡 What I Learnt
By exploring this project, I gained hands-on experience with:

- ✅ Setting up and integrating **Firebase Firestore**  
- ✅ Adding, displaying, and deleting notes from Firestore  
- ✅ Real-time syncing using **onSnapshot**  
- ✅ Using Firestore methods like **addDoc**, **collection**, and **deleteDoc**  
- ✅ Building a clean **React component architecture**  
- ✅ Styling with **Tailwind CSS + ShadCN UI**  
- ✅ Organizing code with proper folder separation (`lib/firebase.ts`)  

---

## 🧠 Real-World Interview Readiness
This project also prepares us for common interview scenarios:

- **How does Firestore handle real-time updates?**  
- **What are async data listeners in React?**  
- **How do you structure a full-stack app frontend + backend?**  
- **How would you secure a Firestore collection for user-specific data?**  

---

## 🎯 Further Challenges
If you want to extend ZapNote, try adding these features:  

- ✏️ **Edit Note** – Allow users to update notes  
- ⏰ **Timestamps** – Show when each note was created  
- 🏷 **Tags/Categories** – Add filtering and search functionality  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/nikfury27/Zap-note.git
cd Zap-note
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file in the root and add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run the app

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
 ┣ assets/          # Static assets
 ┣ components/      # Reusable UI + feature components
 ┃ ┣ ui/            # ShadCN UI components
 ┣ lib/             # Firebase setup (lib/firebase.ts)
 ┣ pages/           # App pages
 ┣ App.tsx          # Main app component
 ┗ main.tsx         # Entry point
```

---

## 📸 Demo & Screenshots

### Demo
![Vite React TS - Brave 2025-08-20 14-54-46](https://github.com/user-attachments/assets/945118f2-640e-49da-ae69-2d594bf54d8b)

### Screenshots(Landing Page , Adding Note , Deleting Note , Empty Note , FireStore Database )

<img width="1919" height="978" alt="Screenshot 2025-08-20 144616" src="https://github.com/user-attachments/assets/701faea9-1e86-44a9-ab70-482f7799bb65" />
<img width="1919" height="977" alt="Screenshot 2025-08-20 150441" src="https://github.com/user-attachments/assets/ff2145ac-fcac-4137-9ded-5f3ad09b5867" />
<img width="1919" height="977" alt="Screenshot 2025-08-20 150448" src="https://github.com/user-attachments/assets/92a4516d-a25a-4b7d-9b1a-c08f8728ad8c" />
<img width="1919" height="979" alt="Screenshot 2025-08-20 150656" src="https://github.com/user-attachments/assets/2a9cbda1-e5fe-4d53-80e0-4df35b3328e0" />
<img width="1919" height="979" alt="Screenshot 2025-08-20 145213" src="https://github.com/user-attachments/assets/12af2eff-0b48-4a1d-9623-45e02afb7162" />


---

## 🌟 Why ZapNote?

ZapNote isn’t just another notes app—it’s a **learning playground**.
You’ll walk away understanding how to integrate real-time databases, build clean React apps, and design UIs that stand out.

---

## 🤝 Want to Contribute?

Contributions are welcome! 🎉

If you’d like to improve **ZapNote**, follow these steps:

1. **Fork** the repository
2. Create a new **feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes

   ```bash
   git commit -m "Add: your feature description"
   ```
4. **Push** to your branch

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** 🚀

### Contribution Ideas

* Add **Edit Note** functionality
* Implement **User Authentication** (Firebase Auth)
* Create **Dark Mode** toggle
* Enhance **UI animations** with Framer Motion
* Add **search & filters** for notes

---
