"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, User, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/register', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      console.log('Registered:', response.data);
      // Redirect or show success
      window.location.href = '/login';
    } catch (error: any) {
      console.error('Registration failed:', error.response?.data?.error || error.message);
      // Handle error state here, e.g., show a toast
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col space-y-6"
    >
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Create an account
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Join SWAP and start exchanging products today
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <Input
                      placeholder="John Doe"
                      className="pl-10 bg-white/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <Input
                      placeholder="name@example.com"
                      className="pl-10 bg-white/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 bg-white/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg h-11 rounded-xl mt-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <>
                Sign Up <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          Sign in
        </Link>
      </div>
    </motion.div>
  );
}
