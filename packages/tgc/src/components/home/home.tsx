// @reference
// import b from 'b_';
// import {
//     useAuthLogoutMutation,
//     useDeleteUserFavoriteMutation,
//     useGetDailyStatsQuery,
//     useLazyGetDisplayNameSuggestionsQuery,
//     useLazyGetRandomTwitchUserQuery,
// } from 'platform-apis';
// import { Button, DeskCard, DeskCardStats, DeskCardUser, FROM_PAGE, HeaderSettings, IconSearch, Input, Logo, NOTIFICATIONS_DURATION, SEARCH_PARAMS, SETTINGS, SNACKBAR_TYPE, Text } from 'platform-components';
// import { useWindowSize } from 'platform-components/src/hooks';
// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useIntl } from 'react-intl';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// import { clearChannelsState } from '../../store/slices/channels';
// import { clearMessages } from '../../store/slices/messages';
// import { getDailyStats, getIsDailyStatsFetching } from '../../store/slices/overall-stats';
// import { getRT, getUserTypeSetting, updateSetting } from '../../store/slices/settings';
// import { clearSuggestions, clearTwitchUser, getIsSuggestionsLoading, getSuggestions } from '../../store/slices/twitch-user';
// import { getIsAuth, getUser } from '../../store/slices/user';
// import { addNotification, isValidSearchChange, isValidSearchSubmit } from '../../utils';

// import HomeSearches from './__searches/home__searches';

// import './home.scss';

// const Home = () => {
//     const intl = useIntl();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [searchParams] = useSearchParams();
//     const { width } = useWindowSize();

//     const user = useSelector(getUser);
//     const isAuth = useSelector(getIsAuth);
//     const userType = useSelector(getUserTypeSetting);
//     const dailyStats = useSelector(getDailyStats);
//     const refreshToken = useSelector(getRT);
//     const suggestions = useSelector(getSuggestions);
//     const isDailyFetching = useSelector(getIsDailyStatsFetching);
//     const isSuggestionsLoading = useSelector(getIsSuggestionsLoading);

//     const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
//     const [username, setUsername] = useState('');

//     const [fetchSuggestions] = useLazyGetDisplayNameSuggestionsQuery();
//     const [fetchRandomUser, { isFetching, data }] = useLazyGetRandomTwitchUserQuery();
//     const [logout] = useAuthLogoutMutation();
//     const [deleteFavorite] = useDeleteUserFavoriteMutation();
//     useGetDailyStatsQuery();

//     useEffect(() => {
//         setUsername('');
//     }, [userType]);

//     useEffect(() => {
//         if (searchParams.get(SEARCH_PARAMS.ACCESS_TOKEN)) {
//             dispatch(updateSetting({
//                 key: SETTINGS.ACCESS_TOKEN,
//                 value: searchParams.get(SEARCH_PARAMS.ACCESS_TOKEN),
//             }));
//         }

//         if (searchParams.get(SEARCH_PARAMS.REFRESH_TOKEN)) {
//             dispatch(updateSetting({
//                 key: SETTINGS.REFRESH_TOKEN,
//                 value: searchParams.get(SEARCH_PARAMS.REFRESH_TOKEN),
//             }));
//         }

//         if (searchParams.get(SEARCH_PARAMS.AUTH_ERROR)) {
//             addNotification({
//                 id: searchParams.get(SEARCH_PARAMS.AUTH_ERROR),
//                 autoHideDuration: NOTIFICATIONS_DURATION.S,
//             }, dispatch);
//         }

//         navigate('/');
//     }, [searchParams]);

//     useEffect(() => {
//         if (data) {
//             navigate(`messages/${data.displayName}?from=${FROM_PAGE.RANDOM_USER}`);
//         }
//     }, [data]);

//     const handleRedirect = (displayName: string | null = null) => {
//         const searchName = displayName || username;

//         if (!isValidSearchSubmit(userType, searchName)) {
//             addNotification({
//                 id: `notification.searchInput.${userType}.submit`,
//                 type: SNACKBAR_TYPE.ERROR,
//                 autoHideDuration: NOTIFICATIONS_DURATION.S,
//             }, dispatch);
//             return;
//         }

