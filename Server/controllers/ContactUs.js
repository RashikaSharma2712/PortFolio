const Contact = require('../models/Contact');

exports.contactUs = async (req,res) => {

    try{
        const{name, email, message} = req.body;
        const find = await Contact.findOne({email});
        if(find){
            return res.status(400).json({
                success:false,
                message:"Email Already Exists",
            })
        }
        if(!name || !email || !message){
            return res.status(400).json({
                success:false,
                message:"All Entries Required",
            })
        }
        
        // Try to send email if mailSender is available
        try{
            const mailSender = require('../Utils/mailSender');
            const adminEmail = process.env.MAIL_USER;
            if(adminEmail && process.env.MAIL_HOST && process.env.MAIL_PASS){
                const adminSubject = "New Portfolio Form Submitted";
                const adminMessage = `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `;
            
                await mailSender(
                  adminEmail,
                  adminSubject,
                  adminMessage
                );
            }
        }
        catch(emailError){
            console.error("Email sending failed:", emailError);
            // Continue with form submission even if email fails
        }
        
        const result = await Contact.create({name,email,message});
        console.log(result);
        return res.status(200).json({
            success:true,
            data:result,
            message:"Form Submitted Successfully"
        })
        
    }
   catch(e){
    console.log(e);
    return res.status(500).json({
        success:false,
        message:e.message,
    })

   }
    
}