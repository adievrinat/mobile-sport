import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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



  constructor() { }

  ngOnInit() {

  }
}
