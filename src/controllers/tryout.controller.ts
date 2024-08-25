import { Request, Response } from "express";
import { createTryoutValidation, updateTryoutValidation } from "../validation/tryout.validation";
import { logger } from "../utils/logger";
import { addTryoutFromDB, getTryoutFromDB, updateTryoutInDB, deleteTryoutInDB } from "../services/tryout.service";
import { TryoutInterface } from "../types/tryout.types";
import { v4 as uuidv4 } from 'uuid';
import tryoutModel from "../models/tryout.model";

export const createTryout = async (req: Request, res: Response) => {
    req.body.tryout_id = uuidv4();
    const { error, value } = createTryoutValidation(req.body);
    if (error) {
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message });
    }
    try {
        await addTryoutFromDB(value);
        logger.info('Success Create Tryout');
        return res.status(200).send({ status: true, statusCode: 200, message: 'Add Tryout Success' });
    } catch (error) {
        logger.error('ERR =', 'tryout - create', error);
        return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
    }
};

export const getTryout = async (req: Request, res: Response) => {
    try {
        const tryouts = await getTryoutFromDB();
        logger.info('Success get Tryout');
        return res.status(200).send({ status: true, statusCode: 200, data: tryouts });
    } catch (error) {
        logger.error('ERR =', 'tryout - get', error);
        return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
    }
};

export const getTryoutByName = async (req: Request, res: Response) => {
    const tryouts: any = await getTryoutFromDB()

    const {
      params: { name }
    } = req

    if (name) {
      const filtertryout = tryouts.filter((tryout: TryoutInterface) => {
        if (tryout.nama === name) {
          return tryout
        }
      })
      if (filtertryout.length === 0) {
        logger.info('Data not found')
        return res.status(404).send({ status: false, statusCode: 404, data: {} })
      }
      logger.info('Success get tryout data')
      return res.status(200).send({ status: true, statusCode: 200, data: filtertryout[0] })
    }

    logger.info('Success get tryout data')
    return res.status(200).send({ status: true, statusCode: 200, data: tryouts 
    })
};

export const editTryout = async (req: Request, res: Response) => {
  const {params: {id}} = req

  const { error, value } = updateTryoutValidation(req.body);
    if (error) {
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message });
    }

  try {
    await updateTryoutInDB(id, value)
    logger.info('Success update Tryout');
    return res.status(200).send({ status: true, statusCode: 200, message: 'Update Tryout Success' });
  } catch (error) {
    logger.error('ERR =', 'tryout - get', error);
    return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
  }
};

export const deleteTryout = async (req: Request, res: Response) => {
  const {params: {id}} = req

  try {
    await deleteTryoutInDB(id)
    logger.info('Success delete Tryout');
    return res.status(200).send({ status: true, statusCode: 200, message: 'delete Tryout Success' });
  } catch (error) {
    logger.error('ERR =', 'tryout - get', error);
    return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
  }
};