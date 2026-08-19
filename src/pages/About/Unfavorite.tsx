import { PositionedMainContent } from '../../layouts/MainContent';
import { PostText, PostContent, Posts } from '../../components/Post/Post';
import { PhoneContents, PhoneCurrently, PhoneBorder } from './About.styles';
import { QuaternaryHeading, UnderlinedHeader } from '../../shared/typography/Headings';

const Unfavorite = () => {
  return (
    <PositionedMainContent title="Stuff I don't like">
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
            I don't like competitive online games like Dota 2, Counter-Strike. I respect real-time
            strategies, but they are too difficult for me, especially online.
          </PostText>
        </PostContent>
      </Posts>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </PositionedMainContent>
  );
};

export default Unfavorite;
