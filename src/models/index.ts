export interface IUser {
    id: number;
    name: string;
    avatar: string;
    favorites: number[]; // stored ID 
    sharedWithMe: number[]; // stored ID 
}

export interface ICustomObject {
    id: number;
    type: 'map' | 'shape';
    name: string;
    status: 'uploaded' | 'in-progress';
    position: [number, number];
    owner: number; // User ID 
    creationDate: number; // Date in unix timestamp
    lastEditDate: number; // Date in unix timestamp
}