import * as yup from 'yup';
 import { I18nManager } from 'react-native';

const {isRTL} = I18nManager;

 


export const validateBookData = yup.object().shape({
  Title: yup
  .string()
  .required("Enter the book title")
  
  ,
  Description: yup
  .string()
  .required("Enter the book description"),

  date: yup
  .string()
  .required("Enter the book publish date"),
 
});
 