import Contact from "../models/contactSchema.js";

// @desc get all contoct
// @route GET api/contacts/
// @access public
const allContactController = async (req, res)=>{
    const allContact = await Contact.find();
    res.status(200).json(allContact);
}

// @desc get all contoct
// @route GET api/contacts/
// @access public
const contactController = async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if( !contact ){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.json(contact).status(200);
}

// @desc get all contoct
// @route GET api/contacts/
// @access public
const createContactController = async (req, res)=>{
    const { name, email, phone } = req.body;

    if( !name || !email || !phone ){
        res.status(400).json({message: "all fild are required!"});
    }

    const contact = await Contact.create({name, email, phone});
    res.status(201);
    res.json(contact);
}

// @desc update contact
// @route GET api/contacts/
// @access public
const updateContactController = async (req, res)=>{

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedContact);

}

// @desc get all contoct
// @route GET api/contacts/
// @access public

// I can't delete this user
const deleteContactController = async (req, res)=>{
    const contact = await Contact.findById(req.params.id);

    if( !contact ){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
}

export {allContactController, contactController, createContactController, updateContactController, deleteContactController};