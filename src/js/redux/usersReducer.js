const AUTHORIZED_USER = 'AUTHORIZED_USER';

let initionalState = {
    users: [{
            id: 1,
            name: "maxim",
            password: "123",
            status: "user"
        },
        {
            id: 2,
            name: "yana",
            password: "123",
            status: "edditor"
        },
        {
            id: 3,
            name: "ihar",
            password: "123",
            status: "admin"
        }
    ],
    authorizedUser: [],
}

const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case AUTHORIZED_USER: {
            return {
                ...state,
                authorizedUser: state.users.filter(function(el) {
                    return el.name === action.name && el.password === action.password;
                  }),
            };
        }
        default:
            return state;
    }
}

export const authorization = (login, password) => ({
    type: AUTHORIZED_USER,
    name: login,
    password: password
})



export default profileReducer;