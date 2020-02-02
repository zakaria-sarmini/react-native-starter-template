import { connect } from 'react-redux';
import { moduleOneActionCreators } from './actions';

const mapDispatchToProps = moduleOneActionCreators;

export default function connectModuleOne(configMapStateToProps: any) {
	return connect(
		configMapStateToProps,
		mapDispatchToProps,
	);
}
