import { SectionCard, SectionCardTitle } from '../../../../shared/ui/section-card/SectionCard';

import { Content, Topic, Name, Value } from './Currently.styles';

type CurrentlyProps = {
  className?: string;
};

const Currently = ({ className }: CurrentlyProps) => (
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
