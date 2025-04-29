import { createSelector } from 'reselect';

const getChunkLoading = (state: State) => state;
const getAllDataReceived = (state: State) => state;

export const chunkLoaderSelector = createSelector(
  [getChunkLoading, getAllDataReceived],
  (isChunkLoading, isAllDataReceived) => ({
    isChunkLoading,
    isAllDataReceived,
  })
);

const getListState = (state: State) => state.backoffice.inbox.list;

export const getNoDataContainerData = createSelector([getListState], (state) => ({
  loading: state.loading,
  loaded: state.loaded,
  hasData: state.hasData,
  error: state.error,
}));

const getOrderBy = (state: State) => state;
const getOrder = (state: State) => state;

export const getSortAndOrder = createSelector([getOrderBy, getOrder], (orderBy, order) => ({
  orderBy,
  order,
}));

export const getPaginationPage = (state: State) => state;

export default createSelector(
  [getListState],
  (listState) => ({
    items: listState.value,
  })
);
