import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CounterComponent } from './counter-component/counter-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  /* 通过 @ViewChild 装饰器声明子元件并籍此存取子元件中的公共 field 和 method */
  @ViewChild(CounterComponent)
  /* 父元件中创建一个子元件的实例 */
  private counter: CounterComponent;

  /* 通过 @ViewChild 存取子元件中的 field 时所有的操作必须在 ngAfterViewInit() 方法中执行而非在 ngOnInit() 方法中 */
  ngAfterViewInit(): void {
    /* couter 是定义在子元件 CounterComponent 中的实例变量, 若要在父元件中存取该变量必须在 ngAfterViewInit() 中执行 */
    /* 对于存取子元件中的公共 method, 无此限制 */
    console.log(this.counter.counter);
  }

  addOneClick() {
    /* 调取子元件的 addOne() 方法, 父元件调取子元件的方法时不需要发生在 ngAfterViewInit() 中 */
    this.counter.addOne();
  }

  minusOneClick() {
    this.counter.minusOne();

  }
}
