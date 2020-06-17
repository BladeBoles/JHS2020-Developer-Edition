/* eslint-disable no-undef */
import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {
  console.log('First custom hook')
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
}

const formRendered = useRef(true);

useEffect(() => {
  if (!formRendered.current) {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setOnSubmitting(false);
    setOnBlur(false);
  }
  formRendered.current = false;
}, [initialValues])

const handleChange = (event) => {

}

export default useCustomForm