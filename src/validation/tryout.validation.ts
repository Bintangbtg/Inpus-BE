import joi from "joi";
import {TryoutInterface} from "../types/tryout.types"

export const createTryoutValidation = (payload: TryoutInterface) => {
    const schema = joi.object({
        tryout_id: joi.string().optional(),
        nama: joi.string().required(),
        tanggal: joi.date().required(),
        penyelenggara: joi.string().required(),
        biaya_masuk: joi.number().allow('',0)
    })
    return schema.validate(payload)
}

export const updateTryoutValidation = (payload: TryoutInterface) => {
    const schema = joi.object({
        nama: joi.string().allow('',null),
        tanggal: joi.date().allow('',null),
        penyelenggara: joi.string().allow('',null),
        biaya_masuk: joi.number().allow('',0)
    })
    return schema.validate(payload)
}