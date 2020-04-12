import { User } from "./user";

export class UserList {
    private list: User[] = [];
    

    constructor() {

    }

    // agregar un usuario
    public add(user: User) {
        this.list.push(user);
        console.log(this.list);
        
        return user;
    }

    // actualizar nombre

    public updateUser( id: string, name: string) {
        for (let i = 0; i < this.list.length; i++) {
            if( this.list[i]['id'] === id ) {
                this.list[i]['name'] = name;
                break
            }
        }

        console.log('actualizando usaurio');
        console.log(this.list);
           
    }

    // devolver la lista
    public getList() {
        return this.list;
    }

    // devolver usuario
    public getUser(id: string) {
        return this.list.find( (user) => {
            return  user.id === id
        })
    }

    // usuario por sala
    public getUsersSala( sala: string) {
        return this.list.filter( (users) => {
            return users.sala === sala;
        })
    }

    // borrar un usuario
    public removeUser(id: string) {
        const tempUser = this.getUser( id );

        this.list = this.list.filter((user) => {
            return user.id !== id;
        });

        console.log('usuario removido ', tempUser);
        

        return tempUser;

    }
}