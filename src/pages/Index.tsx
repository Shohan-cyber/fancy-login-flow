
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center">
        {/* Left side - Decorative 3D element (similar to your reference) */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            {/* 3D Suit/Business figure representation */}
            <div className="w-80 h-80 relative">
              {/* Main body shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-cyan-400/30 animate-pulse">
                {/* Tie/collar area */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-cyan-500/30 to-blue-600/30 rounded-t-full border border-cyan-400/50" />
                
                {/* Suit jacket outline */}
                <div className="absolute top-20 left-4 right-4 bottom-4 border-2 border-cyan-400/40 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10">
                  {/* Lapels */}
                  <div className="absolute top-4 left-4 w-8 h-16 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-16 border-r-2 border-t-2 border-cyan-400/60 rounded-tr-lg" />
                  
                  {/* Buttons */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-12 space-y-4">
                    <div className="w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                {/* Glowing particles around the figure */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1.5 + Math.random() * 1}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-3xl blur-xl animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <LoginForm />
        </div>
      </div>
      
      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl" />
    </div>
  );
};

export default Index;
