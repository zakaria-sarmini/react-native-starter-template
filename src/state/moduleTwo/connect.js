import { connect } from 'react-redux';
import { moduleTwoActionCreators } from './actions';

function mapStateToProps({ data }) {
	return {
		data
	};
}

const mapDispatchToProps = moduleTwoActionCreators;

export function connectModuleTwo(configMapStateToProps = mapStateToProps) {
	return connect(
		configMapStateToProps,
		mapDispatchToProps
	);
}
