import { server, client } from 'config/config.server'

export function linkTo(target) {
    window.location.href = `${client}${target}`
}


export const APIServer = '192.168.0.104:81'