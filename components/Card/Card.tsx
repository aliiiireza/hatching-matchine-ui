import { DetailWrapper } from "./DetailWrapper";
import { Divider } from "./Divider";
import { Image } from "./Image";
import { TimeAgo } from "./TimeAgo";
import { TimeIcon } from "./TimeIcon";
import { Title } from "./Title";
import { Wrapper } from "./Wrapper";

interface cardProps {
  name: string;
  image: string;
}

export const Card = ({ name, image }: cardProps) => {
  return (
    <Wrapper>
      <Image src={image} />
      <DetailWrapper>
        <Title>#{name}</Title>
        <Divider />
        <TimeAgo>
          <TimeIcon />
          21 days
        </TimeAgo>
      </DetailWrapper>
    </Wrapper>
  );
};
