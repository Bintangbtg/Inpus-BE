import joi from "joi";
import {GoldenInterface} from "../types/golden-ticket.types"

export const createGoldenValidation = (payload: GoldenInterface) => {
    const schema = joi.object({
        golden_id: joi.string().optional(),
        nama: joi.string().required(),
        tanggal: joi.date().required(),
        penyelenggara: joi.string().required(),
        biaya_masuk: joi.number().allow('',0),
        deskripsi: joi.string().required()
    })
    return schema.validate(payload)
}

export const updateGoldenValidation = (payload: GoldenInterface) => {
    const schema = joi.object({
        nama: joi.string().allow('',null),
        tanggal: joi.date().allow('',null),
        penyelenggara: joi.string().allow('',null),
        biaya_masuk: joi.number().allow('',0),
        deskripsi: joi.string().allow('',null)
    })
    return schema.validate(payload)
}