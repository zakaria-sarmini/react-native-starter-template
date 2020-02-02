import { connect } from 'react-redux';
import { moduleTwoActionCreators } from './actions';

const mapDispatchToProps = moduleTwoActionCreators;

export default function connectModuleTwo(configMapStateToProps: any) {
	return connect(
		configMapStateToProps,
		mapDispatchToProps,
	);
}
