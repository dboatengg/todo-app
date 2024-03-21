import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  task: z
    .string()
    .min(3, { message: 'Field must contain minimum of 3 characters' }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form className='' onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}>
      <input
        {...register('task')}
        type='text'
        placeholder='Add task here...'
        className='form-control'
      />
      {errors.task && <p className='text-danger'>{errors.task.message}</p>}
      <button className='btn btn-primary '>Add task</button>
    </form>
  );
};

export default Form;
