
let id =  parseInt(localStorage.getItem('maxId') || '0')
const createId = ():number =>{
    id+=1;
    localStorage.setItem('maxId',id.toString())
    return id
}

export {createId}
