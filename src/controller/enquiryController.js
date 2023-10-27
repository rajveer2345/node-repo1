const enquiry = require('../schema/enquirySchema');
const notification = require('../notification/email');


// exports.add = async(req, res) => {
//     try {

//         // console.log(req.body);
//         // const salt = await bcrypt.genSalt(10);
//         // req.body.password = await bcrypt.hash(req.body.password, salt)
//         const formData = new enquiry(req.body);
//         await formData.save();
//         res.json({ message: "enquiry added successfully", data: formData });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// };

exports.add = async (req, res) => {
    try {
        console.log("hjhgjh");
      const formData = new enquiry(req.body);
      await formData.save();
      console.log("saved");
      let addressArray = [];
      addressArray.push(req.body.email);
      addressArray.push("artikabra001@gmail.com");
      console.log(addressArray);
      
      notification.main(addressArray,req.body.subject,req.body.message,req.body.name).catch(console.error);
      
  
      res.json({ message: "enquiry added successfully", data: formData });
    } catch (err) {
      res.status(500).json(err);
    }
  };


  
exports.getAll = async(req, res) => {


    try {

        let formData = await enquiry.find().sort({createdAt:-1})

        res.json(formData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }

}

exports.getById = async(req, res) => {
    try {
        const data = await enquiry.findById(req.params.id)
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}




exports.sendEmail = async (req, res) => {
    try {


      
      notification.main(req.body.address,req.body.subject,req.body.message,req.body.name).catch(console.error);
      
  
      res.json({ message: "email sent successfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  };

// exports.edit = async(req, res) => {
//     try {


//         const userData = await enquiry.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
//         res.json({ message: "success", data: userData });
//     } catch (err) {
//         res.status(500).json(err)
//     }
//  }
// exports.delete = async(req, res) => {

//     const userData = await blog.findByIdAndDelete(req.params.id);
//     try {
//         if (!userData) {
//             res.status(400).json({ message: "form not found." });
//         }
//         res.status(200).json({ message: 'success' });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }