import {ButtonKind} from '../enums';

export interface IButton {
  kind: ButtonKind;
  onClick: (event?: MouseEvent) => any;
}
