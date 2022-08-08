import { Component } from '@angular/core';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

// type PlannerTask = {
//   done: Boolean;
//   description: string;
// }

interface PlannerTask {
  done: Boolean;
  description: string
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
  tasks: PlannerTask[] =[];
  taskInputValue = '';
  faCoffee = faTrashCan ;

  addTask(): void {
    if (this.taskInputValue) {
      const newTask = {
        done: false,
        description: this.taskInputValue
      };

      this.tasks.push(newTask);
      this.taskInputValue = '';
    }
  }

  deleteTask(index: number): void {
    //this.tasks.splice(index,1)
    this.tasks = this.tasks.filter((task, i ) => i !== index);
  }

  deleteAllTasks(taskList: object[]):void {
    this.tasks = [];
  }

}
