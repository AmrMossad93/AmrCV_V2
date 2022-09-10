"use strict";
(self["webpackChunkplacid_ng"] = self["webpackChunkplacid_ng"] || []).push([["src_app_Pages_main-page_module_ts"],{

/***/ 7905:
/*!***************************************************!*\
  !*** ./src/app/Pages/main-page-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ 4955);
/* harmony import */ var _main_page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/project-details/project-details.component */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent },
    { path: 'project-details/:id', component: _main_page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsComponent },
];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵfac = function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); };
MainPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3911:
/*!*******************************************!*\
  !*** ./src/app/Pages/main-page.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-routing.module */ 7905);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 4955);
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/shared.module */ 5326);
/* harmony import */ var _main_page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/project-details/project-details.component */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class MainPageModule {
}
MainPageModule.ɵfac = function MainPageModule_Factory(t) { return new (t || MainPageModule)(); };
MainPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule,
        _Shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent, _main_page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule,
        _Shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 4955:
/*!********************************************************!*\
  !*** ./src/app/Pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_programming_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/programming-skills.service */ 2664);
/* harmony import */ var _Services_certification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/certification.service */ 7289);
/* harmony import */ var _Services_experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/experience.service */ 3271);
/* harmony import */ var _Services_education_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/education.service */ 5290);
/* harmony import */ var _Services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/client.service */ 6467);
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/projects.service */ 6659);
/* harmony import */ var _Services_service_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/service-details.service */ 3795);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Shared_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Shared/experience-card/experience-card.component */ 6353);
/* harmony import */ var _Shared_education_card_education_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Shared/education-card/education-card.component */ 2654);
/* harmony import */ var _Shared_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Shared/certification-card/certification-card.component */ 1563);
/* harmony import */ var _Shared_services_card_services_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Shared/services-card/services-card.component */ 8568);
/* harmony import */ var _Shared_client_card_client_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Shared/client-card/client-card.component */ 440);
/* harmony import */ var _Shared_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Shared/project-card/project-card.component */ 7547);
















