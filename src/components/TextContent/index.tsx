import Heading from '../Heading';

import { Container } from './styles';

export interface TextContentProps {
  title?: string;
  content: string;
}

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <Container data-cy="content">
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default TextContent;
