import tryoutModel from "../models/tryout.model";
import { TryoutInterface } from "../types/tryout.types";

export const getTryoutFromDB = async () => {
    try {
        return await tryoutModel.find();
    } catch (error) {
        console.log(error);
    }
};

export const addTryoutFromDB = async (payload: TryoutInterface) => {
    try {
        return await tryoutModel.create(payload);
    } catch (error) {
        console.log(error);
    }
};

export const updateTryoutInDB = async (id: string, payload: TryoutInterface) => {
    return await tryoutModel.findOneAndUpdate({
        tryout_id: id
    },
    {$set: payload}
    )
};

export const deleteTryoutInDB = async (id: string) => {
    return await tryoutModel.findOneAndDelete({
        tryout_id: id
    })
};