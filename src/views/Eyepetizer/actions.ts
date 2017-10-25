export const tabFilter = {
  ALL: 'ALL',
  VIDEO: 'VIDEO',
  TEXT: 'TEXT',
  IMG: 'IMG'
}

export interface IAction {
  type: 'EYE_TAB_FILTER',
  filterKey: 'ALL' | 'VIDEO' | 'TEXT' | 'IMG'
}
export default {
  type: 'EYE_TAB_FILTER',
  filterKey: 'ALL'
} as IAction
