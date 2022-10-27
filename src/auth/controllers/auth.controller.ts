import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from "../entities/usuario.login.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.services";



@Controller('/auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async Login (@Body() user: UsuarioLogin): Promise <any> {
        return this.authService.login(user)
    }
    
}