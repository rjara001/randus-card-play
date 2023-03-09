
import {STATUS, MAPSTATGE} from './constants';


const changeCurrentStatus = (group) => {
  return prev => {
    let newPrev = {... prev};

    let _group = newPrev.groups.find(_ => _.id == group.id);
    if (_group.currentStatus<=3)
      _group.currentStatus++;

    return newPrev;
  }
}

const changeStatus = (group) => {
  return prev => {
    let newPrev = {... prev}

    let _group = newPrev.groups.find(_ => _.id == group.id);
    _group.recalled++;
    _group.unknowed = _group.list.length;
    _group.playing = 0;

    _group.list.forEach(word => {
      word.covered = true;
    });
    
    return newPrev;
  };
}

const setNewStage = () => {
  switch (_word.Status) {
    case STATUS.unknowed:
      return STATUS.learned;
    case STATUS.revealed:
      {
        _group.unknowed--;
        _group.revealed++;
        _word.Status = STATUS.revealed;
      }
      break;
    case STATUS.discovered:
      {
        _group.unknowed--;
        _group.discovered++;
        _word.Status = STATUS.discovered;
      }
      break;
    case STATUS.recognazed:
      {
        _group.unknowed--;
        _group.recognazed++;
        _word.Status = STATUS.recognazed;
      }
      break;
    default:
      {

        _group.unknowed = _group.list.filter(_=>_.Status!=STATUS.learned).length;
        _group.playing = 0;
        _group.revealed = 0;
        _group.recalled = 0;
        _group.recognazed = 0;
        _group.learned = 0;
        _group.recalled++;
      }
}
}
const changeStatusGroup = (payload) => {

    let _group = {...payload.group};
    let indexWord = _group.list.findIndex(_=>_.TextA == payload.word.TextA);

    _group.list = _group.list.map(_=>{
      if (_.TextA == word.TextA)
        return {... word, Status: MAPSTATGE[STATUS.learned]}
      else
        return {... word}
    });
    _group.unknowed--;
    _group.learned++;


    let _word = {... _group.list[indexWord]};
    _word.Status = MAPSTATGE[_word.Status];

    switch (_word.Status) {
      case STATUS.unknowed:
        {
          _group.unknowed--;
          _group.learned++;
        }
        break;
      case STATUS.revealed:
        {
          _group.revealed--;
          _group.discovered++;
        }
        break;
      case STATUS.discovered:
        {
          _group.discovered--;
          _group.recognazed++;
        }
        break;
      case STATUS.recognazed:
        {
          _group.recognazed--;
          _group.unknowed++;
        }
        break;
      default:
        {
          _group.unknowed = _group.list.filter(_=>_.Status!=STATUS.learned).length;
          _group.playing = 0;
          _group.revealed = 0;
          _group.recalled = 0;
          _group.recognazed = 0;
          _group.learned = 0;
          _group.recalled++;
        }
    }
    // _group.list = _group.list.map(_ => _.TextA == word.TextA ? {..._, covered : false} : _);

    return _group;
  }

const recallToNext = (group) => {
  return (prev) => {

    let _group = prev.groups.find(_ => _.id == group.id);
    _group.recalled++;

    return prev;
  };
}

export {
  changeStatus
  , changeStatusGroup
  , changeCurrentStatus
  , recallToNext
}