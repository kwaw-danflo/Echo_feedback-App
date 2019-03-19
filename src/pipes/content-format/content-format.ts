import { Pipe, Injectable } from '@angular/core';


@Pipe({
  name: 'contentFormat',
})
@Injectable()
export class contentFormat {

  transform(str: string) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
}


}
