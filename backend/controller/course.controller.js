import Course from '../model/course.model.js';

export const getCourse = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json(course);
  } catch (err) {
    console.error('Error fetching course:', err);
    res.status(500).json({ error: 'An error occurred while fetching courses' });
  }
};
