// @reference
// import b from 'b_';
// import { IconCog, Popup, Switcher, Text } from 'platform-components';
// import { SETTINGS } from 'platform-components/src/components/constants';
// import { getLocalStorageValue } from 'platform-components/src/hooks';
// import React, { useState } from 'react';
// import { useIntl } from 'react-intl';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//     getLiveChatSortOrder,
//     hasSelectedActualChannels,
//     SORT_ORDER,
//     VISIBILITY,
//     setSortOrder,
//     setVisibility,
//     getLiveChatVisibility,
//     unselectAll,
//     getAmountOfLiveChannels,
//     getChatSpeed,
// } from '../../../../store/slices/live-chat';
// import { updateSetting } from '../../../../store/slices/settings';

// import './channels_settings.scss';

// const LiveChatChannelsSettings = () => {
//     const intl = useIntl();
//     const dispatch = useDispatch();
//     const hasSelected = useSelector(hasSelectedActualChannels);
//     const sortOrder = useSelector(getLiveChatSortOrder);
//     const visibility = useSelector(getLiveChatVisibility);
//     const online = useSelector(getAmountOfLiveChannels);
//     const speed = useSelector(getChatSpeed);
//     const [showBadges, setShowBadges] = useState(getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_BADGES, true));
//     const [showMessageTime, setShowMessageTime] = useState(getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_MESSAGE_TIME, true));
//     const [useColors, setUseColors] = useState(getLocalStorageValue(SETTINGS.LIVE_CHAT_USE_CHAT_COLORS, true));
//     const mix = b('live-chat', 'channels_settings-cog-title');

//     return (
//         <div className={b('live-chat', 'channels_settings')}>
//             <Text mix={b('live-chat', 'channels_settings-speed')}>
//                 {intl.formatMessage({ id: 'live-chat.speed' }, { speed })}
//             </Text>
//             <Text mix={b('live-chat', 'channels_settings-online')}>
//                 {intl.formatMessage({ id: 'live-chat.online' }, { online })}
//             </Text>
//             {hasSelected && <Text
//                 handleClick={() => dispatch(unselectAll())}
//                 id="live-chat.unselect"
//                 mix={b('live-chat', 'channels_settings-unselect')}
//             />}
//             {hasSelected && <div className={b('live-chat', 'channels_settings-sort')}>
//                 <Text id="live-chat.visible" />
//                 <select
//                     onChange={(e) => dispatch(setVisibility(e.target.value))}
//                     value={visibility}
//                 >
//                     <option value={VISIBILITY.SHOW_ALL}>
//                         {intl.formatMessage({ id: 'live-chat.visible.all' })}
//                     </option>
//                     <option value={VISIBILITY.SHOW_SELECTED}>
//                         {intl.formatMessage({ id: 'live-chat.visible.selected' })}
//                     </option>
//                     <option value={VISIBILITY.HIDE_SELECTED}>
//                         {intl.formatMessage({ id: 'live-chat.visible.unselected' })}
//                     </option>
//                 </select>
//             </div>}
//             <div className={b('live-chat', 'channels_settings-sort')}>
//                 <Text id="live-chat.sort" />
//                 <select onChange={(e) => dispatch(setSortOrder(e.target.value))} value={sortOrder}>
//                     <option value={SORT_ORDER.ONLINE_DESC}>
//                         {intl.formatMessage({ id: 'live-chat.sort.online.desc' })}
//                     </option>
//                     <option value={SORT_ORDER.ONLINE_ASC}>
//                         {intl.formatMessage({ id: 'live-chat.sort.online.asc' })}
//                     </option>
//                     <option value={SORT_ORDER.LOGIN_DESC}>
//                         {intl.formatMessage({ id: 'live-chat.sort.login.desc' })}
//                     </option>
//                     <option value={SORT_ORDER.LOGIN_ASC}>
//                         {intl.formatMessage({ id: 'live-chat.sort.login.asc' })}
//                     </option>
//                 </select>
//             </div>
//             <Popup direction={Popup.DIRECTION.right} target={<IconCog />}>
//                 <div className={b('live-chat', 'channels_settings-cog')}>
//                     <div className={b('live-chat', 'channels_settings-cog-option')}>
//                         <Text id="live-chat.settings.showBadges" mix={mix} />
//                         <Switcher handleToggle={() => {
//                             dispatch(updateSetting({
//                                 key: SETTINGS.LIVE_CHAT_SHOW_BADGES,
//                                 value: !showBadges,
//                             }));
//                             setShowBadges(!showBadges);
//                         }} isOn={showBadges}
//                         />
//                     </div>
//                     <div className={b('live-chat', 'channels_settings-cog-option')}>
//                         <Text id="live-chat.settings.showMessageTime" mix={mix} />
//                         <Switcher handleToggle={() => {
//                             dispatch(updateSetting({
//                                 key: SETTINGS.LIVE_CHAT_SHOW_MESSAGE_TIME,
//                                 value: !showMessageTime,
//                             }));
//                             setShowMessageTime(!showMessageTime);
//                         }} isOn={showMessageTime}
//                         />
//                     </div>
//                     <div className={b('live-chat', 'channels_settings-cog-option')}>
//                         <Text id="live-chat.settings.useColors" mix={mix} />
//                         <Switcher handleToggle={() => {
//                             dispatch(updateSetting({
//                                 key: SETTINGS.LIVE_CHAT_USE_CHAT_COLORS,
//                                 value: !useColors,
//                             }));
//                             setUseColors(!useColors);
//                         }} isOn={useColors}
//                         />
//                     </div>
//                 </div>
//             </Popup>
//         </div>
//     );
// };

// export default LiveChatChannelsSettings;
