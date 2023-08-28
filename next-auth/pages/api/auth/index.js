// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   const { data: session } = useSession();

//   return (
//     <div>
//       {!session ? (
//         <button onClick={() => signIn("google")}>Sign up with Google</button>
//       ) : (
//         <>
//           <p>Welcome, {session.user.name}!</p>
//           <button onClick={() => signOut()}>Sign out</button>
//         </>
//       )}
//     </div>
//   );
// }
