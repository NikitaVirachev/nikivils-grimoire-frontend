import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { EnterInput } from '../Form/Form';
import { SectionCard, SectionCardTitle } from '../../shared/components/SectionCard';

const ChatCard = styled(SectionCard)`
  height: 30rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;

  flex-grow: 1;

  padding: 0 0.2rem 0.2rem 0.2rem;
`;

const Messages = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;

  overflow-y: auto;

  padding-right: 1.5rem;
  scrollbar-color: var(--primarly-color) transparent;
`;

const Bubble = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.2rem solid var(--primarly-color);
  border-radius: 1rem 1rem 1rem 0;

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
`;

const Author = styled.p`
  color: var(--primarly-color);
`;

const MessageText = styled.p`
  color: var(--secondary-tp-color);
`;

interface ChatProps {
  className?: string;
}

const Chat = ({ className }: ChatProps) => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      author: 'Anonymous#123',
      message: 'Lorem ipsum nec ultricies vulputate tortor pretium pulvinar quis donec.',
    },
    {
      id: 1,
      author: 'Anonymous#124',
      message: 'Lorem ipsum tortor tempus',
    },
    {
      id: 2,
      author: 'Anonymous#125',
      message: 'Lorem ipsum nec ultricies vulputate tortor pretium pulvinar quis donec.',
    },
  ]);
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

        <EnterInput
          name='chat'
          placeholder='say something?'
          value={message}
          changeInputHandler={(e) => setMessage(e.target.value)}
          onSubmitHandler={sendMessageHandler}
        />
      </Container>
    </ChatCard>
  );
};

export default Chat;
