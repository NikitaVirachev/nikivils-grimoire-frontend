import { PositionedMainContent } from '../../../../layouts/MainContent';
import { QuaternaryHeading, UnderlinedHeader } from '../../../../shared/ui/typography';
import { ProseText as Paragraph } from '../../../../shared/ui/prose';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { ParagraphGroup as Paragraphs, ContentSection } from '../../../../shared/ui/content';

export const AboutMe = () => {
  return (
    <PositionedMainContent title='About me'>
      <PhoneContents />

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <ContentSection>
        <UnderlinedHeader>
          <QuaternaryHeading>My thoughts about this</QuaternaryHeading>
        </UnderlinedHeader>

        <Paragraphs>
          <Paragraph>
            I spend more time on this page than on all the others combined. I've always struggled
            with writing, and this project is part of my effort to become a better writer.
          </Paragraph>

          <Paragraph>
            First of all, I'm just a guy who wants to create something with his own hands. For a
            while now, I've felt that I don't want to just consume content—videos, books, video
            games, and so on. I've felt the urge to create something myself. Since I'm a programmer,
            I decided to build my own website and put my ideas about beauty into it.
          </Paragraph>

          <Paragraph>
            I wouldn't describe myself as someone who's obsessed with just one or two things. I like
            diving deep into one topic and then moving on to another when I get bored. Maybe if I
            start writing about my hobbies, I'll dive deeper into them and enjoy them even more. Or
            maybe I’ll abandon this cite too someday, but I hope not.
          </Paragraph>

          <Paragraph>
            Nevertheless, I'm going to write reviews and share my thoughts on the books I read, and
            occasionally on video games as well. My favorite genre is fantasy. It’s funny because
            sometimes I feel that fantasy isn't a serious enough genre. I even feel a little ashamed
            to talk about it with strangers, even though I know that's silly. But since I still love
            the genre, I keep reading fantasy books.
          </Paragraph>

          <Paragraph>
            There's another problem when it comes to games: over the years, I've been playing them
            less and less. It's sad because I think it's an amazing medium. I still hope to get back
            to them in the near future, if I'm lucky.
          </Paragraph>
        </Paragraphs>
      </ContentSection>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </PositionedMainContent>
  );
};
