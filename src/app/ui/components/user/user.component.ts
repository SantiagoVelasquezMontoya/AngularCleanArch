import { PostCreateUserUseCase } from './../../../domain/usecases/user/user.usecase';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  name: string;
  job: string;
  constructor(private userUseCase: PostCreateUserUseCase) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.name + this.job);
    console.log('|Submit');
    this.userUseCase
      .invoke({ name: this.name, job: this.job })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
