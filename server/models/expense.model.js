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

ExpenseSchema.statics.findOneOrCreate = function (expense, callback) {
  const self = this;
  self.findOne({ name: expense.name }, (error, result) => {
    console.log(result, '****');
    console.log(error, 'error');
    return result ? callback(error, result) : self.create(expense, (error, result) => { return callback(error, result); });
  });
};

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;
