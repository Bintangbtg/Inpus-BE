import { Application, Router } from "express";
import { Golden } from "./golden-ticket";
import { Tryout } from "./tryout";
import {auth} from "./auth";

const _routes: Array<[string, Router]> = [
    ['/goldenticket', Golden],
    ['/tryout', Tryout],
    ['/', auth]
]

export const routes = (app: Application) => {
    _routes.forEach((route)=>{
        const [url, router] = route
        app.use(url, router)
    })
}