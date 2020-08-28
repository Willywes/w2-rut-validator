# W2 Rut Validator

* Return true or false for format and unformat RUT
* Return format and unformat string

### To Install
`npm i w2-rut-validator`

### How to use

`import { RutValidator } from "w2-rut-validator"`

##### Validate
```
RutValidator.validate(rut) // true or false
```

##### Format
```
RutValidator.format('111111111') // return 11.111.111-1
```

##### UnFormat
```
RutValidator.unformat('11.111.111-1') // return 111111111
```

##### IsValid
Validate Regex `[^0-9Kk]` and `999.999.999-9` max length
```
RutValidator.isValid(rut) // return true or false
```


### Basic Example

##### Validate
```
RutValidator.validate('111111111') // return true
RutValidator.validate('11.111.111-1') // return true
RutValidator.validate('111111112') // return false
RutValidator.validate('11.111.111-2') // return false
```

##### Format and Validate
```
let rut = '111111111' // or 111111111
RutValidator.validate(RutValidator.validate(rut)) // return true

let rut = '111111112' // or 111111112
RutValidator.validate(RutValidator.validate(rut)) // return false

let rut = 'ASD-F'
RutValidator.isValid(rut) // return false
```

### React Example

```
import React, { useState } from "react";
import { RutValidator } from "w2-rut-validator"

const RegisterForm = () => {

  const [rut, setRut] = useState('');

  const RutFormat = e => {
    if(RutValidator.isValid(e.target.value)){
      setRut(RutValidator.format(e.target.value))
    }
  }
   
  const RutValidate = e => {
    if(!RutValidator.validate(e.target.value)){
        alert('El RUT ingresado no es correcto, intentalo denuevo.');
        setRut('')
        e.target.focus()
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={e => setRut(e.target.value)}
        onKeyDown={RutFormat}
        placeholder="19123456-9"
        onBlur={RutValidate}
        value={rut}
      />
    </div>
  );
};

export default RegisterForm;
```

