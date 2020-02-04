import React from 'react';
import { Text } from 'native-base';
import { LocalizationContext } from './src/services';
import { rootDashboard } from './src/navigation';

class App extends React.PureComponent {
	static contextType = LocalizationContext;

	componentDidMount(): void {
		this.context.initializeAppLanguage();

		rootDashboard();
	}

	render(): React.ReactNode {
		return (
			<>
				<Text>HELLO WORLD!</Text>
			</>
		);
	}
}

export default App;
