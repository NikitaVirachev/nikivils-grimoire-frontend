import { PositionedMainContent } from '../../../../app/layouts/page-frame/ui/MainContent/MainContent';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { QuaternaryHeading, UnderlinedHeader } from '../../../../shared/ui/typography';
import { ProseText as PostText } from '../../../../shared/ui';
import { ContentSection, ContentSectionGroup } from '../../../../shared/ui/content';

export const Unfavorite = () => {
  return (
    <PositionedMainContent title="Stuff I don't like">
      <PhoneContents />

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <ContentSectionGroup>
        <ContentSection>
          <UnderlinedHeader>
            <QuaternaryHeading>Games</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>
            I don't like competitive online games like Dota 2, Counter-Strike. I respect real-time
            strategies, but they are too difficult for me, especially online.
          </PostText>
        </ContentSection>
      </ContentSectionGroup>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </PositionedMainContent>
  );
};
