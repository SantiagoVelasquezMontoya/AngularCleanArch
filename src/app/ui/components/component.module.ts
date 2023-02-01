import { UserService } from './../../infrastructure/driven-adapter/user/user.service';
import { PostCreateUserUseCase } from './../../domain/usecases/user/user.usecase';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DomainModule } from '../../domain/domain.module';

// const userCreateUserCaseFactory = (userGateway: CreateUserGateway) =>
//   new PostCreateUserUseCase(userGateway);

// function userCreateUserCaseFactory(
//   userGateway: CreateUserGateway
// ): PostCreateUserUseCase {
//   return new PostCreateUserUseCase(userGateway);
// }

// export const userCreateUserCaseProvider = {
//   provide: CreateUserGateway,
//   useFactory: userCreateUserCaseFactory,
//   deps: [CreateUserGateway],
// };
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule,
  ],
  providers: [
    {
      provide: CreateUserGateway,
      useClass: UserService,
    },
  ],
  exports: [UserComponent],
})
export class ComponentModule {}
