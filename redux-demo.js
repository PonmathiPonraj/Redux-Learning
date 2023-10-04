const redux=require('redux');

const reducerCounter=(state={counter:0},action)=>{
    if(action.type==='incrementby2'){
        return {
            counter:state.counter+2
        }
    }
    if(action.type='decrementby2'){
        return {
            counter:state.counter-2
        }
    }
    return state;
}

const store = redux.createStore(reducerCounter);

const counterSubscriber=()=>{
    const latest=store.getState();
    console.log(latest)
}

store.subscribe(counterSubscriber)
store.dispatch({type:'incrementby2'});
store.dispatch({type:'decrementby2'});