import { ICoreActions, ICoreState } from '../../state/core/interfaces';
import IInjectedProps from '../../core/coreInterfaces';
import { IState } from '../../state';

export interface IScreenOneProps extends IInjectedProps, ICoreState, ICoreActions {}
export interface IScreenOneState extends IState {}
