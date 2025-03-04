# Contact Form with EmailJS

This contact form uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Instructions

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free plan allows 200 emails per month

2. **Get Your Public Key**
   - In your EmailJS dashboard, go to "Account" > "API Keys"
   - Copy your "Public Key"
   - Open `pages/contact/page.js`
   - Replace `'YOUR_PUBLIC_KEY'` in the `emailjs.init()` function with your actual public key

3. **Service and Template Information**
   - The contact form is already configured with:
     - Service ID: `service_cv97a6k`
     - Template ID: `template_3xq449j`
   - You don't need to change these values unless you want to use a different service or template

4. **Template Variables**
   - Make sure your email template uses these variables:
     - `{{user_name}}` - The sender's name
     - `{{user_email}}` - The sender's email
     - `{{subject}}` - The email subject
     - `{{message}}` - The message content

## Testing

After setting up EmailJS, you can test the contact form by:

1. Fill out all fields in the form
2. Click "Send Message"
3. You should see a loading spinner and then a success message
4. Check your email to confirm you received the message

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify your EmailJS account is active
3. Confirm your public key is correct
4. Make sure your email service is properly connected
5. Check if you've reached the free plan limit (200 emails/month)

For more help, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 