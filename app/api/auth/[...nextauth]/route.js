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
            return true;
        },
        async redirect({ url, baseUrl }) {

            if (url.startsWith(baseUrl)) {
                return 'https://github.com/' + (url.includes('?') ? url.split('?')[1].split('=')[1] : '');
            }
            return baseUrl;
        },
    },
});

export { handler as GET, handler as POST };
