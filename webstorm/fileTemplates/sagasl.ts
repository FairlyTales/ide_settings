import { Nullable, SORT_ORDER_ENUM } from '@core-ui/types';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

const LIMIT = 30;

interface ISortAndOrderDesc {
  orderBy: Nullable<>;
  order: SORT_ORDER_ENUM;
}

interface IFetchItems {
  page: number;
}

function* fetchItems({ page }: IFetchItems) {
  const filters = yield select(getFilters);
  const { orderBy, order }: ISortAndOrderDesc = yield select(getSortAndOrder);

  const url = ``;
  const query = {
    page,
    per_page: LIMIT,
    order_by: orderBy || undefined,
    is_desc: order === SORT_ORDER_ENUM.DESC,
  };

  const items: ItemsSchema[] = yield call(GET, url, query);

  return items;
}

function* getList() {
  try {
    const items: ItemsSchema[] = yield fetchItems({ page: 0 });

    yield put(actions.setPaginationPage(0));
    yield put(
      actions.setList({
        value: items,
        hasData: Boolean(items.length),
        isAllDataReceived: items.length < LIMIT,
      })
    );
  } catch (e) {
    yield all([
      put(actions.setList({ error: e as Error, hasData: false, isAllDataReceived: false })),
      call(responseError, e)
    ]);
  }
}

function* getChunkList() {
  try {
    const page: number = yield select(getPaginationPage);
    const items: ItemsSchema[] = yield fetchItems({ page: page + 1 });

    yield put(actions.setPaginationPage(page + 1));
    yield put(
      actions.setChunkList({
        value: items,
        isAllDataReceived: items.length < LIMIT,
      })
    );
  } catch (e) {
    yield call(responseError, e);
  }
}

export default [
  takeLatest(actions.getList, getList),
  takeLatest(actions.getChunkList, getChunkList),
];
