import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export const About = () => {

	const [state, handleSubmit] = useForm("mdobjnyw");

	return (
		<>		
		{state.succeeded?<div style={{ display: "flex", gap: "1em", flexDirection:"column" }}>
			<div style={{ display: "flex", gap: "1em" }}>
				<img src="http://source.legia.com/www/images/zawodnik/cut2/d840f1b5793f142701c6ae037a76b9b8.jpg" alt="" />
				<div >
					<h1>Aleksy Nowak</h1>
					<div>
						Uczeń 8-mej klasy szkoły podstawowej im...
					</div>
				</div>
			</div>
			<div style={{ display: "flex", gap: "1em", flexDirection:"column", padding:"2em 3em" }}>
				<h2>Skontaktuj sie ze mną</h2>
				<form style={{display:"flex", flexDirection:"column", gap:"1em" }} onSubmit={handleSubmit}>
					<label htmlFor="email">
						Adres e-Mail
					</label>
					<input style={{padding:".5em 1em"}} placeholder='Tu wprowadź swój adres e-mail' id="email" type="email" name="email" />
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<textarea style={{padding:".5em 1em"}} placeholder='Treść wiadomości' id="message" name="message" rows="10" />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<button style={{maxWidth:"64px", alignSelf:"flex-end"}} type="submit" disabled={state.submitting}>
						Wyślij
					</button>
				</form>
			</div>
		</div>
		: <div style={{display:"flex", height:"500px"}}>
			<div style={{padding:"2em"}}>
				<div>Dziekuję za kontakt.</div>
			</div>
		</div>}
		</>
	)
}