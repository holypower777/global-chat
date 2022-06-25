import b from 'b_';
import cx from 'classnames';
import { ChatMessage } from 'platform-components';
import { LINKS, SEARCH_TYPE, SETTINGS } from 'platform-components/src/components/constants';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
    getActualChannels, 
    getClient, 
    hasSelectedActualChannels, 
    Msg, 
    setSpeed,
} from '../../../store/slices/live-chat';
import { 
    getLiveChatShowBadgesSetting, 
    getLiveChatShowMessageTimeSetting, 
    getLiveChatUseChatColors,
    updateSetting,
} from '../../../store/slices/settings';
import { RootState } from '../../../store/store';

import LiveChatScrollButton from './_scroll/chat_scroll';

import './live-chat__chat.scss';

const mapStateToProps = (state: RootState) => ({
    client: getClient(state),
    actualChannels: getActualChannels(state),
    hasSelected: hasSelectedActualChannels(state),
    showBadges: getLiveChatShowBadgesSetting(state),
    showMessageTime: getLiveChatShowMessageTimeSetting(state),
    useChatColors: getLiveChatUseChatColors(state),
});

const mapDispatchToProps = { setSpeed, updateSetting };

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

interface OwnProps {
    isActiveTab: boolean;
}

interface LiveChatChatProps extends ReduxProps, OwnProps {}

type LiveChatChatState = {
    msgs: Array<Msg>;
    msgsAmount: number;
    isScrolling: boolean;
    speedIntervalId: NodeJS.Timer | null;
}

class LiveChatChat extends React.Component<LiveChatChatProps, LiveChatChatState> {
    state: LiveChatChatState = {
        msgs: [],
        msgsAmount: 0,
        isScrolling: false,
        speedIntervalId: null,
    };

    componentDidMount() {
        const speedIntervalId = setInterval(() => {
            this.props.setSpeed(Math.ceil(this.state.msgsAmount / 5));
            this.setState({ msgsAmount: 0 });
        }, 5000);

        this.setState({ speedIntervalId });

        this.props.client.on('chat', (chan, user, msg) => {
            if (this.props.hasSelected) {
                if (!this.props.actualChannels[parseInt(user['room-id']!, 10)]) {
                    return;
                }

                if (!this.props.actualChannels[parseInt(user['room-id']!, 10)].selected) {
                    return;
                }
            }

            this.setState({
                msgs: [...this.state.msgs.slice(-99), {
                    channelLogin: chan.substring(1),
                    channelId: parseInt(user['room-id']!, 10),
                    userId: parseInt(user['user-id']!, 10),
                    displayName: user['display-name']!,
                    login: user.username!,
                    badges: user['badges-raw']!,
                    color: user.color!,
                    message: msg,
                    time: new Date(),
                }],
                msgsAmount: this.state.msgsAmount + 1,
            });
        });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        if (this.state.speedIntervalId) {
            clearInterval(this.state.speedIntervalId);
        }
    }

    messagesEnd = React.createRef<HTMLLIElement>();

    scrollToBottom = () => {
        if (this.props.isActiveTab && this.messagesEnd.current && !this.state.isScrolling) {
            this.messagesEnd.current.scrollIntoView();
        }
    };

    handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop < e.currentTarget.clientHeight + 50;
        if (!bottom) {
            this.setState({ isScrolling: true });
        }

        if (this.state.isScrolling && bottom) {
            this.setState({ isScrolling: false });
        }
    };

    render(): React.ReactNode {
        return (
            <section className={cx(b('live-chat', 'chat'), 'custom-scroll')}>
                <ul className={cx(b('live-chat', 'chat-list'), 'custom-scroll')} onScroll={this.handleScroll}>
                    {this.state.msgs.map((message) => {
                        const channelName = this.props.actualChannels[message.channelId] ? this.props.actualChannels[message.channelId].displayName : message.channelLogin;

                        return (
                            <ChatMessage
                                badges={message.badges}
                                channelName={<Link
                                    onClick={() => this.props.updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME })} 
                                    to={`${LINKS.MESSAGES}/${channelName}`}
                                >
                                    {channelName}
                                </Link>}
                                color={message.color || '#FF2592'}
                                key={`${message.time.getTime()}-${message.channelId}-${message.userId}`}
                                message={message.message}
                                showBadges={this.props.showBadges}
                                showMessageTime={this.props.showMessageTime}
                                time={message.time}
                                useColors={this.props.useChatColors}
                                username={<Link 
                                    onClick={() => this.props.updateSetting({ key: SETTINGS.USER_TYPE, value: SEARCH_TYPE.USERNAME })} 
                                    to={`${LINKS.MESSAGES}/${message.displayName}`}
                                >
                                    {message.displayName}
                                </Link>}
                            />
                        );
                    })}
                    <li ref={this.messagesEnd} />
                </ul>
                {this.state.isScrolling && <LiveChatScrollButton handleClick={() => this.setState({ isScrolling: false })} />}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveChatChat);
