import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TodoService {
  constructor(private http: HttpClient) {
  }

  apiUrl = 'https://react-todo-material.herokuapp.com/api/todo';


  getTodos(): any {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }


  createTodo(value: string): any {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, {text: value}).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  updateTodo(id: number): any {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/' + id, {_method: 'PATCH'}).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

}
