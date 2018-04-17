import mongoose from 'mongoose';

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Food', 'Transport', 'Entertainment', 'Travel', 'Health care', 'Utilities', 'Miscellaneous'],
    required: true,
    default: 'Miscellaneous',
  },
  amount: {
    type: Number,
    required: [true, 'No amount duh 🙄 '],
  },
},
  {
    timestamps: true,
  }
);

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;
