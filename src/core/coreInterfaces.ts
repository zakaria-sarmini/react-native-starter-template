import { ReactChild } from 'react';
import { INavigationProps } from '../navigation';

export default interface IInjectedProps extends INavigationProps {
	children?: ReactChild;
}
