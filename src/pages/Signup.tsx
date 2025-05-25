import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Checkbox from '../components/Checkbox';
import { toast } from 'react-toastify';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const Signup = () => {
  const navigate = useNavigate();
  const { onRegister } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await onRegister(data.fullName, data.email, data.password);
      toast.success('Signup successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register('email', { required: 'Email is required' })}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value, { password }) =>
                value === password || 'Passwords do not match',
            })}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <Controller
            name="acceptTerms"
            control={control}
            defaultValue={false}
            rules={{ required: 'You must accept the terms' }}
            render={({ field }) => (
              <Checkbox
                id="acceptTerms"
                label={
                  <>
                    I accept the{' '}
                    <a href="/terms" className="text-blue-600 underline">
                      Terms & Conditions
                    </a>
                  </>
                }
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        {errors.acceptTerms && (
          <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-2">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
