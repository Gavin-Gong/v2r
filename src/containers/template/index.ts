import Template from '../../components/template';
// import actions from '../../actions'
// import { StoreState } from '../../typings'
import { connect } from 'react-redux'

function mapStateToProps(state: any) {
  return {
    name: state.update.name
  }
}
export default connect(mapStateToProps)(Template)
