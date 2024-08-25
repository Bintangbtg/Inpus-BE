import mongoose from "mongoose";

const tryoutSchema = new mongoose.Schema({
    tryout_id: {
        type: String,
        unique: true
    },
    nama: {
        type: String,
        required: true,
    },
    tanggal: {
        type: Date,
        required: true,
    },
    penyelenggara: {
        type: String,
        required: true,
    },
    biaya_masuk: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const tryoutModel = mongoose.model('tryout', tryoutSchema);

export default tryoutModel;