import styled, { css } from 'styled-components';

import { SectionCard, SectionCardTitle } from '../../shared/components/SectionCard';

import { respond } from '../../styles/Mixins';

const Content = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.2rem;
`;

const Topic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Name = styled.dt`
  font-size: var(--p);
  font-weight: bold;

  ${respond(
    'phone',
    css`
      line-height: 2rem;
    `
  )}
`;

const Value = styled.dd`
  font-size: var(--small);

  ${respond(
    'phone',
    css`
      line-height: 1.8rem;
    `
  )}
`;

type ContentsProps = {
  className?: string;
};

const Currently = ({ className }: ContentsProps) => (
  <SectionCard className={className}>
    <SectionCardTitle>Currently</SectionCardTitle>

    <Content>
      <Topic>
        <Name>Playing:</Name>
        <Value>Clair Obscur: Expedition 33</Value>
      </Topic>

      <Topic>
        <Name>Reading:</Name>
        <Value>Best Served Cold by Joe Abercrombie</Value>
      </Topic>

      <Topic>
        <Name>Watching:</Name>
        <Value>Nothing</Value>
      </Topic>

      <Topic>
        <Name>Obsessed with:</Name>
        <Value>Homelabbing, painting miniatures</Value>
      </Topic>

      <Topic>
        <Name>Studying:</Name>
        <Value>C programming language</Value>
      </Topic>
    </Content>
  </SectionCard>
);

export default Currently;
