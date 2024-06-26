import styled from "styled-components";
import { Box, Button } from "@mui/material";
import LandingTitle from "../../ui/LandingTitle";

export function AboutUsSection() {
  return (
    <SectionWrapper>
      <LandingTitle title="קצת עלינו" flex={0.2}/>
      <TextTypography
        component={"p"}
        flex={0.6}
        sx={{ minWidth: "50%", maxWidth: "min-content" }}
      >
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט
        לורם שבצק יהול, לכנוץ בעריר גק ליץ, קולורס מונפרד אדנדום סילקוף, מרגשי
        ומרגשח. עמחליף קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
        למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו
        צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.
      </TextTypography>
      <Box>
        <Button
          variant="contained"
          sx={{
            border: "1px solid white",
            background: "linear-gradient(270deg, #3395E1 0%, #38CDEE 100%)",
            boxShadow: "0px 4px 8.399999618530273px 0px #0000002B",
            width: "207px",
            height: "45px",
            borderRadius: "50px",
          }}
        >
          <TextTypography>{"נסו בעצמכם >"}</TextTypography>
        </Button>
      </Box>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px 10rem;
`;

const TextTypography = styled(Box)`
  font: Fredoka;
  font-size: 20px;
  font-weight: 300;
  line-height: 43.6px;
  letter-spacing: 0.15em;
  text-align: right;
  margin: 0px;
`;
