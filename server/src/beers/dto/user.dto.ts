import { Exclude, Transform } from 'class-transformer';

export class UserDto {
  firstname: string;
  lastname: string;

  @Exclude()
  password: string;

  email: string;

  @Transform(value => value.name)
  role: any;
}
