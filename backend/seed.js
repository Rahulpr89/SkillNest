import fs from "fs";
import Course from "./model/course.model.js";

const seedCourses = async () => {
  const count = await Course.countDocuments();
  if (count === 0) {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    await Course.insertMany(data);
    console.log("Course data inserted");
  }
};

export default seedCourses;
