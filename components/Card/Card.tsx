import { DetailWrapper } from "./DetailWrapper";
import { Divider } from "./Divider";
import { Image } from "./Image";
import { TimeAgo } from "./TimeAgo";
import { TimeIcon } from "./TimeIcon";
import { Title } from "./Title";
import { Wrapper } from "./Wrapper";
interface cardProps {
  item: any;
  onCardClick?: any;
  selected?: boolean;
}

export const Card = ({ item, selected, onCardClick }: cardProps) => {
  return (
    <Wrapper
      onClick={() => onCardClick && onCardClick(item)}
      selected={selected}
    >
      <Image src={item.image} />
      <DetailWrapper>
        <Title>#{item.name}</Title>
      </DetailWrapper>
    </Wrapper>
  );
};
