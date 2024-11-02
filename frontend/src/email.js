import emailjs from 'emailjs-com';

export const sendEmail = (email, result) => {
    const templateParams = {
        to_email: email,
        message: result
    };
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')    
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
            console.log('FAILED...', error);
        });
};