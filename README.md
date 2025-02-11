

https://github.com/user-attachments/assets/95017ba2-44fd-421e-bf8d-5d2acacb311d
  

# 🛠 Chrome - Keylogger

A simple keylogger implemented using JavaScript and a Chrome extension. It captures keystrokes and sends them to a local server.

## 🚀 Features
- Captures keystrokes from text fields and textareas.
- Sends logged keys to a **local server (`localhost:3000`)**.
- Runs as a **Chrome extension**.
- Uses **Node.js with Express** as the backend.

---

## ⚙️ Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/N3LL4-01/CSS-Keylogger.git
cd CSS-Keylogger
```

### **2️⃣ Install Dependencies**
Navigate to the `server/` folder and install the required Node.js packages:
```sh
cd server
npm install
```

### **3️⃣ Start the Server**
Run the following command to start the local keylogger server:
```sh
node server.js
```
The server will start at:  
📍 `http://localhost:3000/`

### **4️⃣ Load the Chrome Extension**
1. Open **Chrome** and go to:  
   🔗 `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top right).
3. Click **"Load unpacked"** and select the `extension/` folder.
4. The extension is now installed and active.

---

## 🎯 How It Works
1. The **content script (`content.js`)** runs on webpages and captures keystrokes from input fields.
2. Captured keys are sent to the local **server (`server.js`)**.
3. All logged keystrokes are stored in **`keylog.txt`**.

---

## 🛑 Disclaimer
This project is for **educational purposes only**.  
**Do not use it for malicious activities.** Unauthorized keylogging is illegal.

---
