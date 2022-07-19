import styled from "styled-components";
import Search from "@/components/Search/Search";
import { Wrapper, Header } from "@/components/Cards";
import traitList from "../traits.json";

const imageSrc = traitList[0].image;

const GenerateWrapper = styled(Wrapper)`
  padding: 30px;
  height: calc(100vh - 400px);
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 25px;
  flex: 1 1 auto;
`;

export default function GeneratorBox() {
  return (
    <GenerateWrapper type="warning">
      <Header>
        <Search label="Enter Bee ID" />
      </Header>
      <Image src={imageSrc} width="100%" alt="" />
    </GenerateWrapper>
  );
}
