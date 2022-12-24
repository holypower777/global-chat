// @reference
// import b from 'b_';
// import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
// import { LINKS, Text } from 'platform-components';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { streamLastSearches } from '../../../services/firestore';
// import { getLastSearches, setLastSearches } from '../../../store/slices/common';

// import './home__searches.scss';

// const HomeSearches = () => {
//     const dispatch = useDispatch();
//     const lastSearches = useSelector(getLastSearches);

//     const handleOnSnapshot = (doc: DocumentSnapshot<DocumentData>) => {
//         if (doc.exists() && doc.data().list) {
//             dispatch(setLastSearches(doc.data().list));
//         }
//     };

//     useEffect(() => {
//         const unsub = streamLastSearches(handleOnSnapshot);
//         return () => (unsub());
//     }, []);

//     return (
//         <div className={b('home', 'searches')} >
//             <Text id="home.lastSearches" size={Text.SIZE.S} weight={Text.WEIGHT.M} />
//             <ul>
//                 {lastSearches.map((user, i) => (
//                     <Link key={`${user}-${i}`} to={`${LINKS.MESSAGES}/${user}`}>
//                         <Text size={Text.SIZE.S} tag={Text.TAG.LI}>{user}</Text>
//                     </Link>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default HomeSearches;
