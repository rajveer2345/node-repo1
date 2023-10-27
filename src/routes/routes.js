const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');
const blog_controller = require('../controller/blogController');
const project_controller = require('../controller/projectController');
const enquiry_controller = require('../controller/enquiryController');
const type_controller = require('../controller/typeController');

//user routes
router.post('/user/add', user_controller.add);
router.get("/user/getall", user_controller.getAll);
router.get("/user/:id", user_controller.getById);
router.patch("/user/edit/:id", user_controller.edit);
router.delete("/user/delete/:id", user_controller.delete);
router.post("/user/login", user_controller.login);

//blog routes
router.post('/blog/add', blog_controller.add);
router.get("/blog/getall", blog_controller.getAll);
router.get("/blog/:id", blog_controller.getById);
router.patch("/blog/edit/:id", blog_controller.edit);
router.delete("/blog/delete/:id", blog_controller.delete);

// //
 router.patch("/updateStatus/:id",user_controller.edit);


router.get("/blog/getByUserId/:id", blog_controller.getByUserId);

router.get("/blog/search/get/:title",blog_controller.getByTitle);

//project routes

router.post("/project/add", project_controller.add);
router.get("/project/getall", project_controller.getAll);
router.get("/project/:id", project_controller.getById);
router.patch("/project/edit/:id", project_controller.edit);
router.delete("/project/delete/:id", project_controller.delete);
router.get("/project/getByUserId/:id", project_controller.getByUserId);
router.get("/project/search/get/:title",project_controller.getByTitle);

//enquiry routes

router.post("/enquiry/add", enquiry_controller.add);
router.get("/enquiry/getall", enquiry_controller.getAll);
router.get("/enquiry/:id", enquiry_controller.getById);

//user routes
router.get("/users/getall", user_controller.getAll);

//project type
router.get("/type/getall", type_controller.getAll);
router.get("/type/get/:id", type_controller.getById);
router.patch("/proj/type/edit/:id",type_controller.edit );
// router.get("/proj/type/get/:id", type_controller.getById);


///addtype routes
router.post('/type/add', type_controller.add);
router.delete('/type/delete/:id',type_controller.delete);

//edittype routes
router.patch("/type/edit/:id", type_controller.edit);

//

router.post("/sendEmail", enquiry_controller.sendEmail);
module.exports = router;