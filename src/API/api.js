const baseURL = 'https://localhost:9898/';

export const studentAPI = {
    'addStudent': baseURL + 'addStudent',
    'getStudents': baseURL + 'getStudents',
    'deleteStudent': baseURL + 'deleteStudent',
    'updateStudent': baseURL + 'updateStudent'
}

export const gradeAPI = {
    'addGrade': baseURL + 'addGrade',
    'getGrades': baseURL + 'getGrades',
    'deleteGrade': baseURL + 'deleteGrade',
    'updateGrade': baseURL + 'updateGrade'
}
export const courseAPI = {
    'addCourse': baseURL + 'addCourse',
    'getCourses': baseURL + 'getCourses',
    'deleteCourse': baseURL + 'deleteCourse',
    'updateCourse': baseURL + 'updateCourse',
    'getCourseById': baseURL + 'getCourseById?courseId='
}

