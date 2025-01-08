import { usePage } from '@inertiajs/react';
// import { User } from '@/types';


export default function useAuth(): App.Data.UserData | null {
  const user = usePage().props.auth.user;

   if (!user) {
    return null; // Return null if no user is found
  }

  return user;
}


