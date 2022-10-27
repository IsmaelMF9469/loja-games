import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UsuarioModule } from "src/usuario/usuario.module";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.services";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";


@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h' }
        })
    ],
    providers: [Bcrypt, AuthService, LocalStrategy,JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule{}