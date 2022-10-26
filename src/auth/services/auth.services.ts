import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/services/usuario.services";
import { Bcrypt } from "../bcrypt/bcrypt";

@Injectable()
export class AuthService {
    constructor (
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}

        async validateUser (username: string, password: string): Promise <any> {
            const buscaUsuario = await this.usuarioService.finByUsuario(username)

            if(!buscaUsuario)
                throw new HttpException('Usuario não encontrado !!!!!!!!!', HttpStatus.NOT_FOUND)

            const match = await this.bcrypt.compararSenhas(password, buscaUsuario.senha)

            if (buscaUsuario && match) {
                const { senha, ...result } = buscaUsuario;
                return result;
            }
            return null
        }

        async login (UsuarioLogin: any) {
            const payLoad = {
                username: UsuarioLogin.usuario,
                sub: 'blogpessoal'
            };

            return {
                usuario: UsuarioLogin.usuario,
                token: `Bearer ${this.jwtService.sign(payLoad)}`
            }
        }
}