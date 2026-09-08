import { useMatches } from 'react-router-dom';

import { DesktopMainContent } from '@/shared/ui/main-content';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { FAQSection, Question, FAQItem, QuestionSign, QuestionText, Answer } from './FAQ.styles';
import { getPageTitle } from '@/shared/lib';

export const FAQ = () => {
  const matches = useMatches();
  const title = getPageTitle(matches);

  return (
    <DesktopMainContent title={title}>
      <PhoneContents />

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <FAQSection>
        <FAQItem>
          <Question>
            <QuestionSign>Q: </QuestionSign>
            <QuestionText>Who are you?</QuestionText>
          </Question>
          <Answer>
            A: Right now, I'm passionate about creating this website. In real life, I'm also a
            frontend developer.
          </Answer>
        </FAQItem>

        <FAQItem>
          <Question>
            <QuestionSign>Q: </QuestionSign>
            <QuestionText>How old are you?</QuestionText>
          </Question>
          <Answer>A: I'm an adult.</Answer>
        </FAQItem>

        <FAQItem>
          <Question>
            <QuestionSign>Q: </QuestionSign>
            <QuestionText>How did you make this website?</QuestionText>
          </Question>
          <Answer>
            A: I use React and TypeScript for the frontend, and Node.js with MongoDB for the
            backend.
          </Answer>
        </FAQItem>
      </FAQSection>

      <PhoneBorder>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </PhoneBorder>

      <PhoneCurrently />
    </DesktopMainContent>
  );
};
