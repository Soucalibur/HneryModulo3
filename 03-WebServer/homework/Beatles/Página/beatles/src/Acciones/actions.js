export const SHOW_INFO = "SHOW_INFO"

export const showInfo = ()=>{
    return function (dispatch) {
        fetch(`http://localhost:3002/api`)
          .then((response) => response.json())
          .then((data) => dispatch({ type: SHOW_INFO, payload: data }));
      };
}