import { ICustomObject, IUser } from "./models";

/**
 * Simulate a login to the database
 */
export const login = () => {
    const myId = 4;
    localStorage.setItem('user_id', JSON.stringify(myId));
    const myself = users.find((user) => user.id === myId);
    return myself;
}

/**
 * Returns the whole project of the given ID
 * @param id {number} ID of the project you want to fetch
 * @returns {ICustomObject} Detailed project you want
 */
export const getProjectById = (id: number): ICustomObject => {
    const result = db.find((f: ICustomObject) => f.id === id);
    return result!;
}

export const users: IUser[] = [
    {
        id: 1,
        name: 'Adri',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        favorites: [],
        sharedWithMe: [],
    },
    {
        id: 2,
        name: 'Carlos',
        avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        favorites: [],
        sharedWithMe: [],
    },
    {
        id: 3,
        name: 'Sara',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        favorites: [],
        sharedWithMe: [],
    },
    {
        id: 4,
        name: 'Gonzalo',
        avatar: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=592&q=80',
        favorites: [2, 4, 7],
        sharedWithMe: [1, 2, 3, 8],
    },
];

export const db: ICustomObject[] = [
    {
        id: 1,
        type: 'map',
        name: 'Hola',
        status: 'in-progress',
        position: [40, -3],
        owner: 1,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 2,
        type: 'map',
        name: 'Que tal',
        status: 'uploaded',
        position: [12, 3],
        owner: 2,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 3,
        type: 'shape',
        name: 'Como estas',
        status: 'in-progress',
        position: [34, -13],
        owner: 3,
        creationDate: 1606395208910,
        lastEditDate: 1607000034114,
    },
    {
        id: 4,
        type: 'map',
        name: 'Hola',
        status: 'uploaded',
        position: [21, 10],
        owner: 1,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 5,
        type: 'shape',
        name: 'Todo bien',
        status: 'uploaded',
        position: [4, -30],
        owner: 2,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 6,
        type: 'shape',
        name: 'Genial',
        status: 'in-progress',
        position: [90, 2],
        owner: 3,
        creationDate: 1606395208910,
        lastEditDate: 1607000034114,
    },
    {
        id: 7,
        type: 'shape',
        name: 'Perfecto',
        status: 'uploaded',
        position: [41, -9],
        owner: 1,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 8,
        type: 'map',
        name: 'Me alegro',
        status: 'uploaded',
        position: [22, -23],
        owner: 2,
        creationDate: 1606395208910,
        lastEditDate: 1607000034114,
    },
    {
        id: 9,
        type: 'map',
        name: 'Y yo tambien',
        status: 'uploaded',
        position: [17, -14],
        owner: 4,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 10,
        type: 'shape',
        name: 'Muchas gracias',
        status: 'uploaded',
        position: [33, 13],
        owner: 4,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 11,
        type: 'map',
        name: 'De nada',
        status: 'in-progress',
        position: [90, 90],
        owner: 4,
        creationDate: 1606395208910,
        lastEditDate: 1607431454189,
    },
    {
        id: 12,
        type: 'shape',
        name: 'Para eso estamos',
        status: 'uploaded',
        position: [56, -39],
        owner: 4,
        creationDate: 1606395208910,
        lastEditDate: 1607000034114,
    },
];