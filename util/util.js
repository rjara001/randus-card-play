

import STATUS from './constants';


const updateItemGroup = (group, setData)=> {

    setData((prev) => {
  
        let _group = prev.find(_ => _.id == group.id);
        _group = group;

        return [
            ...prev
        ];
    });
}

const getStatusCode = (status)  => {
    return STATUS.find(_=>_==status);
}

export 
    { updateItemGroup, getStatusCode }