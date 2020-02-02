import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import initializeStore from '../store/store';

let store: Store;

class AppStoreProvider extends PureComponent {
	getChildContext() {
		return {
			store,
		};
	}

	static childContextTypes = {
		store: PropTypes.shape({}),
	};

	render(): React.ReactNode {
		const { children } = this.props;

		store = store || initializeStore();

		return <Provider store={store}>{children}</Provider>;
	}
}

export default AppStoreProvider;
