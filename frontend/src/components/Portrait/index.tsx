import { Container, Image, Video } from "./styles";

interface PortraitProps {
  src: string;
  alt: string;
  isVideo?: boolean;
}

export const Portrait = ({ src, isVideo, alt }: PortraitProps) => {
  return (
    <Container>
      {isVideo ? (
        <Video autoPlay loop muted>
          <source src={src} type="video/mp4" />
        </Video>
      ) : (
        <Image src={src} alt={alt} />
      )}
    </Container>
  );
};
