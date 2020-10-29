import Head from "next/head"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Home() {
	const [session, loading] = useSession()
	console.log("Home -> session", session)

	return (
		<>
			<Head>
				<title>Auth Demo</title>
			</Head>
			<nav>
				{loading ? (
					<div>Loading...</div>
				) : !session ? (
					<button onClick={() => signIn("github")}>Sign In With Github</button>
				) : (
					<>
						{session.user.image && (
							<img
								src={session.user.image}
								style={{
									display: "inline-block",
									width: "25px",
									borderRadius: "50%",
								}}
							/>
						)}
						<span>{session.user.name}</span>
						<br />
						<button onClick={signOut}>Sign Out</button>
					</>
				)}
			</nav>
		</>
	)
}