function MainPageComponent_div_380_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-experience-card", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("company", exp_r6.company)("distribution", exp_r6.distribution)("from", exp_r6.from)("position", exp_r6.position)("to", exp_r6.to);
} }
function MainPageComponent_div_384_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-education-card", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("to", edu_r7.to)("from", edu_r7.from)("distribution", edu_r7.distribution)("name", edu_r7.name)("department", edu_r7.department);
} }
function MainPageComponent_div_388_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-certification-card", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cir_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("imagePath", cir_r8.imagePath);
} }
function MainPageComponent_div_400_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-services-card", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("serviceName", service_r9.serviceName)("description", service_r9.description)("icon", service_r9.icon);
} }
function MainPageComponent_div_409_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-project-card", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("image", project_r10.images[0])("id", project_r10.id)("projectName", project_r10.projectName)("type", project_r10.type);
} }
function MainPageComponent_div_431_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-client-card", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cl_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", cl_r11.name)("image", cl_r11.imgPath)("url", cl_r11.url);
} }
class MainPageComponent {
    constructor(programmingSkillsService, certificationService, experienceService, educationService, clientsService, projectsService, serviceDetailsService) {
        this.programmingSkillsService = programmingSkillsService;
        this.certificationService = certificationService;
        this.experienceService = experienceService;
        this.educationService = educationService;
        this.clientsService = clientsService;
        this.projectsService = projectsService;
        this.serviceDetailsService = serviceDetailsService;
    }
    ngOnInit() {
        this.getProgrammingSkillsDetails();
        this.getAllExperience();
        this.getAllEducations();
        this.getCertifications();
        this.getMyServices();
        this.getMyClients();
        this.getMyProjects();
    }
    ngAfterViewInit() {
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li').on('click', function (g) {
                var tab = $(this).closest('.tab'), index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
                tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(this.jQuery);
    }
    getProgrammingSkillsDetails() {
        this.programmingSkillsService.getProgrammingSkills().subscribe(res => {
            this.programmingSkills = res;
        });
    }
    getAllExperience() {
        this.experienceService.getExperienceJobs().subscribe(res => {
            this.experiences = res;
        });
    }
    getAllEducations() {
        this.educationService.getEducationDetails().subscribe(res => {
            this.educations = res;
        });
    }
    getCertifications() {
        this.certificationService.getAllCertifications().subscribe(res => {
            this.certification = res;
        });
    }
    getMyServices() {
        this.serviceDetailsService.getServiceDetails().subscribe(res => {
            this.serviceDetails = res;
        });
    }
    getMyClients() {
        this.clientsService.getClients().subscribe(res => {
            this.client = res;
        });
    }
    getMyProjects() {
        this.projectsService.getProjects().subscribe(res => {
            this.projects = res;
        });
    }
    getJS() {
        $.getScript('../assets/js/main.js');
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_programming_skills_service__WEBPACK_IMPORTED_MODULE_0__.ProgrammingSkillsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_certification_service__WEBPACK_IMPORTED_MODULE_1__.CertificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_experience_service__WEBPACK_IMPORTED_MODULE_2__.ExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_education_service__WEBPACK_IMPORTED_MODULE_3__.EducationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_projects_service__WEBPACK_IMPORTED_MODULE_5__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_Services_service_details_service__WEBPACK_IMPORTED_MODULE_6__.ServiceDetailsService)); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 495, vars: 6, consts: [[1, "main-container"], ["id", "placid-aside", 1, "placid-aside", "bg-0f1d22"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "image"], [1, "d-table"], [1, "d-table-cell"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#home", 1, "nav-link", "active"], ["href", "#about", 1, "nav-link"], ["href", "#services", 1, "nav-link"], ["href", "#portfolio", 1, "nav-link"], ["href", "#blog", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "aside-footer"], ["href", "#contact", 1, "default-btn"], [1, "social"], ["href", "https://www.facebook.com/amr.mossad.12979", "target", "_blank"], [1, "ri-facebook-box-line"], ["href", "https://twitter.com/AmrMossad8", "target", "_blank"], [1, "ri-twitter-line"], ["href", "https://www.linkedin.com/in/amr-mossad-209976158/", "target", "_blank"], [1, "ri-linkedin-box-line"], ["href", "https://www.instagram.com/eng.amrmossad2/", "target", "_blank"], [1, "ri-instagram-line"], [1, "line"], ["id", "main-content", 1, "main-content"], [1, "responsive-burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["data-jarallax", "{\"speed\": 0.3}", 1, "main-banner", "banner-bg1", "jarallax"], [1, "container"], [1, "main-banner-content"], [1, "sub-title"], [1, "scroll-btn"], ["href", "#about"], [1, "mouse"], ["id", "about", 1, "about-area", "ptb-120"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-12"], [1, "about-content"], [1, "tab", "about-list-tab"], [1, "tabs"], [1, "tab-content"], [1, "tabs-item"], [1, "skills-area"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "skills-item"], [1, "skills-header"], [1, "skills-title"], [1, "skills-percentage"], [1, "count-box"], ["data-speed", "2000", "data-stop", "95", 1, "count-text"], [1, "skills-bar"], [1, "bar-inner"], ["data-width", "95", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "80", 1, "count-text"], ["data-width", "80", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "90", 1, "count-text"], ["data-width", "90", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "85", 1, "count-text"], ["data-width", "85", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "92", 1, "count-text"], ["data-width", "92", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "70", 1, "count-text"], ["data-width", "70", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "75", 1, "count-text"], ["data-width", "75", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "65", 1, "count-text"], ["data-width", "65", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "60", 1, "count-text"], ["data-width", "60", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "50", 1, "count-text"], ["data-width", "50", 1, "bar", "progress-line"], [1, "experience-area"], ["class", "col-lg-6 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "education-area"], [1, "certification-area"], ["class", "col-lg-4 col-md-4 col-sm-4 col-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12"], [1, "about-image"], ["src", "assets/img/Me/AmrMossad-Image.jpeg", "alt", "image"], ["id", "services", 1, "services-area", "pt-120", "pb-90", "bg-0f1d22"], ["class", "col-lg-4 col-sm-6 col-md-6", 4, "ngFor", "ngForOf"], ["id", "portfolio", 1, "works-area", "pt-120", "pb-90"], ["class", "col-lg-4 col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], [1, "hire-me-area", "bg-0f1d22", "ptb-120"], [1, "col-lg-7", "col-md-12"], [1, "hire-me-content"], [1, "col-lg-5", "col-md-12"], [1, "hire-me-btn"], [1, "my-clients-area", "ptb-120"], ["class", "col-lg-3 col-md-4 col-sm-6 col-6", 4, "ngFor", "ngForOf"], ["id", "contact", 1, "contact-area"], [1, "container-fluid"], ["data-jarallax", "{\"speed\": 0.3}", 1, "contact-content", "jarallax"], [1, "contact-form", "bg-0f1d22"], ["href", "tel:01099049044", 1, "default-btn"], ["href", "assets/MyCV/Amr%20Mossad%20CV.pdf", "download", "", 1, "default-btn"], [1, "footer-area"], [1, "footer-content"], [1, "footer-contact-info"], [1, "ri-map-pin-line"], ["href", "#", "target", "_blank"], [1, "ri-phone-line"], ["href", "tel:01099049044"], [1, "ri-mail-line"], ["href", "mailto:eng.amrmossad93@gmail.com"], ["href", "https://github.com/AmrMossad93", "target", "_blank"], [1, "footer-bottom-area"], [1, "ri-copyright-line"], ["routerLink", "/main-page", "target", "_blank"], [3, "company", "distribution", "from", "position", "to"], [3, "to", "from", "distribution", "name", "department"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-6"], [3, "imagePath"], [1, "col-lg-4", "col-sm-6", "col-md-6"], [3, "serviceName", "description", "icon"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [3, "image", "id", "projectName", "type"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-6"], [3, "name", "image", "url"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "li", 8)(21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "li", 8)(24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 15)(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ul", 17)(30, "li")(31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "li")(34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "li")(37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "li")(40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 27)(44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](45, "span", 29)(46, "span", 30)(47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 32)(49, "div", 5)(50, "div", 6)(51, "div", 33)(52, "div", 34)(53, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Hello I'am");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Amr Mossad");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "I\u2019am a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 36)(62, "a", 37)(63, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "section", 39)(66, "div", 33)(67, "div", 40)(68, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "Leading the way in Creative Web & Mobile App");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 41)(73, "div", 42)(74, "div", 43)(75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Hi, I Am Looking For A Job In A National Or Multi-National Company To Enrich My Skills And Abilities, Or Perform Any Projects Or Tasks As A Front-End Developer. Also, I Am Working As A Freelance Front-End Web & Mobile Developer For Companies Or Websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 44)(78, "ul", 45)(79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80, "Programming Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86, "Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 46)(88, "div", 47)(89, "div", 48)(90, "div", 49)(91, "div", 50)(92, "div", 51)(93, "div", 52)(94, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95, " HTML5 & CSS3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "div", 54)(97, "div", 55)(98, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 57)(102, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](103, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 50)(105, "div", 51)(106, "div", 52)(107, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div", 54)(110, "div", 55)(111, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](113, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "div", 57)(115, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](116, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "div", 50)(118, "div", 51)(119, "div", 52)(120, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](121, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "div", 54)(123, "div", 55)(124, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](125, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](126, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 57)(128, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](129, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 50)(131, "div", 51)(132, "div", 52)(133, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](134, " ADOBE XD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "div", 54)(136, "div", 55)(137, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](138, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](140, "div", 57)(141, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](142, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "div", 50)(144, "div", 51)(145, "div", 52)(146, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](147, "IONIC Mobile Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](148, "div", 54)(149, "div", 55)(150, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](152, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](153, "div", 57)(154, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](155, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](156, "div", 50)(157, "div", 51)(158, "div", 52)(159, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](160, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "div", 54)(162, "div", 55)(163, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](164, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](165, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](166, "div", 57)(167, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](168, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "div", 50)(170, "div", 51)(171, "div", 52)(172, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](173, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](174, "div", 54)(175, "div", 55)(176, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](177, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](178, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](179, "div", 57)(180, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](182, "div", 50)(183, "div", 51)(184, "div", 52)(185, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](186, "ECMASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](187, "div", 54)(188, "div", 55)(189, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](190, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](191, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](192, "div", 57)(193, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](194, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](195, "div", 50)(196, "div", 51)(197, "div", 52)(198, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](199, "JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](200, "div", 54)(201, "div", 55)(202, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](203, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](204, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](205, "div", 57)(206, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](207, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](208, "div", 50)(209, "div", 51)(210, "div", 52)(211, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](212, "JQUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](213, "div", 54)(214, "div", 55)(215, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](216, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](217, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](218, "div", 57)(219, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](220, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](221, "div", 50)(222, "div", 51)(223, "div", 52)(224, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](225, "NODEJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](226, "div", 54)(227, "div", 55)(228, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](229, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](230, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](231, "div", 57)(232, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](233, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](234, "div", 50)(235, "div", 51)(236, "div", 52)(237, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](238, "EXPRESSJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](239, "div", 54)(240, "div", 55)(241, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](242, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](243, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](244, "div", 57)(245, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](246, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](247, "div", 50)(248, "div", 51)(249, "div", 52)(250, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](251, "MONGODB");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](252, "div", 54)(253, "div", 55)(254, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](255, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](256, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](257, "div", 57)(258, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](259, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](260, "div", 50)(261, "div", 51)(262, "div", 52)(263, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](264, "SQL SERVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](265, "div", 54)(266, "div", 55)(267, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](268, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](269, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](270, "div", 57)(271, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](272, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](273, "div", 50)(274, "div", 51)(275, "div", 52)(276, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](277, "ASP.NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](278, "div", 54)(279, "div", 55)(280, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](281, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](282, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](283, "div", 57)(284, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](285, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](286, "div", 50)(287, "div", 51)(288, "div", 52)(289, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](290, "MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](291, "div", 54)(292, "div", 55)(293, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](294, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](295, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](296, "div", 57)(297, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](298, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](299, "div", 50)(300, "div", 51)(301, "div", 52)(302, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](303, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](304, "div", 54)(305, "div", 55)(306, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](307, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](308, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](309, "div", 57)(310, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](311, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](312, "div", 50)(313, "div", 51)(314, "div", 52)(315, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](316, "ENTITY FRAMEWORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](317, "div", 54)(318, "div", 55)(319, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](320, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](321, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](322, "div", 57)(323, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](324, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](325, "div", 50)(326, "div", 51)(327, "div", 52)(328, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](329, "WEB API");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](330, "div", 54)(331, "div", 55)(332, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](333, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](334, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](335, "div", 57)(336, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](337, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](338, "div", 50)(339, "div", 51)(340, "div", 52)(341, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](342, "GIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](343, "div", 54)(344, "div", 55)(345, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](346, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](347, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](348, "div", 57)(349, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](350, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](351, "div", 50)(352, "div", 51)(353, "div", 52)(354, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](355, "Flutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](356, "div", 54)(357, "div", 55)(358, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](359, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](360, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](361, "div", 57)(362, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](363, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](364, "div", 50)(365, "div", 51)(366, "div", 52)(367, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](368, "Dart");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](369, "div", 54)(370, "div", 55)(371, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](372, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](373, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](374, "div", 57)(375, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](376, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](377, "div", 47)(378, "div", 78)(379, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](380, MainPageComponent_div_380_Template, 2, 5, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](381, "div", 47)(382, "div", 80)(383, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](384, MainPageComponent_div_384_Template, 2, 5, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](385, "div", 47)(386, "div", 81)(387, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](388, MainPageComponent_div_388_Template, 2, 1, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](389, "div", 83)(390, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](391, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](392, "section", 86)(393, "div", 33)(394, "div", 40)(395, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](396, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](397, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](398, "I Offer Awesome Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](399, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](400, MainPageComponent_div_400_Template, 2, 3, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](401, "section", 88)(402, "div", 33)(403, "div", 40)(404, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](405, "Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](406, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](407, "Some of My Creative Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](408, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](409, MainPageComponent_div_409_Template, 2, 4, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](410, "section", 90)(411, "div", 33)(412, "div", 41)(413, "div", 91)(414, "div", 92)(415, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](416, "Have You Any Project?");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](417, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](418, "I am Available for Freelance Hire");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](419, "div", 93)(420, "div", 94)(421, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](422, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](423, "div", 95)(424, "div", 33)(425, "div", 40)(426, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](427, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](428, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](429, "My Honoranle Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](430, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](431, MainPageComponent_div_431_Template, 2, 3, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](432, "section", 97)(433, "div", 98)(434, "div", 49)(435, "div", 93)(436, "div", 99)(437, "div", 5)(438, "div", 6)(439, "div", 40)(440, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](441, "Let's talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](442, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](443, "Get in Touch With Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](444, "div", 91)(445, "div", 100)(446, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](447, "Call Me Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](448, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](449, "Download My CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](450, "footer", 103)(451, "div", 33)(452, "div", 104)(453, "div", 2)(454, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](455, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](456, "div", 105)(457, "ul")(458, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](459, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](460, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](461, "Faisal , Giza - Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](462, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](463, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](464, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](465, "(002) 01099049044");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](466, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](467, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](468, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](469, "Send Me Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](470, "ul", 17)(471, "li")(472, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](473, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](474, "li")(475, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](476, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](477, "li")(478, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](479, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](480, "li")(481, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](482, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](483, "li")(484, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](485, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](486, "div", 113)(487, "div", 33)(488, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](489, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](490, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](491, "2020. All Rights Reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](492, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](493, "Amr Mossad");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](494, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](380);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.educations);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.certification);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.serviceDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.client);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _Shared_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__.ExperienceCardComponent, _Shared_education_card_education_card_component__WEBPACK_IMPORTED_MODULE_8__.EducationCardComponent, _Shared_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_9__.CertificationCardComponent, _Shared_services_card_services_card_component__WEBPACK_IMPORTED_MODULE_10__.ServicesCardComponent, _Shared_client_card_client_card_component__WEBPACK_IMPORTED_MODULE_11__.ClientCardComponent, _Shared_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_12__.ProjectCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3043:
/*!******************************************************************************!*\
  !*** ./src/app/Pages/main-page/project-details/project-details.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsComponent": () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/projects.service */ 6659);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ProjectDetailsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function ProjectDetailsComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", img_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sorry!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "This App Is Not Finished From The Company Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function ProjectDetailsComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Live Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r3.project == null ? null : ctx_r3.project.webSiteURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Android");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.project == null ? null : ctx_r4.project.androidLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "IOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r5.project == null ? null : ctx_r5.project.iosLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ProjectDetailsComponent {
    constructor(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.route.params.subscribe(params => {
            this.projectId = +params.id;
        });
    }
    ngOnInit() {
        this.getProjectById();
    }
    getProjectById() {
        this.projectsService.getProjects().subscribe(res => {
            this.projects = res;
        }, error => {
        }, () => {
            this.project = this.projects.filter(c => c.id === this.projectId)[0];
        });
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 125, vars: 11, consts: [[1, "main-container"], ["id", "placid-aside", 1, "placid-aside", "bg-0f1d22"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "image"], [1, "d-table"], [1, "d-table-cell"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#home", 1, "nav-link", "active"], ["href", "#about", 1, "nav-link"], ["href", "#services", 1, "nav-link"], ["href", "#portfolio", 1, "nav-link"], ["href", "#blog", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "aside-footer"], ["href", "#contact", 1, "default-btn"], [1, "social"], ["href", "https://www.facebook.com/amr.mossad.12979", "target", "_blank"], [1, "ri-facebook-box-line"], ["href", "https://twitter.com/AmrMossad8", "target", "_blank"], [1, "ri-twitter-line"], ["href", "https://www.linkedin.com/in/amr-mossad-209976158/", "target", "_blank"], [1, "ri-linkedin-box-line"], ["href", "https://www.instagram.com/eng.amrmossad2/", "target", "_blank"], [1, "ri-instagram-line"], [1, "line"], ["id", "main-content", 1, "main-content"], [1, "responsive-burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], [1, "works-details-area", "bg-0f1d22", "ptb-120"], [1, "container"], [1, "row"], ["class", "col-lg-6 col-md-6 col-sm-6", 4, "ngIf"], ["class", "col-lg-3 col-md-3 col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12"], [1, "works-details-desc"], [1, "features-text"], [1, "ri-check-line"], [1, "works-details-info"], [1, "single-info-box"], ["class", "single-info-box", 4, "ngIf"], [1, "footer-area"], [1, "footer-content"], [1, "footer-contact-info"], [1, "ri-map-pin-line"], ["href", "#", "target", "_blank"], [1, "ri-phone-line"], ["href", "tel:01099049044"], [1, "ri-mail-line"], ["href", "mailto:eng.amrmossad93@gmail.com"], ["href", "https://github.com/AmrMossad93", "target", "_blank"], [1, "footer-bottom-area"], [1, "ri-copyright-line"], ["routerLink", "/main-page", "target", "_blank"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "works-details-image"], ["src", "assets/img/blog/img1.jpg", "alt", "projects"], ["href", "https://www.youtube.com/watch?v=bk7McNUjWgw", 1, "popup-youtube"], [1, "ri-play-line"], [1, "col-lg-3", "col-md-3", "col-sm-3"], ["alt", "projects", 3, "src"], [1, "popup-btn", 3, "href"], [1, "ri-add-line"], ["target", "_blank", 1, "default-btn", 3, "href"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 8)(21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 8)(24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15)(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 17)(30, "li")(31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 27)(44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 29)(46, "span", 30)(47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section", 32)(49, "div", 33)(50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectDetailsComponent_div_51_Template, 5, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProjectDetailsComponent_div_52_Template, 5, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 37)(54, "div", 38)(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 39)(60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Core Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 41)(66, "div", 42)(67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 42)(72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ProjectDetailsComponent_div_76_Template, 5, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, ProjectDetailsComponent_div_77_Template, 3, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ProjectDetailsComponent_div_78_Template, 3, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ProjectDetailsComponent_div_79_Template, 3, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "footer", 44)(81, "div", 33)(82, "div", 45)(83, "div", 2)(84, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 46)(87, "ul")(88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Faisal , Giza - Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "(002) 01099049044");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Send Me Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 17)(101, "li")(102, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li")(108, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li")(111, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li")(114, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 54)(117, "div", 33)(118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "2020. All Rights Reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Amr Mossad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.vedioUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.project == null ? null : ctx.project.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.projectDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.coreDevelopment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project == null ? null : ctx.project.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.project == null ? null : ctx.project.webSiteURL) && !ctx.project.androidLink && !ctx.project.iosLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.webSiteURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.androidLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project == null ? null : ctx.project.iosLink);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7289:
/*!***************************************************!*\
  !*** ./src/app/Services/certification.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationService": () => (/* binding */ CertificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class CertificationService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getAllCertifications() {
        return this.dataService.get('certification.json');
    }
}
CertificationService.ɵfac = function CertificationService_Factory(t) { return new (t || CertificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
CertificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CertificationService, factory: CertificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6467:
/*!********************************************!*\
  !*** ./src/app/Services/client.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class ClientService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getClients() {
        return this.dataService.get('clients.json');
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2498:
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(JSONFileName) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jsonFilePath}${JSONFileName}`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5290:
/*!***********************************************!*\
  !*** ./src/app/Services/education.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationService": () => (/* binding */ EducationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class EducationService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getEducationDetails() {
        return this.dataService.get('education.json');
    }
}
EducationService.ɵfac = function EducationService_Factory(t) { return new (t || EducationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
EducationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EducationService, factory: EducationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3271:
/*!************************************************!*\
  !*** ./src/app/Services/experience.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceService": () => (/* binding */ ExperienceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class ExperienceService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getExperienceJobs() {
        return this.dataService.get('experience.json');
    }
}
ExperienceService.ɵfac = function ExperienceService_Factory(t) { return new (t || ExperienceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ExperienceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExperienceService, factory: ExperienceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2664:
/*!********************************************************!*\
  !*** ./src/app/Services/programming-skills.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgrammingSkillsService": () => (/* binding */ ProgrammingSkillsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class ProgrammingSkillsService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getProgrammingSkills() {
        return this.dataService.get('programmingSkillsProgress.json');
    }
}
ProgrammingSkillsService.ɵfac = function ProgrammingSkillsService_Factory(t) { return new (t || ProgrammingSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ProgrammingSkillsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProgrammingSkillsService, factory: ProgrammingSkillsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6659:
/*!**********************************************!*\
  !*** ./src/app/Services/projects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class ProjectsService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getProjects() {
        return this.dataService.get('projects.json');
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3795:
/*!*****************************************************!*\
  !*** ./src/app/Services/service-details.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceDetailsService": () => (/* binding */ ServiceDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 2498);


class ServiceDetailsService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getServiceDetails() {
        return this.dataService.get('services.json');
    }
}
ServiceDetailsService.ɵfac = function ServiceDetailsService_Factory(t) { return new (t || ServiceDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
ServiceDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceDetailsService, factory: ServiceDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1563:
/*!***************************************************************************!*\
  !*** ./src/app/Shared/certification-card/certification-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationCardComponent": () => (/* binding */ CertificationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CertificationCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CertificationCardComponent.ɵfac = function CertificationCardComponent_Factory(t) { return new (t || CertificationCardComponent)(); };
CertificationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificationCardComponent, selectors: [["app-certification-card"]], inputs: { imagePath: "imagePath" }, decls: 2, vars: 1, consts: [[1, "single-certification-box"], ["alt", "image", 3, "src"]], template: function CertificationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 440:
/*!*************************************************************!*\
  !*** ./src/app/Shared/client-card/client-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientCardComponent": () => (/* binding */ ClientCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ClientCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ClientCardComponent.ɵfac = function ClientCardComponent_Factory(t) { return new (t || ClientCardComponent)(); };
ClientCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientCardComponent, selectors: [["app-client-card"]], inputs: { url: "url", name: "name", image: "image" }, decls: 3, vars: 3, consts: [[1, "single-clients"], ["target", "_blank", 3, "href"], [3, "src", "alt"]], template: function ClientCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2654:
/*!*******************************************************************!*\
  !*** ./src/app/Shared/education-card/education-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationCardComponent": () => (/* binding */ EducationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EducationCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EducationCardComponent.ɵfac = function EducationCardComponent_Factory(t) { return new (t || EducationCardComponent)(); };
EducationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationCardComponent, selectors: [["app-education-card"]], inputs: { from: "from", to: "to", name: "name", department: "department", distribution: "distribution" }, decls: 7, vars: 5, consts: [[1, "single-education-box"]], template: function EducationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.from, " - ", ctx.to, " (", ctx.department, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.distribution);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6353:
/*!*********************************************************************!*\
  !*** ./src/app/Shared/experience-card/experience-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceCardComponent": () => (/* binding */ ExperienceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ExperienceCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { from: "from", to: "to", company: "company", position: "position", distribution: "distribution" }, decls: 9, vars: 5, consts: [[1, "single-experience-box"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.from, " - ", ctx.to, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.position, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.distribution);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3520:
/*!***************************************************************!*\
  !*** ./src/app/Shared/progress-bar/progress-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProgressBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { name: "name", percentage: "percentage" }, decls: 12, vars: 1, consts: [[1, "skills-item"], [1, "skills-header"], [1, "skills-title"], [1, "skills-percentage"], [1, "count-box"], ["data-speed", "2000", "data-stop", "95", 1, "count-text"], [1, "skills-bar"], [1, "bar-inner"], ["data-width", "95", 1, "bar", "progress-line"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7547:
/*!***************************************************************!*\
  !*** ./src/app/Shared/project-card/project-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": () => (/* binding */ ProjectCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ProjectCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { projectName: "projectName", id: "id", type: "type", image: "image" }, decls: 13, vars: 7, consts: [[1, "single-works-box"], [1, "works-image"], [3, "src", "alt"], [1, "overlay"], [1, "link-btn", 3, "routerLink"], [1, "works-content"], [3, "routerLink"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h3")(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul")(10, "li")(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/main-page/project-details/", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/main-page/project-details/", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/main-page/project-details/", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8568:
/*!*****************************************************************!*\
  !*** ./src/app/Shared/services-card/services-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesCardComponent": () => (/* binding */ ServicesCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function ServicesCardComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.route);
} }
class ServicesCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ServicesCardComponent.ɵfac = function ServicesCardComponent_Factory(t) { return new (t || ServicesCardComponent)(); };
ServicesCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesCardComponent, selectors: [["app-services-card"]], inputs: { icon: "icon", serviceName: "serviceName", description: "description", route: "route" }, decls: 8, vars: 5, consts: [[1, "single-services-box"], [1, "icon"], ["class", "read-more-btn", 3, "routerLink", 4, "ngIf"], [1, "read-more-btn", 3, "routerLink"], [1, "ri-arrow-right-s-line"]], template: function ServicesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServicesCardComponent_a_7_Template, 3, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serviceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.route);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5326:
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 3520);
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-card/experience-card.component */ 6353);
/* harmony import */ var _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-card/education-card.component */ 2654);
/* harmony import */ var _certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certification-card/certification-card.component */ 1563);
/* harmony import */ var _services_card_services_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-card/services-card.component */ 8568);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _client_card_client_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-card/client-card.component */ 440);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-card/project-card.component */ 7547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent, _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceCardComponent, _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_2__.EducationCardComponent, _certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_3__.CertificationCardComponent, _services_card_services_card_component__WEBPACK_IMPORTED_MODULE_4__.ServicesCardComponent, _client_card_client_card_component__WEBPACK_IMPORTED_MODULE_5__.ClientCardComponent, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__.ProjectCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceCardComponent,
        _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_2__.EducationCardComponent,
        _certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_3__.CertificationCardComponent,
        _services_card_services_card_component__WEBPACK_IMPORTED_MODULE_4__.ServicesCardComponent,
        _client_card_client_card_component__WEBPACK_IMPORTED_MODULE_5__.ClientCardComponent,
        _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__.ProjectCardComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_Pages_main-page_module_ts.js.map