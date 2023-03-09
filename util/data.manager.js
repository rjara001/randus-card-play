import data from '../data/dummy.db.json'
import STATUS from './constants';
import {updateItemGroup} from '../util/util';

const getNextValue = (group) => {

    let availables = group.list.filter(_=> _.covered === true);

    if (availables.length==0)
        return null;
    // console.log(availables)
    let arbitraryIndex = getRandomArbitrary(0, availables.length);
    let nextElement = availables[arbitraryIndex];
 
    if (nextElement)
        nextElement.textGuess = '';

    return nextElement;
}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

const getData = () => {
    let output = []

    data.forEach(element => {
        let group = {
            id: element.id
            , name:element.name
            , list: getListFromId(element.id)
            , currentStatus: 0
        }
        output.push(group);
    });


    return output.map(totalizator);
}

const totalizator = (group) => {
    return { ... group, total:group.list.length, learned:0, revealed:0, discovered:0, recalled:0, recognized:0, unknowed: group.list.length}
}

const getListFromId = (id) => {
    let items = require(`../data/db.${id}`);
    items.forEach(_=>{
        _.covered = true;
        _.Status = STATUS.unknowed
    })

    return items;
}

const summarizer = (group) => {
    group.total = group.list.length;

    group.list.forEach(_=>{
        if (_.learned>0)
            group.learned++;
        if (_.recalled>0)
            group.recalled++;
        if (_.unknowed>0)
            group.unknowed++;
    });

    return group;
}

export {getData , getNextValue, summarizer};