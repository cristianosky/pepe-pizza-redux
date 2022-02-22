export interface User{
    token: string,
    perfil:perfil
}

export interface perfil{
    id: number,
    name: string,
    rol: number
}