# CipherSmith 🔑✨

![Version](https://img.shields.io/badge/version-25.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-stable-success.svg)

Welcome to CipherSmith, the world's first generator designed to forge passwords that are both **truly memorable and highly secure**, without sacrificing your length requirements.

<p align="center">
  <img src="CipherSmith.png" alt="CipherSmith in Action">
</p>

---

### 🤔 Our Philosophy: Not Your Average Passphrase Generator

Let's get one thing straight: CipherSmith is **not** a passphrase generator.

Traditional passphrase tools give you a string of words, and you're stuck with whatever length that creates. We thought that was... well, annoying. CipherSmith is different. Our "Memorable" mode intelligently builds a password from a massive wordlist that **perfectly fits the character length you need**, then cleverly sprinkles in numbers and symbols. The result? A password you can actually remember that still meets those pesky "must be 16 characters long" requirements. It's the best of both worlds!

---

### 🎉 Features

* **🛡️ Cryptographically Secure:** We use `window.crypto` for all random generation. No `Math.random()` nonsense here! Your passwords are as unpredictable as they get.
* **🧠 Two Modes, One Generator:**
    * **Random Mode:** For classic, brute-force-proof gibberish.
    * **Memorable Mode:** Our special sauce! Creates easy-to-recall passwords at *any* length.
* **💪 Live Strength Analysis:** See how tough your new password is in real-time with an integrated `zxcvbn` strength meter. Get instant feedback and time-to-crack estimates!
* **👮 Security Gate:** We've added a friendly bouncer at the door that ensures you're using at least 3 character types, nudging you toward better security habits.
* **🎨 Polished & Intuitive UI:** Clean, responsive, and easy on the eyes. Generating passwords is now a pleasure, not a chore.
* **🌍 Works Offline:** Once the page is loaded, you can disconnect. All generation happens right in your browser for maximum privacy.

---

### 💻 Tech Stack

* **Vanilla HTML5**
* **Vanilla CSS3**
* **Vanilla JavaScript (ES6+)**
* **zxcvbn.js** for strength estimation

---

### 🚀 How to Use

It couldn't be simpler. Since this is a pure front-end application:

1.  Clone or download this repository.
2.  Open the `index.html` file in your favorite browser.
3.  That's it! Start forging some awesome passwords.

---

### 🤝 Contributing

Got an idea? Found a bug? Feel free to open an issue or submit a pull request! All contributions are welcome. Let's make CipherSmith even better together.

---

### ❤️ Support the Project

This is an open-source project created with love. If CipherSmith has saved you from password headaches, consider supporting its future development!

**Support with ₿itcoin:** `bc1qufnkjqtzckfqlqsakpv3yjjyg0gce2674wdhv04fmjw635vuj9zsgrzuwp`

---

### 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
