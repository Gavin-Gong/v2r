import Foo from '../components/foo';
import actions from '../actions'
import { connect } from 'react-redux'

export interface Props {
  name?: any,
}
function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    change: () => {
      console.log('click', props)
      dispatch(actions.update(Math.random()))
    }
  }
}
function mapSateToProps () {
  return {}
}
export default connect(mapSateToProps, mapDispatchToProps)(Foo)
