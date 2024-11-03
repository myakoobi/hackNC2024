import emailjs from 'emailjs-com';

export const sendEmail = (email, income, loan, expenses, result) => {
    const templateParams = {
        to_email: email,
        income: income,
        loan: loan,
        expenses: expenses,
        result: result
    };
    emailjs.send('service_uwu5vqo', 'template_jfsomuj', templateParams, 'EJq2SG52ZLjCP7P1i')    
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
            console.log('FAILED...', error);
        });
};