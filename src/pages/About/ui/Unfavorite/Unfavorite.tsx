import { useMatches } from 'react-router-dom';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { QuaternaryHeading, UnderlinedHeader } from '@/shared/ui/typography';
import { ProseText as PostText } from '@/shared/ui/prose';
import { ContentSection, ContentSectionGroup } from '@/shared/ui/content';

import { getPageTitle } from '@/shared/lib';

export const Unfavorite = () => {
  const matches = useMatches();
  const title = getPageTitle(matches);

  return (
    <DesktopMainContent title={title}>
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
    </DesktopMainContent>
  );
};
