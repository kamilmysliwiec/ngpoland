import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, Max, Min } from 'class-validator';

export class CreateBeerDto {
  @ApiModelProperty()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @IsNotEmpty()
  category: string;

  @ApiModelProperty()
  @IsPositive()
  @Min(0)
  @Max(10)
  rating: number;
}
