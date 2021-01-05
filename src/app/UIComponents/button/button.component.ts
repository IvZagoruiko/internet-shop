import {Component, Input} from '@angular/core';
import {IBooleanMap} from '../../interfaces';
import {ButtonKind} from '../../enums';
import {Button} from '../../classes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public button: Button;

  public getClass(): IBooleanMap {
    return {
      search: this.button.kind === ButtonKind.search,
      buy: this.button.kind === ButtonKind.buy,
      basket: this.button.kind === ButtonKind.basket
    };
  }
}
