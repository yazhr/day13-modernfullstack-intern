import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // You can add custom logic here if needed
            return true;
        },
        async redirect({ url, baseUrl }) {
            // Redirect to GitHub profile page after sign-in
            if (url.startsWith(baseUrl)) {
                // If the URL is for redirecting after signing in, go to GitHub profile
                return 'https://github.com/' + (url.includes('?') ? url.split('?')[1].split('=')[1] : '');
            }
            return baseUrl;
        },
    },
});

export { handler as GET, handler as POST };
