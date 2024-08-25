import { Application, Router } from "express";
import { GoldenTicket } from "./golden-ticket";
import { Tryout } from "./tryout";
import {auth} from "./auth";

const _routes: Array<[string, Router]> = [
    ['/goldenticket', GoldenTicket],
    ['/tryout', Tryout],
    ['/', auth]
]

export const routes = (app: Application) => {
    _routes.forEach((route)=>{
        const [url, router] = route
        app.use(url, router)
    })
}