// import React, { useState } from 'react';
// import { getData } from '../../util/data.manager';
// import { groupReducer, initialState } from 'components\Context\groupReducer';

// const DataContext = React.createContext([{}, () => {}]);

// const DataProvider = (props) => {
//     const groups = getData();

//   const [groupList, dispatch] = useReducer(groupReducer, initialState);
//   return (
//     <DataContext.Provider value={dispatch}>
//       {props.children}
//     </DataContext.Provider>
//   );
// }

// export { DataContext, DataProvider };