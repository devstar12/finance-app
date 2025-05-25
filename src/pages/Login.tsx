import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await onLogin(data.email, data.password);
      console.log('Login success');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

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
            {...register('password', { required: 'Password is required' })}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <p className="text-sm text-center mt-2">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
