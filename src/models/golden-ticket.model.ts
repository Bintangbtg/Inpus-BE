import { string } from "joi";
import mongoose from "mongoose";

const goldenSchema = new mongoose.Schema({
    golden_id: {
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
    deskripsi: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const goldenModel = mongoose.model('golden', goldenSchema);

export default goldenModel;