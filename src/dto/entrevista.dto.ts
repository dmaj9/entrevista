export class entrevistadto {

    
}
import { IsString, IsNotEmpty } from 'class-validator';

export class ParametrosDto {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'El apellido paterno no puede estar vacío' })
  @IsString({ message: 'El apellido paterno debe ser una cadena de caracteres' })
  apellido_p: string;

  @IsNotEmpty({ message: 'El apellido materno no puede estar vacío' })
  @IsString({ message: 'El apellido materno debe ser una cadena de caracteres' })
  apellido_m: string;
}