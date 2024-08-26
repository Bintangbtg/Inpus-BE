import { Request, Response } from "express";
import { createGoldenValidation, updateGoldenValidation } from "../validation/golden-ticket.validation";
import { logger } from "../utils/logger";
import { addGoldenFromDB, getGoldenFromDB, updateGoldenInDB, deleteGoldenInDB } from "../services/golden-ticket.service";
import { GoldenInterface } from "../types/golden-ticket.types";
import { v4 as uuidv4 } from 'uuid';
import goldenModel from "../models/golden-ticket.model";

export const createGolden = async (req: Request, res: Response) => {
    req.body.golden_id = uuidv4();
    const { error, value } = createGoldenValidation(req.body);
    if (error) {
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message });
    }
    try {
        await addGoldenFromDB(value);
        logger.info('Success Create Golden Ticket Information');
        return res.status(200).send({ status: true, statusCode: 200, message: 'Add Golden Ticket Success' });
    } catch (error) {
        logger.error('ERR =', 'Golden ticket information - create', error);
        return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
    }
};

export const getGolden = async (req: Request, res: Response) => {
    try {
        const goldens = await getGoldenFromDB();
        logger.info('Success get Golden Ticket Information');
        return res.status(200).send({ status: true, statusCode: 200, data: goldens });
    } catch (error) {
        logger.error('ERR =', 'Golden ticket information - get', error);
        return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
    }
};

export const getGoldenByName = async (req: Request, res: Response) => {
  const goldens: any = await getGoldenFromDB();

  const {
    params: { name }
  } = req;

  if (name) {
    const normalizedInputName = name.toLowerCase().replace(/\s+/g, '');

    const filteredgoldens = goldens.filter((golden: GoldenInterface) => {
      const normalizedTryoutName = golden.nama.toLowerCase().replace(/\s+/g, '');
      return normalizedTryoutName.includes(normalizedInputName);
    });

    if (filteredgoldens.length === 0) {
      logger.info('Data not found');
      return res.status(404).send({ status: false, statusCode: 404, data: {} });
    }

    logger.info('Success get golden ticket data');
    return res.status(200).send({ status: true, statusCode: 200, data: filteredgoldens });
  }

  logger.info('Success get golden ticket data');
  return res.status(200).send({ status: true, statusCode: 200, data: goldens });
};

export const editGolden = async (req: Request, res: Response) => {
  const {params: {id}} = req

  const { error, value } = updateGoldenValidation(req.body);
    if (error) {
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message });
    }

  try {
    await updateGoldenInDB(id, value)
    logger.info('Success update Golden ticket information');
    return res.status(200).send({ status: true, statusCode: 200, message: 'Update Golden ticket information Success' });
  } catch (error) {
    logger.error('ERR =', 'Golden ticket information - get', error);
    return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
  }
};

export const deleteGolden = async (req: Request, res: Response) => {
  const {params: {id}} = req

  try {
    await deleteGoldenInDB(id)
    logger.info('Success delete Golden ticket information');
    return res.status(200).send({ status: true, statusCode: 200, message: 'delete Golden ticket information Success' });
  } catch (error) {
    logger.error('ERR =', 'Golden ticket information - get', error);
    return res.status(500).send({ status: false, statusCode: 500, message: 'Internal Server Error' });
  }
};