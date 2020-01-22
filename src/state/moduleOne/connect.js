import { connect } from 'react-redux';
import { moduleOneActionCreators } from './actions';

function mapStateToProps({ data }) {
	return {
		data
	};
}

const mapDispatchToProps = moduleOneActionCreators;

export default function connectModuleOne(configMapStateToProps = mapStateToProps) {
	return connect(
		configMapStateToProps,
		mapDispatchToProps
	);
}
