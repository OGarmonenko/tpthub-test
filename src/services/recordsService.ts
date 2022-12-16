import apiService from "./apiService";
import CONSTANTS from "./../constants/constants";
import { IRecord } from "@/models/models";
import { AxiosResponse } from "axios";

const _productsUrl = CONSTANTS.API.PRODUCTS_PATH;

const recordsService = {
  async getRecords(params: Record<string, number>) {
    return apiService
      .get(_productsUrl, { params })
      .then((response: AxiosResponse) => response.data);
  },
  async getRecord(params: number): Promise<IRecord> {
    return apiService
      .get(`${_productsUrl}${params}`, {})
      .then((response: AxiosResponse) => response.data);
  },
};
export default recordsService;
