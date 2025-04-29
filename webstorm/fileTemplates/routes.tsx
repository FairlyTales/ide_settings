import { extractFlattenPaths, Route } from '@core-ui/redux-router';

const key: keyof State = ;

const routes: Route[] = [
  {
    key,
    exact: true,
    path: ,
    component: ,
    effects: [],
  },
];

export const PATHS = extractFlattenPaths(routes);

export default routes;
