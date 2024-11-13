import { object, number, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

export const validationSchema = toTypedSchema(
  object().shape({
    user_id: number().required().label('Farmer'),
    pest_type: string().required().label('Pest type'),
    soil_type: string().required().label('Soil type'),
    city: string().required().label('City'),
    barangay: string().required().label('Barangay'),
  }),
);
