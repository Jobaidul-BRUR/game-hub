import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  // const color = score >= 75 ? "green" : score >= 60 ? "yellow" : "";
  console.log("fuck");
  return (
    <>
      <Badge>{score}</Badge>
    </>
  );
};

export default CriticScore;
