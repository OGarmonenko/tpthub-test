import { Commit } from "vuex";
import { IRecord } from "@/models/models";
import { AxiosError } from "axios";
import recordsService from "@/services/recordsService";
import CONSTANTS from "@/constants/constants";

export interface IStateTaskModule {
  listRecords: IRecord[];
  selectedRecord: IRecord | null;
  isLoading: boolean;
  Error: string | null;
  limit: number;
  skip: number;
  currentPage: number;
  totalPage: number;
}

const recordsModule = {
  state(): IStateTaskModule {
    return {
      listRecords: [],
      selectedRecord: null,
      isLoading: false,
      Error: null,
      limit: CONSTANTS.COUNT_ITEMS_ON_PAGE[0],
      skip: 0,
      currentPage: 1,
      totalPage: 0,
    };
  },
  getters: {
    LIST_RECORDS: (state: IStateTaskModule) => state.listRecords,
    SELECTED_RECORD: (state: IStateTaskModule) => state.selectedRecord,
    IS_LOADING: (state: IStateTaskModule) => state.isLoading,
    TOTAL_PAGE: (state: IStateTaskModule) => state.totalPage,
    CURRENT_PAGE: (state: IStateTaskModule) => state.currentPage,
    ERROR: (state: IStateTaskModule) => state.Error,
  },
  mutations: {
    SET_LIST_RECORDS: (state: IStateTaskModule, data: IRecord[]) =>
      void (state.listRecords = data),
    SET_SELECTED_RECORD: (state: IStateTaskModule, data: IRecord) =>
      void (state.selectedRecord = data),
    SET_IS_LOADING: (state: IStateTaskModule, data: boolean) =>
      void (state.isLoading = data),
    SET_TOTAL_PAGE: (state: IStateTaskModule, data: number) =>
      void (state.totalPage = Math.ceil(data / state.limit)),
    SET_ERROR: (state: IStateTaskModule, data: string | null) =>
      void (state.Error = data),
    SET_CURRENT_PAGE: (state: IStateTaskModule, data: number) =>
      void (state.currentPage = data),
    SET_LIMIT: (state: IStateTaskModule, data: number) =>
      void (state.limit = data),
  },

  actions: {
    async READ_LIST_RECORDS(
      { commit }: { commit: Commit },
      payload: Record<string, number>
    ) {
      commit("SET_IS_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const result = await recordsService.getRecords(payload);
        commit("SET_LIST_RECORDS", result.products);
        commit("SET_TOTAL_PAGE", result.total);
      } catch (err) {
        const error = err as AxiosError;
        commit("SET_ERROR", error.message);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async READ_SELECTED_RECORD(
      { commit }: { commit: Commit },
      payload: number
    ) {
      commit("SET_IS_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const selectedRecord = await recordsService.getRecord(payload);
        commit("SET_SELECTED_RECORD", selectedRecord);
      } catch (err) {
        const error = err as AxiosError;
        commit("SET_ERROR", error.message);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
  },
  namespaced: true,
};
export default recordsModule;
