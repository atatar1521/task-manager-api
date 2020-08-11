const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
  sgMail.send({
	  to: email,
	  from : 'atatar1521@gmail.com',
	  subject : 'Thanks for joining in!',
	  text : `Welcome to the app , ${name}. Let me know how you get along with the app.`,

  })
}

const sendCancelationEmail = (email,name)=>{
	sgMail.send({
		to: email,
		from : 'atatar1521@gmail.com',
		subject : 'Why leaving so soon?',
		text : `Can we ask you , ${name}. why canceling your application?.`,
  
	})
  }

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
}