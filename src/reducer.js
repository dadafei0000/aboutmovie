
const initState={
  myList:[],
  recommendationList:[]
};
const reducer=(state=initState,action)=>{
  switch(action.type){
      case 'GOT_DATA':
          return{
              ...state,
              myList: action.data.mylist,
              recommendationList: action.data.recommendations
          }
      case 'ADD':
          return {
              ...state,
              myList: [...state.myList, action.data],
              recommendationList: state.recommendationList.filter(movie=>movie.id!==action.data.id)
          }
      case 'REMOVE':
          return {
              ...state,
              myList:state.myList.filter(movie=>movie.id!==action.data.id),
              recommendationList:[...state.recommendationList,action.data]
          }
      default:
          return state;   
  }
};
export default reducer