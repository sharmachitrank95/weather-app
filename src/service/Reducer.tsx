const initialState = {
    userName:'',
    password:''
  }
export default (state = initialState, action:any) => {
    switch (action.type) {
      case 'LOGIN':{
            localStorage.setItem('userName',action.payload.userName);
            console.log("welcome"+ action.userName);
            return Object.assign({}, state, {
                userName: action.payload.userName
            });
            break;
        }
      case 'LOGOUT':{
            localStorage.setItem('userName','');
            console.log("Bye Bye");
            return Object.assign({}, state, {
                userName: action.payload.username
            });
            break;
        }
      default:
        return Object.assign({}, state, {
            userName: localStorage.getItem('userName'),
        });
    }
  }