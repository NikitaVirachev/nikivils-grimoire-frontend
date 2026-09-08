import { useMatches } from 'react-router-dom';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { QuaternaryHeading, UnderlinedHeader } from '@/shared/ui/typography';
import { ProseText as PostText } from '@/shared/ui/prose';
import { ContentSection, ContentSectionGroup } from '@/shared/ui/content';
import { getPageTitle } from '@/shared/lib';

export const Favorite = () => {
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
            The Witcher 3: Wild Hunt, Life Is Strange, Crusader Kings, Mass Effect, Disco Elysium
          </PostText>
        </ContentSection>

        <ContentSection>
          <UnderlinedHeader>
            <QuaternaryHeading>Books</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>
            The Wheel of Time, House of Leaves, Tales from Meekhanese Border, Worm (Parahumans) by
            John C. "Wildbow" McCrae
          </PostText>
        </ContentSection>

        <ContentSection>
          <UnderlinedHeader>
            <QuaternaryHeading>Manga</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>Goodnight Punpun by Inio Asan</PostText>
        </ContentSection>

        <ContentSection>
          <UnderlinedHeader>
            <QuaternaryHeading>Comics</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>Blankets by Craig Thompson</PostText>
        </ContentSection>
      </ContentSectionGroup>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </DesktopMainContent>
  );
};
