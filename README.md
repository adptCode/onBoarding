# 🚀 OnBoarding - Angular Application

Welcome to **OnBoarding**, an Angular application designed to manage onboarding processes efficiently. This project makes use of **Sass** for styling and employs **Input and Output decorators** for seamless communication between components.

---

## 🌟 Features
- **Angular 17+**: Built with the latest Angular features.
- **Sass Integration**: Efficient and modular styling with **SCSS**.
- **Component Communication**: Uses **@Input()** and **@Output()** decorators for structured parent-child communication.
- **Reactive Forms**: Implements dynamic form handling with Angular's reactive forms.
- **Modular Architecture**: Designed with scalability in mind, ensuring modular and reusable components.

---

## 📋 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adptCode/onBoarding.git
cd onBoarding
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
ng serve -o
```
This will automatically open the application in your default browser at `http://localhost:4200/`. The application supports hot-reloading, so any changes you make to the source files will reflect in real-time.

---

## 🛠️ Key Concepts Used

### 🎨 Sass for Styling
This project uses **Sass (SCSS)** for better styling management, enabling nested rules, mixins, and variables for a more maintainable and scalable CSS architecture.

### 🔄 Component Communication with Input & Output
- **@Input()**: Used to pass data from a parent component to a child component.
- **@Output()**: Used to emit events from a child component to a parent component.

Example:
```typescript
// Parent Component
<app-child [data]="parentData" (notify)="handleNotification($event)"></app-child>

// Child Component
@Input() data: string;
@Output() notify = new EventEmitter<string>();

triggerEvent() {
  this.notify.emit("Child component event triggered!");
}
```

---

## 🛠️ Available Scripts

In the project directory, you can run the following scripts:

- **`ng serve`**: Compiles and serves the application, rebuilding on file changes.
- **`ng build`**: Compiles the application into an output directory.
- **`ng test`**: Executes unit tests via [Karma](https://karma-runner.github.io).
- **`ng lint`**: Runs linting tools to analyze code quality.

For a complete list of available scripts and their descriptions, refer to the `package.json` file.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's coding standards and conventions.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

🚀 **Happy coding!**
