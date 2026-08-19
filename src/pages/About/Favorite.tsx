import { PositionedMainContent } from '../../layouts/MainContent';
import { PostText, PostContent, Posts } from '../../components/Post/Post';
import { PhoneContents, PhoneCurrently, PhoneBorder } from './About.styles';
import { QuaternaryHeading, UnderlinedHeader } from '../../shared/typography/Headings';

const Favorite = () => {
  return (
    <PositionedMainContent title='Favorite stuff'>
      <PhoneContents />

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <Posts>
        <PostContent>
          <UnderlinedHeader>
            <QuaternaryHeading>Games</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>
            The Witcher 3: Wild Hunt, Life Is Strange, Crusader Kings, Mass Effect, Disco Elysium
          </PostText>
        </PostContent>

        <PostContent>
          <UnderlinedHeader>
            <QuaternaryHeading>Books</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>
            The Wheel of Time, House of Leaves, Tales from Meekhanese Border, Worm (Parahumans) by
            John C. "Wildbow" McCrae
          </PostText>
        </PostContent>

        <PostContent>
          <UnderlinedHeader>
            <QuaternaryHeading>Manga</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>Goodnight Punpun by Inio Asan</PostText>
        </PostContent>

        <PostContent>
          <UnderlinedHeader>
            <QuaternaryHeading>Comics</QuaternaryHeading>
          </UnderlinedHeader>
          <PostText>Blankets by Craig Thompson</PostText>
        </PostContent>
      </Posts>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </PositionedMainContent>
  );
};

export default Favorite;