//         dispatch(clearTwitchUser());
//         dispatch(clearChannelsState());
//         dispatch(clearMessages());
//         dispatch(clearSuggestions());

//         navigate(`messages/${searchName}`);
//     };

//     const handleSubmit = (e: React.KeyboardEvent) => {
//         if (typingTimer) {
//             clearTimeout(typingTimer);
//         }

//         if (e.key === 'Enter') {
//             handleRedirect();
//         }
//     };

//     const handleSelect = (displayName: string) => (handleRedirect(displayName));

//     return (
//         <main className="home">
//             <Helmet defaultTitle={intl.formatMessage({ id: 'title.common' })}>
//                 <meta content={intl.formatMessage({ id: 'meta.desc.home' })} name="description" />
//                 <title>{intl.formatMessage({ id: 'title.common' })}</title>
//             </Helmet>
//             <section className={b('home', 'container')}>
//                 <Logo alwaysFull />
//                 <section className={b('home', 'search')}>
//                     <Input
//                         disabled={false}
//                         dropdownItems={suggestions.map((e) => (<li
//                             key={e}
//                             onClick={() => (handleSelect(e))}
//                         >{e}</li>))}
//                         fullWidth={true}
//                         handleChange={(e) => {
//                             if (!isValidSearchChange(userType, e.target.value)) {
//                                 addNotification({
//                                     id: `notification.searchInput.${userType}`,
//                                     type: SNACKBAR_TYPE.WARNING,
//                                     autoHideDuration: NOTIFICATIONS_DURATION.S,
//                                 }, dispatch);
//                                 return;
//                             }

//                             if (e.target.value.length <= 2) {
//                                 dispatch(clearSuggestions());
//                             }

//                             setUsername(e.target.value);
//                         }}
//                         handleKeyDown={handleSubmit}
//                         handleKeyUp={() => {
//                             if (typingTimer) {
//                                 clearTimeout(typingTimer);
//                             }
//                             const id = setTimeout(() => {
//                                 if (username.length > 2) {
//                                     fetchSuggestions({ username });
//                                 }
//                             }, 500);

//                             setTypingTimer(id);
//                         }}
//                         icon={<IconSearch />}
//                         isDropdownLoading={isSuggestionsLoading}
//                         name="user-search"
//                         placeholder={intl.formatMessage({ id: 'header.inputPlaceholder' })}
//                         settings={<HeaderSettings updateSettings={(key, value) => dispatch(updateSetting({ key, value }))} />}
//                         value={username}
//                     />
//                     <Button
//                         handleClick={() => fetchRandomUser()}
//                         loading={isFetching}
//                     >
//                         {intl.formatMessage({ id: 'home.randomUser' })}
//                     </Button>
//                 </section>
//                 {width && width > 1280 && <HomeSearches />}
//                 {!isDailyFetching && dailyStats && <section className={b('home', 'cards')}>
//                     <DeskCardUser
//                         avatar={user.profileImageUrl}
//                         displayName={user.displayName}
//                         handleLogout={() => logout({
//                             body: { // eslint-disable-next-line camelcase
//                                 user_id: user.userId, // eslint-disable-next-line camelcase
//                                 refresh_token: refreshToken || '',
//                             },
//                         })}
//                         handleRemoveFavorite={(e) => deleteFavorite({ userId: user.userId, body: e })}
//                         isAuth={isAuth}
//                         user={user}
//                     />
//                     {width && width > 1280 && <DeskCardStats
//                         messagesAmount={dailyStats.totalMessages}
//                         messagesPerDay={dailyStats.messagesPerDay}
//                         parsedChannels={dailyStats.currenlyActiveChannels}
//                         usersAmount={dailyStats.totalUsers}
//                         usersPerDay={dailyStats.usersPerDay}
//                     />}
//                     <DeskCard type={DeskCard.TYPE.OVERALL} />
//                     <DeskCard type={DeskCard.TYPE.LIVE_CHAT} />
//                     <DeskCard type={DeskCard.TYPE.DONATION} />
//                 </section>}
//                 {width && width > 1280 && <Text
//                     center
//                     id="info.home"
//                     mix={b('home', 'info')}
//                     size={Text.SIZE.S}
//                 />}
//             </section>
//         </main>
//     );
// };

// export default Home;
