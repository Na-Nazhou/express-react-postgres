import React from "react";
import { Grid } from "semantic-ui-react";
import CourseStub from "../components/CourseStub";

const CoursesStub = () => {
  return (
    <Grid columns={3} stackable>
      <Grid.Column>
        <CourseStub />
      </Grid.Column>

      <Grid.Column>
        <CourseStub />
      </Grid.Column>

      <Grid.Column>
        <CourseStub />
      </Grid.Column>
    </Grid>
  );
};

export default CoursesStub;
