export const getDataNameState = (state: State) => state;

export const getNoDataContainerData = createSelector([getDataNameState], (state) => ({
  loading: state.loading,
  loaded: state.loaded,
  hasData: state.hasData,
  error: state.error,
}));