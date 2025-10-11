# Budget Planner & Expense Tracker

A professional and fully functional web application for managing personal finances with budget planning, expense tracking, and data visualization. Built with vanilla JavaScript and featuring the signature Tyson Siruno red and black theme.

![License](https://img.shields.io/badge/license-MIT-red.svg)
![Version](https://img.shields.io/badge/version-1.0.0-black.svg)

## Features

### Core Functionality
- **Income & Expense Tracking**: Add, edit, and delete financial transactions with detailed descriptions
- **Category Management**: Organize transactions across 7 predefined categories:
  - Food
  - Rent
  - Transport
  - Entertainment
  - Utilities
  - Healthcare
  - Other

### Budget Management
- **Category Budgets**: Set individual budget limits for each spending category
- **Budget Monitoring**: Real-time tracking of spending vs. budget with visual progress bars
- **Over-Budget Alerts**: Visual indicators when spending exceeds budget limits
- **Remaining Balance**: Track how much budget is left in each category

### Data Visualization
- **Pie Chart**: Visual breakdown of expenses by category with percentages
- **Line Chart**: Monthly trend analysis showing income vs. expenses over the last 6 months
- **Interactive Charts**: Built with Canvas API for smooth, responsive graphics

### Dashboard
- **Summary Cards**: Quick view of total income, total expenses, and current balance
- **Color-Coded Amounts**: Green for income, red for expenses, dynamic balance color
- **Real-time Updates**: All metrics update instantly as transactions are added or modified

### Transaction Management
- **Filtering**: Filter transactions by type (income/expense) and category
- **Sorting**: Sort by date (newest/oldest) or amount (high/low)
- **Search & Browse**: Easy navigation through transaction history
- **CRUD Operations**: Full Create, Read, Update, Delete functionality

### Data Management
- **LocalStorage Persistence**: All data saved automatically in browser
- **CSV Export**: Export transaction history to CSV format for external analysis
- **Sample Data**: Pre-loaded demo transactions for immediate testing
- **Data Clearing**: Option to reset all data with confirmation

### Additional Features
- **Multi-Currency Support**: Choose from USD, EUR, GBP, JPY, or INR
- **Currency Formatting**: Automatic number formatting with thousand separators
- **Date Management**: Automatic date selection with manual override option
- **Mobile Responsive**: Fully optimized for desktop, tablet, and mobile devices

## Design

### Color Scheme
- **Primary Red**: #dc143c (Signature Tyson Siruno Red)
- **Primary Black**: #000000 (Deep Black)
- **Accent Colors**: Gradient backgrounds and hover effects
- **Status Colors**: Green for positive, Red for negative values

### User Interface
- Modern card-based layout
- Smooth transitions and hover effects
- Custom scrollbars matching theme
- Professional modal dialogs
- Responsive grid layouts
- Clean typography with proper hierarchy

## Installation

### Method 1: Direct Download
1. Download all files to a local directory:
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`

2. Open `index.html` in a modern web browser

### Method 2: Clone Repository
```bash
# Navigate to your projects directory
cd your-projects-folder

# Create project directory
mkdir budget-planner-expense-tracker
cd budget-planner-expense-tracker

# Download files
# (Place index.html, style.css, and app.js in this directory)

# Open in browser
open index.html
```

### Method 3: Local Web Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (with http-server)
npx http-server

# Then navigate to http://localhost:8000
```

## Usage

### Getting Started
1. **First Launch**: The app loads with sample data to demonstrate functionality
2. **Currency Selection**: Choose your preferred currency from the top-right dropdown
3. **Dashboard**: View your financial summary at a glance

### Adding Transactions
1. Navigate to the "Add Transaction" section
2. Select transaction type (Income or Expense)
3. Choose appropriate category
4. Enter amount and date
5. Add a description
6. Click "Add Transaction"

### Setting Budgets
1. Click "Set Category Budgets" button
2. Enter budget amounts for each category
3. Leave fields empty for categories without budgets
4. Click "Save Budgets"
5. View budget progress cards showing spending vs. limits

### Managing Transactions
- **Edit**: Click the "Edit" button on any transaction to modify it
- **Delete**: Click the "Delete" button to remove a transaction
- **Filter**: Use dropdown menus to filter by type or category
- **Sort**: Change sort order using the sort dropdown

### Viewing Charts
- **Pie Chart**: Shows expense distribution across categories
- **Line Chart**: Displays income vs. expenses trend over last 6 months
- Charts update automatically when transactions are added or removed

### Exporting Data
1. Click "Export to CSV" button
2. File downloads automatically with current date in filename
3. Open in Excel, Google Sheets, or any CSV-compatible software

### Clearing Data
1. Click "Clear All Data" button
2. Confirm the action in the popup dialog
3. All transactions and budgets will be removed
4. Sample data can be reloaded by refreshing the page

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No external dependencies
- **Canvas API**: Custom chart rendering
- **LocalStorage API**: Client-side data persistence

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### File Structure
```
budget-planner-expense-tracker/
│
├── index.html          # Main HTML structure
├── style.css          # All styling and responsive design
├── app.js             # Application logic and functionality
└── README.md          # Documentation (this file)
```

### Data Structure
```javascript
// Transaction Object
{
  id: "unique-id",
  type: "income" | "expense",
  category: "Food" | "Rent" | "Transport" | etc.,
  amount: 100.00,
  date: "2025-10-11",
  description: "Transaction description"
}

// Budget Object
{
  Food: 500,
  Rent: 1600,
  Transport: 300,
  // ... other categories
}
```

### LocalStorage Keys
- `transactions`: Array of transaction objects
- `budgets`: Object containing category budgets
- `currency`: Selected currency code

## Features in Detail

### Responsive Design Breakpoints
- **Desktop**: 1400px and above
- **Tablet**: 768px - 1399px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Chart Specifications
- **Pie Chart**: 400x400px canvas with dynamic slicing
- **Line Chart**: 600x400px canvas with 6-month trend
- **Colors**: Theme-matched color palette for visual consistency

### Form Validation
- Amount fields require positive numbers
- Date fields use native date picker
- Description fields are mandatory
- Category selection is required
- All inputs sanitized for security

## Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-red: #dc143c;
    --primary-black: #000000;
    /* Modify other colors as needed */
}
```

### Adding Categories
1. Update the categories array in `app.js`
2. Add corresponding budget input in `index.html`
3. Add option to category select elements

### Modifying Sample Data
Edit the `loadSampleData()` method in `app.js` to customize demo transactions.

## Troubleshooting

### Data Not Saving
- Ensure browser allows LocalStorage
- Check browser privacy settings
- Try clearing browser cache

### Charts Not Displaying
- Verify browser supports Canvas API
- Check console for JavaScript errors
- Ensure transactions exist for chart generation

### Export Not Working
- Check browser download settings
- Verify popup blocker settings
- Ensure transactions exist to export

## Performance

- **Load Time**: < 1 second on modern browsers
- **Data Limit**: Tested with 1000+ transactions
- **Storage**: Typical usage: 10-50 KB LocalStorage
- **Rendering**: Smooth 60fps animations and transitions

## Security

- No server-side data transmission
- All data stored locally in browser
- No external API calls
- No user authentication required
- Safe for offline use

## Future Enhancements

Potential features for future versions:
- Recurring transactions
- Multiple account support
- Advanced filtering (date ranges)
- Budget templates
- Cloud sync capability
- Receipt attachment
- Financial goal tracking
- Reports and analytics
- Dark/Light theme toggle

## License

MIT License

Copyright (c) 2025 Tyson Siruno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

**Tyson Siruno**

Created with passion for clean code and beautiful design.

---

**Created by Tyson Siruno - MIT License © 2025**
