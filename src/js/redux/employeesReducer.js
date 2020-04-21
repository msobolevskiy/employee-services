const GET_EMPLOYEES = 'GET_EMPLOYEES';
const EMPLOYEES_SEARCH = 'EMPLOYEES_SEARCH';
const SEARCH = 'SEARCH';
const RESET_SEARCH = 'RESET_SEARCH';

// значение в свойстве по умолчанию 
let initionalState = {
    employees: [],
    searchedEmployees: ''
}


const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES: {
            return {
                ...state,
                employees: action.employees,          
            };
        }
        case EMPLOYEES_SEARCH: {
            return {
                ...state,
                searchedEmployees: action.searchedName,          
            };
        }
        case SEARCH: {
            return {
                ...state,
                employees: [...state.employees.filter(function(el) {
                           return (
                             el.name.toUpperCase().indexOf(...state.searchedEmployees.toUpperCase()) + 1 === 1 ||
                             el.nativeName.toUpperCase().indexOf(...state.searchedEmployees.toUpperCase()) + 1 === 1
                )}) ]       
            };
        }
        default:
            return state;
    }
} 






export const search = (targetEmployees) => ({
    type: SEARCH,
    targetEmployees: targetEmployees
})

export const employeesSearch = (searched) => ({
    type: EMPLOYEES_SEARCH,
    searchedName: searched
})

export const getUsersThunkCreator = () =>{
    return  (dispatch) =>{
            getData("http://localhost:3001/")
            .then(data => dispatch({type: GET_EMPLOYEES, employees: data}))      
    }
}

function getData(url) {
        return fetch(url).then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res;
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then(res => res.json())
            .catch((e) => {
                console.log('Error:' + e.message);
                console.log(e.response);
            })
      }


export default profileReducer;