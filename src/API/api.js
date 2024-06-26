const baseURL = 'http://localhost:9898/';
const batch = 'batch/';
const section = 'section/';
const session = 'session/';
const campus = 'campus/';
const department = 'department/';
const student = 'student/';
const grade = 'grade/';
const course = 'course/';
const auth = 'auth/';
const teacher = 'faculty/';

export const  teacherAPI = {
    'addTeacher': baseURL + teacher + 'addTeacher',
    'getTeachers': baseURL + teacher + 'getall',
    'deleteTeacher': baseURL + teacher + 'deleteTeacher',
    'updateTeacher': baseURL + teacher + 'updateTeacher',
    'getAllSupervisors': baseURL + teacher + 'getallsupervisors'
}

export const studentAPI = {
    'addStudent': baseURL + student + 'addStudent',
    'getStudents': baseURL + student + 'getall',
    'deleteStudent': baseURL + student + 'deleteStudent',
    'updateStudent': baseURL + student + 'updateStudent'
}

export const gradeAPI = {
    'addGrade': baseURL + grade + 'addGrade',
    'getGrades': baseURL + grade + 'getall',
    'deleteGrade': baseURL + grade + 'deleteGrade',
    'updateGrade': baseURL + grade + 'updateGrade'
}
export const courseAPI = {
    'addCourse': baseURL + course + 'addCourse',
    'getCourses': baseURL + course + 'getall',
    'deleteCourse': baseURL + course + 'deleteCourse',
    'updateCourse': baseURL + course + 'updateCourse',
    'getCourseById': baseURL + course + 'getCourseById?courseId='
}

export const batchAPI = {
    'getAll': baseURL + batch + 'getall',
    'addBatch': baseURL + batch + 'addBatch',
    'deleteBatch': baseURL + batch + 'deleteBatch',
    'updateBatch': baseURL + batch + 'updateBatch'
}

export const sectionAPI = {
    'getAll': baseURL + section + 'getall',
    'addSection': baseURL + section + 'addSection',
    'deleteSection': baseURL + section + 'deleteSection',
    'updateSection': baseURL + section + 'updateSection'
}

export const sessionAPI = {
    'getAll': baseURL + session + 'getall',
    'addSession': baseURL + session + 'addSession',
    'deleteSession': baseURL + session + 'deleteSession',
    'updateSession': baseURL + session + 'updateSession'
}

export const campusAPI = {
    'getAll': baseURL + campus + 'getall',
    'addCampus': baseURL + campus + 'addCampus',
    'deleteCampus': baseURL + campus + 'deleteCampus',
    'updateCampus': baseURL + campus + 'updateCampus'
}

export const departmentAPI = {
    'getAll': baseURL + department + 'getAll',
    'addDepartment': baseURL + department + 'adddepartment',
    'deleteDepartment': baseURL + department + 'deletedepartment',
    'updateDepartment': baseURL + department + 'updatedepartment'
}

export const authAPI = {
    'login': baseURL + auth + 'login',
    'register': baseURL + auth + 'register'
}
