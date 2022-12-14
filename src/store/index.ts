import Vue from "vue";
import Vuex from "vuex";
import recordsModule, {
  IStateTaskModule,
} from "@/store/recordsModule/recordsModule";

Vue.use(Vuex);

export interface IState {
  recordsModule: IStateTaskModule;
}

export default new Vuex.Store<IState>({
  modules: {
    recordsModule,
  },
});
