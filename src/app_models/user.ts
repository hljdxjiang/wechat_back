import React from "react"

export interface Permission {
    path: string
    name: string
    description?: string
}

export interface Menu {
    menu_id?: string
    path?: string
    desc?: string
    type?: string
    key?: string
    children?: Menu[]
}

export interface UserInfo {
    roleId?: string
    userName: string
    displayName?: string
    password?: string
    token: string
    permission: Permission[]
    menus: Menu[]
}

export interface Revoke {
    revokeid: string
}

export interface ButtonInfo {
    title: string,
    key: string,
    func: (arg0?: unknown[]) => Promise<{}>;
}

export interface TableColumn {
    title: string
    key: string
    dataIndex: string
    editType?: string,
    editFlag?:boolean,
    requried?:boolean,
    align?:string,
    data?: Object[],
    rules?:Object[],
    tableShow?: boolean
    render?:React.ReactNode
}

export interface SearchColumn {
    key: string,
    title?:string,
    rules?:Object[],
    slot?: React.ReactNode,
    dataIndex?: string,
    initialValue?:string
}
