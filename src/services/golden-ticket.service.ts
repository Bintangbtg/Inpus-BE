import goldenModel from "../models/golden-ticket.model";
import { GoldenInterface } from "../types/golden-ticket.types";

export const getGoldenFromDB = async () => {
    try {
        return await goldenModel.find();
    } catch (error) {
        console.log(error);
    }
};

export const addGoldenFromDB = async (payload: GoldenInterface) => {
    try {
        return await goldenModel.create(payload);
    } catch (error) {
        console.log(error);
    }
};

export const updateGoldenInDB = async (id: string, payload: GoldenInterface) => {
    return await goldenModel.findOneAndUpdate({
        golden_id: id
    },
    {$set: payload}
    )
};

export const deleteGoldenInDB = async (id: string) => {
    return await goldenModel.findOneAndDelete({
        golden_id: id
    })
};