# Contributing to Budget Planner & Expense Tracker

Thank you for your interest in contributing! This document provides guidelines for contributing to the Budget Planner & Expense Tracker project.

## 🚀 Quick Start for Contributors

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## 🐛 Reporting Bugs

**Before submitting:**
- Search existing issues to avoid duplicates
- Test in the latest version
- Verify it's not a browser-specific issue

**Bug Report Template:**
```markdown
**Bug Description:**
A clear description of what the bug is.

**To Reproduce:**
1. Go to '...'
2. Click on '...'
3. Enter '...'
4. See error

**Expected Behavior:**
What you expected to happen.

**Actual Behavior:**
What actually happened.

**Screenshots:**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120.0]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, Mobile]
```

## 💡 Suggesting Features

We love feature suggestions! Please include:

- **Use Case**: Describe the problem you're trying to solve
- **Proposed Solution**: How would this feature work?
- **Alternatives**: Other approaches you've considered
- **Benefits**: Who would this help and how?

**Feature Request Template:**
```markdown
**Feature Name:** Brief name for the feature

**Problem Statement:**
Describe the problem this feature solves.

**Proposed Solution:**
Detailed description of how the feature would work.

**User Stories:**
- As a [type of user], I want [goal] so that [benefit]

**Mockups/Examples:**
Visual representations if applicable.

**Additional Context:**
Any other information that would be helpful.
```

## 🔧 Pull Request Process

### 1. Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/budget-planner-expense-tracker.git
cd budget-planner-expense-tracker

# Create a feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

Follow our coding standards (see below) and:
- Keep changes focused on a single issue/feature
- Write clear, descriptive commit messages
- Test thoroughly before committing

### 3. Commit Your Changes

Use descriptive commit messages:

```bash
# Good commit messages
git commit -m "Add: Currency conversion feature"
git commit -m "Fix: Chart rendering on mobile devices"
git commit -m "Update: Improve budget card responsiveness"

# Commit message prefixes
# Add: New features
# Fix: Bug fixes
# Update: Changes to existing features
# Refactor: Code improvements without changing functionality
# Docs: Documentation only changes
# Style: Formatting changes (no code logic changes)
# Test: Adding or updating tests
```

### 4. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub with:
- Clear title describing the change
- Detailed description of what and why
- Link to related issues
- Screenshots if UI changes
- Testing notes

## 📝 Coding Standards

### JavaScript Best Practices

```javascript
// ✅ Use const for values that don't change
const CATEGORIES = ['Food', 'Rent', 'Transport'];

// ✅ Use let for values that will change
let currentBalance = 0;

// ✅ Use meaningful variable names
const calculateTotalExpenses = (transactions) => {
    return transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
};

// ❌ Avoid unclear variable names
const calc = (x) => x.reduce((a, b) => a + b.amt, 0);

// ✅ Use template literals for strings
const message = `Your balance is ${formatCurrency(balance)}`;

// ✅ Add comments for complex logic
/**
 * Calculates the budget usage percentage for a category
 * @param {number} spent - Amount spent in category
 * @param {number} budget - Budget limit for category
 * @returns {number} Percentage (0-100)
 */
const calculateBudgetPercentage = (spent, budget) => {
    if (!budget || budget === 0) return 0;
    return Math.min((spent / budget) * 100, 100);
};

// ✅ Use destructuring
const { type, category, amount, date } = transaction;

// ✅ Use array methods
const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
    }, {});
```

### CSS Best Practices

```css
/* ✅ Use CSS custom properties */
:root {
    --primary-red: #dc143c;
    --primary-black: #000000;
    --gray-light: #f8f9fa;
    --success-green: #28a745;
}

/* ✅ Organize properties logically */
.transaction-card {
    /* Positioning */
    position: relative;
    z-index: 1;

    /* Display & Box Model */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;

    /* Typography */
    font-size: 1rem;
    line-height: 1.5;

    /* Visual */
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    /* Animation */
    transition: all 0.3s ease;
}

/* ✅ Use meaningful class names */
.budget-card__progress-bar { }  /* Good */
.bc-pb { }                      /* Bad */

/* ✅ Mobile-first media queries */
.dashboard {
    /* Mobile styles first */
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .dashboard {
        /* Tablet styles */
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .dashboard {
        /* Desktop styles */
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### HTML Best Practices

```html
<!-- ✅ Use semantic HTML -->
<main class="app-container">
    <section class="dashboard">
        <article class="summary-card">
            <h2>Total Income</h2>
            <p class="amount">$5,250.00</p>
        </article>
    </section>
</main>

<!-- ✅ Include accessible attributes -->
<button
    class="btn btn-primary"
    aria-label="Add new transaction"
    type="button"
>
    Add Transaction
</button>

