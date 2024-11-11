import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

export const validationSchema = toTypedSchema(
  object().shape({
    pest_type: string().required().label('Pest type'),
    soil_type: string().required().label('Soil type'),
    city: string().required().label('City'),
    barangay: string().required().label('Barangay'),
  }),
);
