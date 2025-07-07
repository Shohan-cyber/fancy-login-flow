
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', { username, password });
    }, 2000);
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto">
      {/* Glassmorphism container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
            Welcome Back
          </h1>
          <p className="text-cyan-300/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Label htmlFor="username" className="text-white/90 text-sm font-medium">
              Username
            </Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 transition-all duration-300 group-focus-within:text-cyan-300" />
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-12 bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/10"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Label htmlFor="password" className="text-white/90 text-sm font-medium">
              Password
            </Label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 transition-all duration-300 group-focus-within:text-cyan-300" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12 bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:bg-white/10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
              <Label htmlFor="remember" className="text-white/80 text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ animationDelay: '1s' }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing In...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </Button>

          {/* Sign Up Link */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-white/70">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 hover:underline"
              >
                Create account
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
