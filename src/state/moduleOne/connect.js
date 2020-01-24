import { connect } from 'react-redux';
import { moduleOneActionCreators } from './actions';

const mapDispatchToProps = moduleOneActionCreators;

export default function connectModuleOne(configMapStateToProps) {
	return connect(
		configMapStateToProps,
		mapDispatchToProps
	);
}
