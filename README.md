# 💰 Budget Planner & Expense Tracker

> **Take Control of Your Finances** - Track every dollar, visualize your spending, and achieve your financial goals.

![Version](https://img.shields.io/badge/version-1.0.0-dc143c?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)
![Made with](https://img.shields.io/badge/made_with-vanilla_js-yellow?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success?style=flat-square)

**[🚀 Launch App](https://tysonsiruno.github.io/budget-planner-expense-tracker/)** | **[📖 User Guide](#-user-guide)** | **[🐛 Report Issue](https://github.com/tysonsiruno/budget-planner-expense-tracker/issues)**

---

## 📊 Overview

A **comprehensive financial management tool** designed to help you track income, monitor expenses, set budgets, and visualize your financial health—all from your browser with zero setup required.

### 🎯 Key Statistics

| Feature | Details |
|---------|---------|
| 💾 **Data Storage** | 100% local (LocalStorage) |
| 🌍 **Currencies Supported** | 5 (USD, EUR, GBP, JPY, INR) |
| 📁 **Categories** | 7 spending categories |
| 📈 **Charts** | 2 interactive visualizations |
| 📱 **Mobile Support** | Fully responsive |
| ⚡ **Load Time** | < 1 second |

---

## ✨ Features

### 💸 Financial Tracking
```
┌─────────────────────────────────────────────┐
│  ✅ Income & Expense Recording              │
│  ✅7 Pre-Defined Categories                │
│  ✅ Unlimited Transactions                  │
│  ✅ Date & Description Fields               │
│  ✅ Multi-Currency Support                  │
└─────────────────────────────────────────────┘
```

### 📊 Budget Management
- **Set Category Budgets** - Define spending limits for each category
- **Real-Time Monitoring** - Visual progress bars show budget usage
- **Overspending Alerts** - Red indicators when you exceed budgets
- **Remaining Balance** - See how much budget is left at a glance

### 📈 Data Visualization
<table>
<tr>
<td width="50%">

**Pie Chart**
- Expense distribution by category
- Percentage breakdown
- Color-coded segments
- Interactive labels

</td>
<td width="50%">

**Line Chart**
- 6-month income vs. expenses trend
- Historical comparison
- Visual trend analysis
- Month-over-month insights

</td>
</tr>
</table>

### 🎛️ Advanced Controls
- **Filter & Sort** - Find transactions instantly
- **CSV Export** - Download data for external analysis
- **Auto-Save** - Never lose your data
- **Sample Data** - Pre-loaded demo for testing

---

## 🚀 Getting Started

### Quick Start (30 seconds)

1. **Visit:** [tysonsiruno.github.io/budget-planner-expense-tracker](https://tysonsiruno.github.io/budget-planner-expense-tracker/)
2. **Select Currency:** Choose from dropdown (top-right)
3. **Add Transaction:** Fill form → Click "Add Transaction"
4. **Set Budget:** Click "Set Category Budgets" → Enter limits
5. **View Charts:** Scroll to see visual insights

**That's it!** No account, no installation, no complexity.

### Local Installation

```bash
# Clone repository
git clone https://github.com/tysonsiruno/budget-planner-expense-tracker.git

# Navigate to folder
cd budget-planner-expense-tracker

# Open in browser
open index.html
```

**Requirements:** Any modern browser with JavaScript enabled.

---

## 📖 User Guide

### Adding a Transaction

```
Step 1: Select Type (Income or Expense)
   ↓
Step 2: Choose Category (Food, Rent, Transport, etc.)
   ↓
Step 3: Enter Amount (e.g., 45.50)
   ↓
Step 4: Pick Date (defaults to today)
   ↓
Step 5: Add Description (e.g., "Grocery shopping")
   ↓
Step 6: Click "Add Transaction"
```

**Result:** Transaction appears in history, dashboard updates, charts refresh.

### Managing Budgets

1. **Open Budget Modal** - Click "Set Category Budgets"
2. **Enter Amounts** - Input budget for each category
3. **Leave Blank** - Skip categories you don't want to budget
4. **Save** - Click "Save Budgets"
5. **Monitor** - See progress cards below the dashboard

**Budget Cards Show:**
- 📊 Spent amount / Budget limit
- 📈 Visual progress bar
- 🎨 Color changes (green → yellow → red)
- ⚠️ Warning when over budget

### Filtering Transactions

| Filter Type | Options |
|-------------|---------|
| **By Type** | All, Income Only, Expense Only |
| **By Category** | All, Food, Rent, Transport, Entertainment, Utilities, Healthcare, Other |
| **Sort By** | Date (Newest/Oldest), Amount (High/Low) |

### Exporting Data

**CSV Export includes:**
- ✅ All transaction data
- ✅ Date, type, category, amount, description
- ✅ Formatted for Excel/Google Sheets
- ✅ Filename with current date

**How to Export:**
1. Click "Export to CSV"
2. File downloads automatically
3. Open in spreadsheet software

---

## 🎨 Visual Design

### Color Palette
```css
Primary Red:   #dc143c  /* Income amounts, buttons, accents */
Primary Black: #000000  /* Headers, text, borders */
Success Green: #28a745  /* Income, positive balance */
Warning Red:   #dc143c  /* Expenses, negative balance */
Gray Tones:    #f8f9fa  /* Backgrounds, subtle elements */
```

### Dashboard Layout

```
┌──────────────────────────────────────────────────────┐
│  TOTAL INCOME  │  TOTAL EXPENSES  │    BALANCE      │
│    $5,250.00   │     $3,840.50    │   $1,409.50     │
│   (in green)   │    (in red)      │  (dynamic)      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  BUDGET CARDS (if budgets are set)                   │
│  [Food: $450/$500] [Rent: $1600/$1600] ...           │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  ADD TRANSACTION FORM                                 │
│  [Type] [Category] [Amount] [Date] [Description]     │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  PIE CHART           │     LINE CHART                 │
│  (Expense Breakdown) │  (Income vs Expenses Trend)   │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  TRANSACTION HISTORY                                  │
│  [Filters] [Sorting]                                  │
│  - Salary Payment: +$2500 (Jan 10, 2025)             │
│  - Grocery Shopping: -$85.50 (Jan 9, 2025)           │
└──────────────────────────────────────────────────────┘
```

---

## 💻 Technical Stack

### Technologies
| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla JavaScript (ES6+) |
| **Markup** | Semantic HTML5 |
| **Styling** | CSS3 (Grid, Flexbox, Custom Properties) |
| **Charts** | Native Canvas API |
| **Storage** | LocalStorage API |
| **No Dependencies** | ✅ Zero external libraries |

### Browser Compatibility
| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |
| Opera | 76+ ✅ |

### Performance Metrics
- **Initial Load:** < 1 second
- **Transaction Add:** < 50ms
- **Chart Render:** < 100ms
- **Storage Usage:** ~10-50KB (typical)
- **Tested With:** 1000+ transactions

---

## 📂 Project Structure

```
budget-planner-expense-tracker/
│
├── 📄 index.html          # Main application structure
├── 🎨 style.css           # Complete styling (red/black theme)
├── ⚙️ app.js              # Application logic & functionality
├── 📖 README.md           # This documentation
├── 🤝 CONTRIBUTING.md     # Contribution guidelines
├── ⚖️ LICENSE             # MIT License
└── 📋 REQUIREMENTS.md     # Detailed feature checklist
```

---

## 🔐 Privacy & Security

### Your Data is Safe

| Security Feature | Description |
|-----------------|-------------|
| **🔒 Client-Side Only** | All processing happens in your browser |
| **🚫 No Server Calls** | Zero data transmission to external servers |
| **💾 LocalStorage** | Data saved only on your device |
| **🔓 No Account** | No login, no email, no tracking |
| **🌐 Works Offline** | Full functionality without internet |
| **🗑️ Full Control** | Delete all data anytime |

**We can't see your data because we never receive it.**

---

## 🎓 Use Cases

### Personal Finance Management
> **Track daily spending, set monthly budgets, and understand where your money goes.**

**Ideal for:**
- 👨‍💼 Professionals managing personal finances
- 👨‍🎓 Students tracking expenses
- 👨‍👩‍👧‍👦 Families budgeting household costs

### Small Business Accounting
> **Simple expense tracking for freelancers and small business owners.**

**Perfect for:**
- 💼 Freelancers tracking business expenses
- 🏪 Small business owners monitoring cash flow
- 📊 Anyone needing basic financial records

### Budget Planning
> **Set financial goals and monitor progress toward achieving them.**

**Use for:**
- 🎯 Monthly budget planning
- 💰 Saving for specific goals
- 📉 Reducing spending in problem areas

---

## 🛠️ Customization

### Adding New Categories

**In `app.js`:**
```javascript
// Add to categories array
const categories = [
  'Food',
  'Rent',
  'Transport',
  'Your New Category',  // ← Add here
  // ...
];
```

**In `index.html`:**
```html
<!-- Add to category selects -->
<option value="Your New Category">Your New Category</option>
```

### Changing Currency Symbols

**In `app.js`:**
```javascript
const currencySymbols = {
  USD: '$',
  EUR: '€',
  YOUR_CURRENCY: 'X'  // ← Add new currency
};
```

### Modifying Colors

**In `style.css`:**
```css
:root {
  --primary-red: #dc143c;     /* Change main red */
  --primary-black: #000000;   /* Change main black */
  /* Modify other CSS variables */
}
```

---

## 🤝 Contributing

We welcome contributions from the community!

### Ways to Contribute
- 🐛 **Report Bugs** - [Open an issue](https://github.com/tysonsiruno/budget-planner-expense-tracker/issues)
- 💡 **Suggest Features** - Share your ideas
- 🔧 **Submit Pull Requests** - Fix bugs or add features
- 📖 **Improve Documentation** - Help others understand
- 🌍 **Translate** - Make it accessible worldwide

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for detailed guidelines.

---

## 🗺️ Roadmap

### Planned Features
- [ ] **Recurring Transactions** - Auto-add monthly bills
- [ ] **Multiple Accounts** - Track different accounts separately
- [ ] **Date Range Filtering** - View specific time periods
- [ ] **Budget Templates** - Pre-set budget configurations
- [ ] **Goals Tracking** - Set and monitor savings goals
- [ ] **Receipt Attachments** - Upload receipt images
- [ ] **Advanced Reports** - Detailed financial analytics
- [ ] **Theme Toggle** - Dark/Light mode
- [ ] **PWA Support** - Install as app
- [ ] **Cloud Sync** (Optional) - Backup to cloud

**Vote on features:** [GitHub Discussions](https://github.com/tysonsiruno/budget-planner-expense-tracker/discussions)

---

## 📝 License

**MIT License** - Copyright © 2025 Tyson Siruno

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

**[View Full License](LICENSE)**

---

## ❓ FAQ

<details>
<summary><b>Is my financial data secure?</b></summary>

Yes! All data is stored locally in your browser using LocalStorage. Nothing is sent to any server. Your financial information never leaves your device.
</details>

<details>
<summary><b>Can I use this on multiple devices?</b></summary>

Currently, data is stored locally per browser. To sync across devices, you'd need to export CSV from one device and manually import on another (import feature coming soon). Cloud sync is planned for future releases.
</details>

<details>
<summary><b>What happens if I clear my browser data?</b></summary>

All transactions and budgets will be deleted. We recommend periodically exporting to CSV as a backup.
</details>

<details>
<summary><b>Can I use this for business accounting?</b></summary>

Yes, for basic expense tracking! However, for formal business accounting, tax reporting, or audit requirements, consider professional accounting software. This tool is best for personal finance or simple business expense tracking.
</details>

<details>
<summary><b>Is there a mobile app?</b></summary>

Not yet, but the web app is fully mobile-responsive. PWA (installable web app) support is planned for a future release.
</details>

<details>
<summary><b>How do I backup my data?</b></summary>

Click "Export to CSV" to download all your transactions. Save this file as a backup. You can open it in Excel or Google Sheets anytime.
</details>

---

## 📧 Support

**Need help?** Here's where to go:

| Type | Resource |
|------|----------|
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/tysonsiruno/budget-planner-expense-tracker/issues) |
| 💬 **Questions** | [GitHub Discussions](https://github.com/tysonsiruno/budget-planner-expense-tracker/discussions) |
| 📧 **Email** | [Tysonsiruno@gmail.com](mailto:Tysonsiruno@gmail.com) |
| 📖 **Documentation** | [This README](#-overview) |

---

## 🙏 Acknowledgments

- **Inspired by:** Modern personal finance apps
- **Design:** Tyson Siruno signature red & black theme
- **Built with:** Pure web technologies, zero dependencies
- **Made with ❤️ in:** Utah, USA

---

<div align="center">

**⭐ If this tool helps you manage your finances, give it a star!**

![GitHub Repo stars](https://img.shields.io/github/stars/tysonsiruno/budget-planner-expense-tracker?style=social)

**Created by [Tyson Siruno](https://github.com/tysonsiruno)** | **[Portfolio](https://tysonsiruno.github.io/portfolio)**

[⬆ Back to Top](#-budget-planner--expense-tracker)

</div>
