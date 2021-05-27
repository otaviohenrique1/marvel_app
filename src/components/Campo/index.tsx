import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { Input } from "reactstrap";
import { InputType } from "reactstrap/es/Input";

interface CampoProps {
  htmlFor?: string;
  label?: string;
  placeholderInput?: string;
  typeInput?: InputType;
  nameInput?: string;
  idInput?: string;
  valueInput?: any;
}

export default function Campo({ htmlFor, label, placeholderInput, typeInput, nameInput, idInput,  valueInput }: CampoProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={htmlFor}>{label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="form-control"
          type={typeInput}
          name={nameInput}
          id={idInput}
          placeholder={placeholderInput}
          value={valueInput}
        />
      </InputGroup>
    </FormGroup>
  );
}

/*
export default function Campo({ htmlFor, label, placeholderInput, typeInput, nameInput, idInput, erro }: CampoProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={htmlFor}>{label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Input type={typeInput} name={nameInput} id={idInput} placeholder={placeholderInput}/>
      </InputGroup>
      <span>{erro}</span>
    </FormGroup>
  );
}
*/