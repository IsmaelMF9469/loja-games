import { Module } from "@nestjs/common";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";


@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [],
    exports: [Bcrypt]
})
export class AuthModule{}