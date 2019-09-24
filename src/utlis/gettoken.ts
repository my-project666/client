export let setToken: (key: string, value: any) => void = (key, value) => {
    return window.localStorage.setItem(key, value);
};

 export let getToken:(key:string)=>void=(key)=>{
    return window.localStorage.getItem(key)
}