<!-- ✅ Use proper form elements -->
<form class="transaction-form">
    <label for="amount">Amount:</label>
    <input
        type="number"
        id="amount"
        name="amount"
        min="0.01"
        step="0.01"
        required
        aria-describedby="amount-help"
    >
    <small id="amount-help">Enter the transaction amount</small>
</form>
```

## 🧪 Testing Requirements

### Before Submitting a PR

**1. Browser Testing** (test in all major browsers):
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)

**2. Responsive Testing** (test at various screen sizes):
- ✅ Mobile (320px - 767px)
- ✅ Tablet (768px - 1023px)
- ✅ Desktop (1024px+)

**3. Functionality Testing**:
```
✅ Add income transaction
✅ Add expense transaction
✅ Edit existing transaction
✅ Delete transaction
✅ Set category budgets
✅ View pie chart
✅ View line chart
✅ Filter transactions (type and category)
✅ Sort transactions (date and amount)
✅ Export to CSV
✅ Clear all data
✅ Change currency
```

**4. LocalStorage Testing**:
```
✅ Data persists after page refresh
✅ Data persists after browser close/reopen
✅ Multiple transactions save correctly
✅ Budgets save correctly
✅ Currency preference saves
✅ Clear data removes all stored data
```

**5. Edge Cases**:
```
✅ Adding transaction with $0 amount
✅ Adding transaction with very large amounts (> $1,000,000)
✅ Adding transaction with many decimal places
✅ Budget set to $0
✅ No transactions (empty state)
✅ 100+ transactions (performance)
✅ Special characters in descriptions
```

## 🎨 Design Guidelines

### Color Usage
| Color | Usage | Hex |
|-------|-------|-----|
| Primary Red | Buttons, accents, expense amounts | #dc143c |
| Primary Black | Headers, labels, important text | #000000 |
| Success Green | Income amounts, positive values | #28a745 |
| Gray Light | Backgrounds, subtle elements | #f8f9fa |
| Gray Medium | Borders, dividers | #ddd |

### Typography
- **Headers**: 1.5rem - 2.5rem, bold, black
- **Body Text**: 1rem, regular weight, dark gray
- **Small Text**: 0.875rem, regular weight, medium gray
- **Minimum Mobile Font Size**: 16px (prevents zoom on mobile)

### Spacing System
Use multiples of 8px for consistency:
- 0.5rem (8px) - Tight spacing
- 1rem (16px) - Standard spacing
- 1.5rem (24px) - Comfortable spacing
- 2rem (32px) - Section spacing

### Animation Guidelines
- **Duration**: 0.2s - 0.4s
- **Easing**: ease, ease-in-out
- **Use for**: Hover states, modal open/close, state changes
- **Avoid**: Continuous animations, jarring effects

## 🌟 Feature Development

### Adding a New Chart Type

1. Create chart rendering function in `app.js`:
```javascript
function renderNewChart(data) {
    const canvas = document.getElementById('new-chart');
    const ctx = canvas.getContext('2d');

    // Chart drawing logic here
}
```

2. Add chart container to HTML:
```html
<div class="chart-container">
    <h2>Chart Title</h2>
    <canvas id="new-chart" width="600" height="400"></canvas>
</div>
```

3. Call render function when data changes
4. Add responsive sizing
5. Test across browsers
6. Update documentation

### Adding a New Category

1. Update categories array in `app.js`:
```javascript
const CATEGORIES = [
    'Food',
    'Rent',
    'Transport',
    'Entertainment',
    'Utilities',
    'Healthcare',
    'Your New Category', // Add here
    'Other'
];
```

2. Add to all category selects in HTML
3. Update budget form
4. Test transaction creation
5. Verify chart displays correctly

## 📚 Documentation

When adding features, update:
- [ ] README.md (if user-facing change)
- [ ] Code comments for complex logic
- [ ] This CONTRIBUTING.md (if development process changes)
- [ ] CHANGELOG.md (create if doesn't exist)

## 🏆 Recognition

Contributors are recognized in:
- CONTRIBUTORS.md file
- GitHub contributors page
- Release notes

## 💬 Communication

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an Issue
- **Features**: Create an Issue with "enhancement" label
- **Security**: Email Tysonsiruno@gmail.com directly

## 📜 Code of Conduct

### Expected Behavior
- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the project
- Show empathy and kindness

### Unacceptable Behavior
- Harassment of any kind
- Discriminatory language or actions
- Personal attacks
- Publishing private information
- Unprofessional conduct

**Violations**: Report to Tysonsiruno@gmail.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Budget Planner & Expense Tracker! 💰**

Questions? Reach out via [GitHub Issues](https://github.com/tysonsiruno/budget-planner-expense-tracker/issues) or [email](mailto:Tysonsiruno@gmail.com).
