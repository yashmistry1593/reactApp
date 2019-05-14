import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


const Course = (props) => {
  const { index, course, upvote, downvote } = props
  console.log(props)
  return (
    <Card style={{ maxWidth: '500px', marginBottom: '10px' }}>
      <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
        image={ course.courseImage}
        title={course.title}
      />
      <CardContent>
        <Typography variant="headline" component="h2">{course.title}</Typography>
        <Typography component="p" color="textSecondary">{course.description}</Typography>
        <br />
        <Typography color="textSecondary">{course.upvote_count}
          <Icon color="primary" style={{ cursor:'pointer' }} onClick={() => upvote(index)}>
            thumb_up_alt
    </Icon>

          &nbsp;&nbsp;
    <span>{course.downvote_count}</span>
          <Icon color="primary" style={{ cursor:'pointer' }} onClick={() => downvote(index)}>
            thumb_down_alt
    </Icon>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={course.url} target="_blank">Go To Course</Button>
      </CardActions>
    </Card>
  )

}

function Cards() {
  const courseList = [
    {
      title: "Server Side Rendering with React and Redux",
      description: "Build React, Redux, and React Router apps using Server Side Rendering (SSR), Isomorphic, and Universal JS techniques",
      url: "https://codingthesmartway.com/courses/react-redux-ssr/",
      courseImage: 'react01.png',
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "React - The Complete Guide",
      description: "Dive in and learn React from scratch! Learn Reactjs, Redux, React Routing, Animations, Next.js basics and way more!",
      url: "https://codingthesmartway.com/courses/react-complete-guide/",
      courseImage: 'react02.png',
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "The Complete React Web Developer Course (with Redux)",
      description: "Learn how to build and launch React web applications using React v16, Redux, Webpack, React-Router v4, and more!",
      url: "https://codingthesmartway.com/courses/react-complete/",
      courseImage: 'react03.png',
      upvote_count: 0,
      downvote_count: 0
    }
  ]

  const [courses, setCourse] = useState(courseList)

  const upvote = (index) => {
    const newCourses = [...courses]
    newCourses[index].upvote_count++;
    setCourse(newCourses);
  }

  const downvote = (index) => {
    const newCourses = [...courses]
    newCourses[index].downvote_count++;
    setCourse(newCourses);
  }

  return (
    <div className="app">
      <Grid container spacing={24} style={{ padding: 24 }}>
        {courses.map(( item,index) => (
          <Grid key={index} item xs={12} sm={12} lg={4} xl={3}>
            <Course
              key={index}
              index={index}
              course={item}
              upvote={upvote}
              downvote={downvote}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cards
