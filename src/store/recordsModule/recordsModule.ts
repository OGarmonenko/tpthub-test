import { Commit } from "vuex";
import { IRecord } from "@/models/models";
import { AxiosError } from "axios";
import recordsService from "@/services/recordsService";

export interface IStateTaskModule {
  listRecords: IRecord[];
  selectedRecord: IRecord | null;
  isLoading: boolean;
  Error: string | null;
}

const recordsModule = {
  state: {
    listRecords: [],
    selectedRecord: null,
    isLoading: false,
    Error: null,
  },
  getters: {
    LIST_RECORDS: (state: IStateTaskModule) => state.listRecords,
    SELECTED_RECORD: (state: IStateTaskModule) => state.selectedRecord,
    IS_LOADING: (state: IStateTaskModule) => state.isLoading,
    ERROR: (state: IStateTaskModule) => state.Error,
  },
  mutations: {
    SET_LIST_RECORDS: (state: IStateTaskModule, data: IRecord[]) =>
      void (state.listRecords = data),
    SET_SELECTED_RECORD: (state: IStateTaskModule, data: IRecord) =>
      void (state.selectedRecord = data),
    SET_IS_LOADING: (state: IStateTaskModule, data: boolean) =>
      void (state.isLoading = data),
    SET_ERROR: (state: IStateTaskModule, data: string | null) =>
      void (state.Error = data),
  },

  actions: {
    async READ_LIST_RECORDS({ commit }: { commit: Commit }) {
      commit("SET_IS_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const result = await recordsService.getRecords();
        commit("SET_LIST_RECORDS", result.products);
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
