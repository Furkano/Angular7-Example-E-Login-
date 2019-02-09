import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {

    users: User[] = [];
    constructor() { }

    getAll(): User[] {
        return this.users;
    }

    getUser(id: number): User {
        console.log(this.users);
        return this.users.find(p => p.id === Number(id));
    }
    save(user: User): User {

        user.id = Math.floor(Math.random() * (500 - 1 + 1) + 1);
        this.users.push(user);


        return user;
    }

    remove(id: number): boolean {
        const index = this.users.findIndex(p => p.id === id);
        if (index) {
            this.users.slice(index, 1);
            return true;
        }

        return false;
    }
}
