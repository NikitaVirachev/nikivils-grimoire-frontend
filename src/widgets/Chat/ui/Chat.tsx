import { useState, useRef, useEffect } from 'react';

import { ActionInput } from '../../../shared/ui/form/action-input';
import { ActionButton } from '../../../shared/ui/form/action-button';
import { SectionCardTitle } from '../../../shared/ui/section-card/SectionCard';
import {
  ChatCard,
  Container,
  Messages,
  MessageText,
  Bubble,
  Author,
  StyledPlay,
} from './Chat.styles';
import mockMessages from '../model/mockMessages';

interface ChatProps {
  className?: string;
}

const Chat = ({ className }: ChatProps) => {
  const [messages, setMessages] = useState(mockMessages);
  const [message, setMessage] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  const sendMessageHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setMessages((prev) => {
      return [...prev, { id: prev.length + 1, author: 'Anonymous#124', message }];
    });

    setMessage('');
  };

  return (
    <ChatCard className={className}>
      <SectionCardTitle>Chat</SectionCardTitle>
      <Container>
        <Messages>
          {messages.map((message) => (
            <Bubble key={message.id}>
              <Author>{message.author}</Author>
              <MessageText>{message.message}</MessageText>
            </Bubble>
          ))}
          <div ref={bottomRef} />
        </Messages>

        <ActionInput
          name='chat'
          placeholder='say something?'
          value={message}
          changeInputHandler={(e) => setMessage(e.target.value)}
          onSubmitHandler={sendMessageHandler}
          action={
            <ActionButton
              type='submit'
              disabled={message === ''}
              aria-label='Submit'
            >
              <StyledPlay title='Play button icon' />
            </ActionButton>
          }
        />
      </Container>
    </ChatCard>
  );
};

export default Chat;
