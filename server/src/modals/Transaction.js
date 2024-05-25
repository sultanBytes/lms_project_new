const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transaction_id: String,
    transaction_amt: Number,
    transaction_txs: Object,
    transaction_created: Number,
    payment_types: Object,
    transaction_details: Object,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }
});

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;