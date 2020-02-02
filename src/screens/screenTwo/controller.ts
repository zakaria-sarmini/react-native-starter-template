import { LocalizationContext } from '../../services/';
import CoreController from '../../core/coreController';
import { ScreenTwoProps, ScreenTwoState } from './interface';

export default class ScreenTwoController extends CoreController<
	ScreenTwoProps,
	ScreenTwoState
> {
	static contextType = LocalizationContext;
}
