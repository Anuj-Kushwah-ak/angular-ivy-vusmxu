import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CourseBComponent } from "./course-b/course-b.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: CoursesComponent },
      { path: "['/course', course.id]", component: CourseBComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseBComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
