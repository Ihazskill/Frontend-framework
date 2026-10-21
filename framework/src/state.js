export function createStore(initialState) {
 
    let state = initialState;

    const listeners = [];

    function subscribe(listener){
        listeners.push(listener);
    }

    function getState() {
        return state;
    }

    function setState(newState) {
        state = newState;

        listeners.forEach(listener => {
            listener();
        })
    }

    return{
        getState,
        setState,
        subscribe
    };
}