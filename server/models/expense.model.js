import mongoose from 'mongoose';

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['FOOD',
      'TRANSPORT',
      'ENTERTAINMENT',
      'TRAVEL',
      'HEALTH CARE',
      'UTILITIES',
      'MISCELLANEOUS',
    ],
    required: true,
    default: 'MISCELLANEOUS',
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
