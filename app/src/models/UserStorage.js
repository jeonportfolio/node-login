"use strict";

class UserStorage {
    static #users = {
        id: ["hihi", "로그인", "하이"],
        psword: ["1234", "1234", "123456"],
        name: ["이름1", "이름2", "이름3"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        console.log(newUsers);
        return newUsers;
    }
    
}

module.exports = UserStorage;