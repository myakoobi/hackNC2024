import emailjs from 'emailjs-com';

export const sendEmail = (email, income, loan, expenses, result) => {
    const templateParams = {
        to_email: email,
        income: income,
        loan: loan,
        expenses: expenses,
        result: result
    };
    emailjs.send('service_uwu5vqo', 'template_3rsx3wd', templateParams, 'EJq2SG52ZLjCP7P1i')    
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.log('FAILED...', error);
            alert("Email failed to send. Please try again.");
        });
};