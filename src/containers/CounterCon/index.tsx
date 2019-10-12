import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {increment, decrement} from '../../redux/action'
import {StoreState} from '../../types'
import Counter from '../../pages/Counter'

const mapStateToProps = (state: StoreState): { value: number } => ({
    value: state
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
