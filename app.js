// Budget Planner & Expense Tracker
// Created by Tyson Siruno - MIT License © 2025

class BudgetTracker {
    constructor() {
        this.transactions = [];
        this.budgets = {};
        this.currency = 'USD';
        this.currencySymbols = {
            USD: '$',
            EUR: '€',
            GBP: '£',
            JPY: '¥',
            INR: '₹'
        };
        this.categories = ['Food', 'Rent', 'Transport', 'Entertainment', 'Utilities', 'Healthcare', 'Other'];
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.setTodayDate();
        this.updateDashboard();
        this.updateBudgetOverview();
        this.renderTransactions();
        this.renderCharts();

        // Load sample data if no data exists
        if (this.transactions.length === 0) {
            this.loadSampleData();
        }
    }

    loadData() {
        const savedTransactions = localStorage.getItem('transactions');
        const savedBudgets = localStorage.getItem('budgets');
        const savedCurrency = localStorage.getItem('currency');

        if (savedTransactions) {
            this.transactions = JSON.parse(savedTransactions);
        }
        if (savedBudgets) {
            this.budgets = JSON.parse(savedBudgets);
        }
        if (savedCurrency) {
            this.currency = savedCurrency;
            document.getElementById('currency').value = savedCurrency;
        }
    }

    saveData() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
        localStorage.setItem('budgets', JSON.stringify(this.budgets));
        localStorage.setItem('currency', this.currency);
    }

    loadSampleData() {
        const today = new Date();
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);

        const sampleTransactions = [
            { id: this.generateId(), type: 'income', category: 'Other', amount: 5000, description: 'Monthly Salary', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 1)) },
            { id: this.generateId(), type: 'expense', category: 'Rent', amount: 1500, description: 'Monthly Rent Payment', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 5)) },
            { id: this.generateId(), type: 'expense', category: 'Food', amount: 85.50, description: 'Grocery Shopping', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 7)) },
            { id: this.generateId(), type: 'expense', category: 'Transport', amount: 120, description: 'Gas and Car Maintenance', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 8)) },
            { id: this.generateId(), type: 'expense', category: 'Utilities', amount: 150, description: 'Electricity and Water Bills', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 10)) },
            { id: this.generateId(), type: 'expense', category: 'Entertainment', amount: 45.99, description: 'Netflix and Spotify', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 12)) },
            { id: this.generateId(), type: 'expense', category: 'Food', amount: 62.30, description: 'Restaurant Dinner', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 14)) },
            { id: this.generateId(), type: 'expense', category: 'Healthcare', amount: 200, description: 'Doctor Visit and Medication', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 15)) },
            { id: this.generateId(), type: 'income', category: 'Other', amount: 500, description: 'Freelance Project', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 16)) },
            { id: this.generateId(), type: 'expense', category: 'Food', amount: 95.75, description: 'Grocery Shopping', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 18)) },
            { id: this.generateId(), type: 'expense', category: 'Entertainment', amount: 75, description: 'Movie and Dinner', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 20)) },
            { id: this.generateId(), type: 'expense', category: 'Transport', amount: 45, description: 'Uber Rides', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 22)) },
            { id: this.generateId(), type: 'expense', category: 'Other', amount: 120, description: 'Clothing Shopping', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 25)) },
            { id: this.generateId(), type: 'expense', category: 'Food', amount: 55.20, description: 'Lunch with Friends', date: this.formatDate(new Date(today.getFullYear(), today.getMonth(), 27)) },
        ];

        this.transactions = sampleTransactions;

        // Set sample budgets
        this.budgets = {
            Food: 500,
            Rent: 1600,
            Transport: 300,
            Entertainment: 200,
            Utilities: 200,
            Healthcare: 300,
            Other: 400
        };

        this.saveData();
        this.updateDashboard();
        this.updateBudgetOverview();
        this.renderTransactions();
        this.renderCharts();
    }

    setupEventListeners() {
        // Transaction form
        document.getElementById('transactionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTransaction();
        });

        // Budget button and modal
        document.getElementById('setBudgetBtn').addEventListener('click', () => {
            this.openBudgetModal();
        });

        document.querySelector('.close').addEventListener('click', () => {
            this.closeBudgetModal();
        });

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('budgetModal');
            if (e.target === modal) {
                this.closeBudgetModal();
            }
        });

        document.getElementById('budgetForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveBudgets();
        });

        // Export button
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportToCSV();
        });

        // Clear data button
        document.getElementById('clearDataBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
                this.clearAllData();
            }
        });

        // Currency selector
        document.getElementById('currency').addEventListener('change', (e) => {
            this.currency = e.target.value;
            this.saveData();
            this.updateDashboard();
            this.updateBudgetOverview();
            this.renderTransactions();
        });

        // Filters
        document.getElementById('filterType').addEventListener('change', () => {
            this.renderTransactions();
        });

        document.getElementById('filterCategory').addEventListener('change', () => {
            this.renderTransactions();
        });

        document.getElementById('sortBy').addEventListener('change', () => {
            this.renderTransactions();
        });

        // Transaction type change
        document.getElementById('transactionType').addEventListener('change', (e) => {
            const categorySelect = document.getElementById('category');
            if (e.target.value === 'income') {
                categorySelect.innerHTML = '<option value="Other">Salary/Income</option>';
            } else {
                categorySelect.innerHTML = `
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other</option>
                `;
            }
        });
    }

    setTodayDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    formatDate(date) {
        if (typeof date === 'string') {
            return date;
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    formatCurrency(amount) {
        const symbol = this.currencySymbols[this.currency];
        return `${symbol}${parseFloat(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }

    addTransaction() {
        const type = document.getElementById('transactionType').value;
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        const transaction = {
            id: this.generateId(),
            type,
            category,
            amount,
            date,
            description
        };

        this.transactions.push(transaction);
        this.saveData();
        this.updateDashboard();
        this.updateBudgetOverview();
        this.renderTransactions();
        this.renderCharts();

        // Reset form
        document.getElementById('transactionForm').reset();
        this.setTodayDate();

        // Reset category dropdown
        document.getElementById('category').innerHTML = `
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
        `;
    }

    deleteTransaction(id) {
        if (confirm('Are you sure you want to delete this transaction?')) {
            this.transactions = this.transactions.filter(t => t.id !== id);
            this.saveData();
            this.updateDashboard();
            this.updateBudgetOverview();
            this.renderTransactions();
            this.renderCharts();
        }
    }

    editTransaction(id) {
        const transaction = this.transactions.find(t => t.id === id);
        if (!transaction) return;

        document.getElementById('transactionType').value = transaction.type;
        document.getElementById('amount').value = transaction.amount;
        document.getElementById('date').value = transaction.date;
        document.getElementById('description').value = transaction.description;

        // Update category dropdown based on type
        if (transaction.type === 'income') {
            document.getElementById('category').innerHTML = '<option value="Other">Salary/Income</option>';
        } else {
            document.getElementById('category').innerHTML = `
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Other">Other</option>
            `;
            document.getElementById('category').value = transaction.category;
        }

        // Delete the old transaction
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.saveData();
        this.updateDashboard();
        this.updateBudgetOverview();
        this.renderTransactions();
        this.renderCharts();

        // Scroll to form
        document.getElementById('transactionForm').scrollIntoView({ behavior: 'smooth' });
    }

    updateDashboard() {
        const totalIncome = this.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const totalExpenses = this.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const balance = totalIncome - totalExpenses;

        document.getElementById('totalIncome').textContent = this.formatCurrency(totalIncome);
        document.getElementById('totalExpenses').textContent = this.formatCurrency(totalExpenses);
        document.getElementById('balance').textContent = this.formatCurrency(balance);

        // Update balance color
        const balanceElement = document.getElementById('balance');
        if (balance >= 0) {
            balanceElement.style.color = '#00ff00';
        } else {
            balanceElement.style.color = '#dc143c';
        }
    }

    openBudgetModal() {
        const modal = document.getElementById('budgetModal');
        modal.style.display = 'block';

        // Load existing budgets
        this.categories.forEach(category => {
            const inputId = `${category.toLowerCase()}Budget`;
            const input = document.getElementById(inputId);
            if (input && this.budgets[category]) {
                input.value = this.budgets[category];
            }
        });
    }

    closeBudgetModal() {
        const modal = document.getElementById('budgetModal');
        modal.style.display = 'none';
    }

    saveBudgets() {
        this.categories.forEach(category => {
            const inputId = `${category.toLowerCase()}Budget`;
            const input = document.getElementById(inputId);
            if (input && input.value) {
                this.budgets[category] = parseFloat(input.value);
            }
        });

        this.saveData();
        this.updateBudgetOverview();
        this.closeBudgetModal();
    }

    updateBudgetOverview() {
        const budgetOverview = document.getElementById('budgetOverview');
        budgetOverview.innerHTML = '';

        if (Object.keys(this.budgets).length === 0) {
            budgetOverview.innerHTML = '<p class="no-transactions">No budgets set. Click "Set Category Budgets" to get started.</p>';
            return;
        }

        this.categories.forEach(category => {
            if (this.budgets[category]) {
                const spent = this.transactions
                    .filter(t => t.type === 'expense' && t.category === category)
                    .reduce((sum, t) => sum + t.amount, 0);

                const budget = this.budgets[category];
                const percentage = Math.min((spent / budget) * 100, 100);
                const remaining = budget - spent;

                const card = document.createElement('div');
                card.className = 'budget-card';
                card.innerHTML = `
                    <h4>${category}</h4>
                    <div class="budget-progress">
                        <div class="progress-bar">
                            <div class="progress-fill ${spent > budget ? 'over-budget' : ''}" style="width: ${percentage}%"></div>
                        </div>
                        <div class="budget-info">
                            <span>Spent: ${this.formatCurrency(spent)}</span>
                            <span>Budget: ${this.formatCurrency(budget)}</span>
                        </div>
                        <div class="budget-info">
                            <span style="color: ${remaining >= 0 ? '#00ff00' : '#dc143c'}">
                                ${remaining >= 0 ? 'Remaining' : 'Over'}: ${this.formatCurrency(Math.abs(remaining))}
                            </span>
                            <span>${percentage.toFixed(1)}%</span>
                        </div>
                    </div>
                `;
                budgetOverview.appendChild(card);
            }
        });
    }

    renderTransactions() {
        const transactionList = document.getElementById('transactionList');
        transactionList.innerHTML = '';

        // Apply filters
        let filteredTransactions = [...this.transactions];

        const filterType = document.getElementById('filterType').value;
        if (filterType !== 'all') {
            filteredTransactions = filteredTransactions.filter(t => t.type === filterType);
        }

        const filterCategory = document.getElementById('filterCategory').value;
        if (filterCategory !== 'all') {
            filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory);
        }

        // Apply sorting
        const sortBy = document.getElementById('sortBy').value;
        filteredTransactions.sort((a, b) => {
            switch (sortBy) {
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date);
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'amount-desc':
                    return b.amount - a.amount;
                case 'amount-asc':
                    return a.amount - b.amount;
                default:
                    return 0;
            }
        });

        if (filteredTransactions.length === 0) {
            transactionList.innerHTML = '<p class="no-transactions">No transactions found.</p>';
            return;
        }

        filteredTransactions.forEach(transaction => {
            const item = document.createElement('div');
            item.className = `transaction-item ${transaction.type}`;
            item.innerHTML = `
                <div class="transaction-details">
                    <div class="transaction-header">
                        <span class="transaction-description">${transaction.description}</span>
                        <span class="transaction-category">${transaction.category}</span>
                    </div>
                    <div class="transaction-meta">
                        ${new Date(transaction.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </div>
                <span class="transaction-amount ${transaction.type}">
                    ${transaction.type === 'income' ? '+' : '-'}${this.formatCurrency(transaction.amount)}
                </span>
                <div class="transaction-actions">
                    <button class="btn-small btn-edit" onclick="budgetTracker.editTransaction('${transaction.id}')">Edit</button>
                    <button class="btn-small btn-delete" onclick="budgetTracker.deleteTransaction('${transaction.id}')">Delete</button>
                </div>
            `;
            transactionList.appendChild(item);
        });
    }

    renderCharts() {
        this.renderPieChart();
        this.renderLineChart();
    }

    renderPieChart() {
        const canvas = document.getElementById('pieChart');
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = 400;
        canvas.height = 400;

        // Calculate expenses by category
        const expensesByCategory = {};
        this.categories.forEach(cat => expensesByCategory[cat] = 0);

        this.transactions
            .filter(t => t.type === 'expense')
            .forEach(t => {
                if (expensesByCategory.hasOwnProperty(t.category)) {
                    expensesByCategory[t.category] += t.amount;
                }
            });

        const total = Object.values(expensesByCategory).reduce((sum, val) => sum + val, 0);

        if (total === 0) {
            ctx.fillStyle = '#cccccc';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('No expense data available', canvas.width / 2, canvas.height / 2);
            return;
        }

        // Colors for pie chart
        const colors = ['#dc143c', '#ff4500', '#ff6347', '#ff7f50', '#ffa500', '#ff8c00', '#ff69b4'];

        let currentAngle = -Math.PI / 2;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 40;

        // Draw pie slices
        Object.entries(expensesByCategory).forEach(([category, amount], index) => {
            if (amount > 0) {
                const sliceAngle = (amount / total) * 2 * Math.PI;

                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = colors[index % colors.length];
                ctx.fill();
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 2;
                ctx.stroke();

                currentAngle += sliceAngle;
            }
        });

        // Draw legend
        const legendX = 20;
        let legendY = 20;
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';

        Object.entries(expensesByCategory).forEach(([category, amount], index) => {
            if (amount > 0) {
                const percentage = ((amount / total) * 100).toFixed(1);

                ctx.fillStyle = colors[index % colors.length];
                ctx.fillRect(legendX, legendY, 15, 15);

                ctx.fillStyle = '#ffffff';
                ctx.fillText(`${category}: ${percentage}%`, legendX + 20, legendY + 12);

                legendY += 25;
            }
        });
    }

    renderLineChart() {
        const canvas = document.getElementById('lineChart');
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = 600;
        canvas.height = 400;

        // Group transactions by month
        const monthlyData = {};

        this.transactions.forEach(t => {
            const date = new Date(t.date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = { income: 0, expenses: 0 };
            }

            if (t.type === 'income') {
                monthlyData[monthKey].income += t.amount;
            } else {
                monthlyData[monthKey].expenses += t.amount;
            }
        });

        const sortedMonths = Object.keys(monthlyData).sort();

        if (sortedMonths.length === 0) {
            ctx.fillStyle = '#cccccc';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('No transaction data available', canvas.width / 2, canvas.height / 2);
            return;
        }

        // Take last 6 months
        const displayMonths = sortedMonths.slice(-6);
        const padding = 60;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - padding * 2;

        // Find max value for scaling
        let maxValue = 0;
        displayMonths.forEach(month => {
            maxValue = Math.max(maxValue, monthlyData[month].income, monthlyData[month].expenses);
        });
        maxValue = Math.ceil(maxValue / 1000) * 1000; // Round up to nearest 1000

        // Draw axes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        // Draw grid lines
        ctx.strokeStyle = '#3a3a3a';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();

            // Y-axis labels
            const value = maxValue - (maxValue / 5) * i;
            ctx.fillStyle = '#cccccc';
            ctx.font = '12px Arial';
            ctx.textAlign = 'right';
            ctx.fillText(this.formatCurrency(value), padding - 10, y + 5);
        }

        // Calculate positions
        const pointSpacing = chartWidth / (displayMonths.length - 1 || 1);

        // Draw income line
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        displayMonths.forEach((month, index) => {
            const x = padding + index * pointSpacing;
            const y = canvas.height - padding - (monthlyData[month].income / maxValue) * chartHeight;
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        // Draw income points
        ctx.fillStyle = '#00ff00';
        displayMonths.forEach((month, index) => {
            const x = padding + index * pointSpacing;
            const y = canvas.height - padding - (monthlyData[month].income / maxValue) * chartHeight;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw expenses line
        ctx.strokeStyle = '#dc143c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        displayMonths.forEach((month, index) => {
            const x = padding + index * pointSpacing;
            const y = canvas.height - padding - (monthlyData[month].expenses / maxValue) * chartHeight;
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        // Draw expenses points
        ctx.fillStyle = '#dc143c';
        displayMonths.forEach((month, index) => {
            const x = padding + index * pointSpacing;
            const y = canvas.height - padding - (monthlyData[month].expenses / maxValue) * chartHeight;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw month labels
        ctx.fillStyle = '#cccccc';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        displayMonths.forEach((month, index) => {
            const x = padding + index * pointSpacing;
            const y = canvas.height - padding + 20;
            const [year, monthNum] = month.split('-');
            const monthName = new Date(year, parseInt(monthNum) - 1).toLocaleDateString('en-US', { month: 'short' });
            ctx.fillText(monthName, x, y);
        });

        // Draw legend
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(canvas.width - 150, 20, 20, 10);
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Income', canvas.width - 125, 30);

        ctx.fillStyle = '#dc143c';
        ctx.fillRect(canvas.width - 150, 40, 20, 10);
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Expenses', canvas.width - 125, 50);
    }

    exportToCSV() {
        if (this.transactions.length === 0) {
            alert('No transactions to export.');
            return;
        }

        let csv = 'Date,Type,Category,Amount,Description\n';

        this.transactions.forEach(t => {
            csv += `${t.date},${t.type},${t.category},${t.amount},"${t.description}"\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `budget-tracker-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    clearAllData() {
        this.transactions = [];
        this.budgets = {};
        this.saveData();
        this.updateDashboard();
        this.updateBudgetOverview();
        this.renderTransactions();
        this.renderCharts();
    }
}

// Initialize the app
const budgetTracker = new BudgetTracker();
