import { LocalizationContext } from '../../services/';
import CoreController from '../../core/coreController';
import { IScreenTwoProps, IScreenTwoState } from './interface';

export default class ScreenTwoController extends CoreController<
	IScreenTwoProps,
	IScreenTwoState
> {
	static contextType = LocalizationContext;

	constructor(props: IScreenTwoProps){
		super(props);
		console.log(props);
	}
}
