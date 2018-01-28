import * as SymptomsActions from './symptoms'
import * as DetailsActions from './details'
import * as DoctorsActions from './doctors'

export const ActionCreators = Object.assign({},
  SymptomsActions,
  DetailsActions,
  DoctorsActions
);
