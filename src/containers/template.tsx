import Template from '../components/template';
import actions from '../actions'
import { StoreState } from '../typings'
import { connect } from 'react-redux'

export function mapStateToProps({ name }: StoreState) {
  return {
    name: 'ff'
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    change: () => dispatch(actions.fetchData)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)