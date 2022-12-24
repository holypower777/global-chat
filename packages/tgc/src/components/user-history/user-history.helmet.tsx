// @reference
// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { useIntl } from 'react-intl';
// import { useParams } from 'react-router-dom';

// interface UserHistoryHelmetProps {
//     isFound?: boolean;
// }

// const UserHistoryHelmet = ({ isFound = true }: UserHistoryHelmetProps) => {
//     const intl = useIntl();
//     const { username } = useParams();

//     return (
//         <Helmet defaultTitle={intl.formatMessage({ id: 'title.common' })}>
//             <meta content={intl.formatMessage({ id: 'meta.desc.userHistory' }, { username })} name="description" />
//             <title>{isFound ? username : intl.formatMessage({ id: 'title.userHistory.notFound' })}</title>
//         </Helmet>
//     );
// };

// export default UserHistoryHelmet;
