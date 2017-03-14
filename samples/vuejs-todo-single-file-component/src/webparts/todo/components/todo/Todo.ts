import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TodoItem from '../todo-item/Todoitem.vue';
import { ITodoWebPartProps } from '../../ITodoWebPartProps';

@Component({
  components: {
    'todo-item': TodoItem
  }
})
export default class Todo extends Vue implements ITodoWebPartProps {
  @Prop
  public message: string;
  @Prop
  public todos: string[];

  // public mytodos: string[] = this.todos;
  public todoTitle: string = '';

  public addTodo(): void {
    if(!this.todoTitle){
      return;
    }

    this.todos.push(this.todoTitle);
    this.todoTitle = '';
  }

  public completed(todo: string): void {
    const index: number = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}