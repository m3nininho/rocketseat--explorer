import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {/* so vai aparecer o icone se tiver*/}
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
