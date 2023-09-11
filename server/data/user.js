import bycrpt from 'bcryptjs';

const User =[
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bycrpt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'nayan kadam',
        email:'nayan@email.com',
        password:bycrpt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'utpal sharma',
        email:'utpal@email.com',
        password:bycrpt.hashSync('123456',10),
        isAdmin:false,
    },

]
export default User;