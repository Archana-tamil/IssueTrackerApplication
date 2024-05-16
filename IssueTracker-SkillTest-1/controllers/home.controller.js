
import ProjectModel from "../schema/projectSchema.js"
const homePage = async function (req, res) {
  try {
    let projects = await ProjectModel.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker',
      projects,
    });
  } catch(err) {
    console.log('Error', err);
    return;
  }
};
export default homePage;
