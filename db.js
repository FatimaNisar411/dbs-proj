const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL database connection configuration
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'FNhn4282#',
  database: 'spendwise'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});



// Endpoint to fetch categories from the database
app.get('/api/categories', (req, res) => {
  const query = 'SELECT category_name FROM expense_categories';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err); // Log the specific error
      res.status(500).json({ error: 'Error fetching categories', details: err.message });
    } else {
      res.json(results);
    }
  });
});




// Create an income entry
app.post('/api/income', (req, res) => {
  const { firebase_user_id, source_name, amount, date_received } = req.body;

  const query = 'INSERT INTO income (firebase_user_id, source_name, amount, date_received) VALUES (?, ?, ?, ?)';
  db.query(query, [firebase_user_id, source_name, amount, date_received], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error creating income entry' });
    } else {
      res.status(201).json({ message: 'Income entry created successfully', results });
    }
  });
});

// Create an expense entry
app.post('/api/expenses', (req, res) => {
  const { firebase_user_id, category_id, amount, date_spent, custom_category_id } = req.body;

  const query = 'INSERT INTO expenses (firebase_user_id, category_id, amount, date_spent, custom_category_id) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firebase_user_id, category_id, amount, date_spent, custom_category_id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error creating expense entry' });
    } else {
      res.status(201).json({ message: 'Expense entry created successfully', results });
    }
  });
});

app.put('/api/expenses/:expense_id', (req, res) => {
  const { category_id, amount, date_spent, custom_category_id } = req.body;
  const { expense_id } = req.params;

  const query = 'UPDATE expenses SET category_id=?, amount=?, date_spent=?, custom_category_id=? WHERE expense_id=?';
  db.query(query, [category_id, amount, date_spent, custom_category_id, expense_id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error updating expense entry' });
    } else {
      res.json({ message: 'Expense entry updated successfully', results });
    }
  });
});


app.delete('/api/expenses/:expense_id', (req, res) => {
  const { expense_id } = req.params;

  const query = 'DELETE FROM expenses WHERE expense_id=?';
  db.query(query, expense_id, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting expense entry' });
    } else {
      res.json({ message: 'Expense entry deleted successfully', results });
    }
  });
});


app.get('/api/expenses/:firebase_user_id', (req, res) => {
  const { firebase_user_id } = req.params;

  const query = 'SELECT * FROM expenses WHERE firebase_user_id=?';
  db.query(query, firebase_user_id, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching expenses' });
    } else {
      res.json({ expenses: results });
    }
  });
});

// Start the Express server
const PORT = 3000; // Change to your desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes or other uses if needed

// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'FNhn4282#',
//   database: 'spendwise'
// });

// // Connect to MySQL database
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the MySQL server.');
// });

// module.exports = db;
