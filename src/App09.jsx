import React from 'react'
import Form01basicOneInput from './Form01basicOneInput'
import Form02multipleInput from './Form02multipleInput'
import Form03onSubmit from './Form03onSubmit'
import Form04onSubmitResetFormData from './Form04onSubmitResetFormData'
                                   
export default function App09() {
  return (
    <div>
      <h4>this is form 1</h4>
      <Form01basicOneInput />
      <hr />
      <h4>this is form 2</h4>
      <Form02multipleInput />
      <hr />
      <h4>this is form 3</h4>
      <Form03onSubmit />
      <hr />
      <h4>this is form 4</h4>
      <Form04onSubmitResetFormData />
    </div>
  )
}
