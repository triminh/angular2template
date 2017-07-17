"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./employee-detail.component");
var notfound_component_1 = require("./notfound.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_projects_component_1 = require("./employee-projects.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent,
        children: [
            { path: 'overview', component: employee_overview_component_1.EmployeeOverviewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent },
        ]
    },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map