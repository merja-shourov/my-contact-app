import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name : String,
    email: String,
    phone: String,
},{timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;