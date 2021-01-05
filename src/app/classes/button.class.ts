import {IButton} from '../interfaces';
import {ButtonKind} from '../enums';

export class Button implements IButton {
  public kind: ButtonKind;
  public onClick: (event?: MouseEvent) => any;

  constructor(onClick: (event?: MouseEvent) => any, kind: ButtonKind = ButtonKind.default) {
    this.kind = kind;
    this.onClick = onClick;
  }
}
