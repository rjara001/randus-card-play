export function matchAction(wordId) {
    return {
        type: MARK,
        payload: {
            wordId
        }
      };
}

export function nextAction(wordId) {
    return {
        type: MARK,
        payload: {
            wordId
        }
      };
}

export function uncoverAction(wordId, uncover) {
    return {
        type: MARK,
        payload: {
            wordId
            , uncover
        }
      };
}
