import { useEffect, useState } from 'react'
import TabBar from './TabBar'
import { Card } from 'antd'
import { fontSizes } from '../styles'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MySpinner from './MySpinner'

const tabs = [
    {
        title: 'GradeBook',
        key: 'gradebook',
        component: <GradeBook />
    }
    ,
    {
        title: 'Attendance',
        key: 'attendance',
        component: <h1>Attendance</h1>
    },
]

export function Attendance() {
    return (
        <div>
            <h1>Attendance</h1>
        </div>
    )
}




export function GradeBook() {
    return (
        <div>
            <h1>GradeBook</h1>
        </div>
    )
}


const tmpCourseArray = [
    {
        courseName: 'Math',
        courseID: 'MATH101',
        courseDescription: 'This is a math course',
        courseInstructor: 'John Doe',
        courseInstructorEmail: 'khfjdhfjj'
    },
    {
        courseName: 'Science',
        courseID: 'SCI101',
        courseDescription: 'This is a science course',
        courseInstructor: 'Jane Doe',
        courseInstructorEmail: '12313'
    },
    {
        courseName: 'English',
        courseID: 'ENG101',
        courseDescription: 'This is a english course',
        courseInstructor: 'John Doe',
        courseInstructorEmail: 'khfjdhfjj'
    },
    {
        courseName: 'Urdu',
        courseID: 'URD101',
        courseDescription: 'This is a urdu course',
        courseInstructor: 'Jane Doe',
        courseInstructorEmail: '12313'

    }
]


export function Course() {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const courseID = searchParams.get('courseId');

    let { courseId } = useParams();

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // Fetch the course details from the server
        console.log('Course ID: ', courseId)
    }, [])

    return (
        loading ? <MySpinner fullscreen={false} /> :
            (<div>
                <div className={`p-5 font-bold ${fontSizes.small}`}>
                    <h1>Course ID: {courseId}</h1>
                    <h1>Course Intructor</h1>
                    <h1>Credit Hourse</h1>
                </div>
                <TabBar tabs={tabs} />
            </div>)
    )
}
export default function StudentCourse() {


    const navigate = useNavigate();
    const courseOnClick = (courseId) => () => {
        navigate(`/student/course/${courseId}`)
    }

    return (
        <div className='p-5 md:p-8 '>
            <h1 className={`${fontSizes.large} font-semibold mb-8`}>Enrolled Courses</h1>
            <div className='flex md:gap-8 gap-5 flex-wrap'>
                {
                    tmpCourseArray.map(course => {
                        return (
                            <Card onClick={courseOnClick(course.courseID)} key={course.courseID} title={course.courseName} className='w-[300px] shadow-lg hover:shadow-xl hover:scale-105 transition-all hover:cursor-pointer ' bordered={false}>
                                <p>{course.courseDescription}</p>
                                {/* <p>{course.courseInstructor}</p>
                                <p>{course.courseInstructorEmail}</p> */}
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
