//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
 console.log(req.body);
  
  
 if (req.body['next-page']) {
 res.redirect(req.body['next-page']);
   } else {
  next();
 }
  });


// Add your routes here
// Run this code when a form is submitted to 'project-answer'
router.post('/project-answer', function (req, res) {

  // Make a variable and give it the value from 'project-answer'
  var WhichProject = req.session.data['Which-project-would-you-like-to-know-about']

  // Check whether the variable matches a condition
  if (WhichProject == "Ministry of Justice - Online Signposting Tool Discovery"){
    // Send user to next page
    res.redirect('/moj')
  } if (WhichProject == "Government Digital Service (GDS) - Service Management Platforms") {
    // Send user to next page
    res.redirect('/GDS')
  }

})