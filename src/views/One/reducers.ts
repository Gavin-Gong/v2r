let reducer =  {
  setFilter (state: any, action: any) {
    return {
      filterKey: action.field,
      from: 'list'
    }
  }
}

export default reducer