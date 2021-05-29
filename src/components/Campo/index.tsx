import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { InputType } from "reactstrap/es/Input";
import { Field } from "formik";

interface CampoProps {
  className?: string;
  htmlFor?: string;
  label?: string;
  placeholderInput?: string;
  typeInput?: InputType;
  nameInput?: string;
  idInput?: string;
  erro?: any;
  valueInput?: any;
}

export default function Campo({ htmlFor, label, placeholderInput, typeInput, nameInput, idInput, erro, valueInput }: CampoProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={htmlFor}>{label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Field
          className="form-control"
          type={typeInput}
          name={nameInput}
          id={idInput}
          placeholder={placeholderInput}
          value={valueInput}
        />
      </InputGroup>
      <span>{erro}</span>
    </FormGroup>
  );
}

/*
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
  required?: boolean;
  className?: string;
  valueInput?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Campo({
  htmlFor,
  label,
  placeholderInput,
  typeInput,
  nameInput,
  idInput,
  valueInput,
  required,
  className,
  onChange
}: CampoProps) {
  return (
    <FormGroup className={className}>
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
          required={required}
          value={valueInput}
          onChange={onChange}
        />
      </InputGroup>
    </FormGroup>
  );
}
*/

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