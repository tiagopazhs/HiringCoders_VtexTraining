enum permissions {
    admin,
    editor,
    comon
}

const user = {
    level: permissions.admin
};  

console.log(user);


enum secondPermissions {
    admin = 'a',
    editor = 'b',
    comon = 'c'
}

const secondUser = {
    level: secondPermissions.admin
};

console.log(secondUser);