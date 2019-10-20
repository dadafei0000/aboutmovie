import axios from 'axios'
function gotData(res){
    return{
        type:"GOT_DATA",
        data: res.data
    }
}
export const fetchData = () =>{
    return (dispatch,getState) => {
            axios
              .get('/movieData.json')
              .then(response=>{
                  dispatch(gotData(response))
                  console.log(response);
              })
              .catch(error=>{
                  console.log('error');
              }) 
    }
}
export const add=(data)=>{
    return {
        type:'ADD',
        data:data
    }
}
export const remove=(data)=>{
    return{
        type:'REMOVE',
        data:data
    }
}