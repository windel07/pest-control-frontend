import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

export const validationSchema = toTypedSchema(
  object().shape({
    first_name: string().required().label('First name'),
    last_name: string().required().label('Last name'),
    phone: string().required().label('Phone '),
  }),
);
