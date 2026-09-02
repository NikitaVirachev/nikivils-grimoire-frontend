import { PositionedMainContent } from '../../../../app/layouts/page-frame/ui/MainContent/MainContent';
import { PhoneContents, PhoneCurrently, PhoneBorder } from '../About.styles';
import { FAQSection, Question, FAQItem, QuestionSign, QuestionText, Answer } from './FAQ.styles';

export const FAQ = () => {
  return (
    <PositionedMainContent title='FAQ'>
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
    </PositionedMainContent>
  );
};
