import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-app';
    @Input() userName: string;


    exercises: Array<object> = [
        {
            url: '/filter',
            title: 'Планка',
            descr: 'Описание упражнения'
        },
        {
            title: 'Отжимания',
            descr: 'Описание упражнения'
        },
        {
            title: 'Приседания',
            descr: 'Описание упражнения'
        },
        {
            title: 'Подъемы ног',
            descr: 'Описание упражнения'
        }
    ];

}
