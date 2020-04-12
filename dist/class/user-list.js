"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserList {
    constructor() {
        this.list = [];
    }
    // agregar un usuario
    add(user) {
        this.list.push(user);
        console.log(this.list);
        return user;
    }
    // actualizar nombre
    updateUser(id, name) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] === id) {
                this.list[i]['name'] = name;
                break;
            }
        }
        console.log('actualizando usaurio');
        console.log(this.list);
    }
    // devolver la lista
    getList() {
        return this.list;
    }
    // devolver usuario
    getUser(id) {
        return this.list.find((user) => {
            return user.id === id;
        });
    }
    // usuario por sala
    getUsersSala(sala) {
        return this.list.filter((users) => {
            return users.sala === sala;
        });
    }
    // borrar un usuario
    removeUser(id) {
        const tempUser = this.getUser(id);
        this.list = this.list.filter((user) => {
            return user.id !== id;
        });
        console.log('usuario removido ', tempUser);
        return tempUser;
    }
}
exports.UserList = UserList;
